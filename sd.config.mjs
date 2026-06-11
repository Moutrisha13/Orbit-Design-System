/**
 * Style Dictionary config
 * Source: tokens/design-tokens/ (all 6 files from Figma export)
 * Outputs:
 *   src/generated/tokens.css          — CSS variables for Tailwind (@layer base)
 *   src/generated/tailwind-tokens.js  — colors object for tailwind.config.js
 */

import StyleDictionary from 'style-dictionary';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_DIR = join(__dirname, 'tokens/design-tokens');

// ─── Merge all source files into one token tree ───────────────────────────────
function loadJson(file) {
  return JSON.parse(readFileSync(join(BASE_DIR, file), 'utf8'));
}

function deepMerge(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === 'object' && !v.$value && !v.$type && !Array.isArray(v)) {
      target[k] = target[k] || {};
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
  return target;
}

const allTokens = [
  '1-Base.Mode 1.tokens.json',
  '2-Semantics.Value.tokens.json',
  '3-Components.Mode 1.tokens.json',
  'text.styles.tokens.json',
  'effect.styles.tokens.json',
].reduce((acc, file) => deepMerge(acc, loadJson(file)), {});

// ─── Hex → HSL (space-separated, no hsl() wrapper) ───────────────────────────
function hexToHsl(hex) {
  // Handle 8-char hex (RGBA) — strip alpha, use RGB only
  hex = hex.replace('#', '');
  if (hex.length === 8) hex = hex.slice(0, 6);
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// ─── Resolve a {dotted.path} reference against the full token tree ────────────
function resolveRef(ref, tree) {
  const path = ref.replace(/^\{|\}$/g, '').split('.');
  let node = tree;
  for (const p of path) {
    node = node?.[p];
    if (!node) return null;
  }
  return node;
}

// Fully resolve a value — follow chains of references
function resolveValue(value, tree, depth = 0) {
  if (depth > 10) return value;
  if (typeof value === 'string' && /^\{.+\}$/.test(value)) {
    const target = resolveRef(value, tree);
    if (target?.$value !== undefined) return resolveValue(target.$value, tree, depth + 1);
  }
  return value;
}

// ─── Flatten token tree into a list of { path[], type, value } ───────────────
function flattenTokens(obj, path = [], out = []) {
  if (obj && typeof obj === 'object' && obj.$type !== undefined) {
    out.push({ path: [...path], type: obj.$type, rawValue: obj.$value });
    return out;
  }
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      flattenTokens(v, [...path, k], out);
    }
  }
  return out;
}

const flatTokens = flattenTokens(allTokens);

// ─── Build resolved token list ────────────────────────────────────────────────
const resolved = flatTokens.map(t => ({
  ...t,
  value: resolveValue(t.rawValue, allTokens),
}));

// ─── Helpers to generate CSS var names ───────────────────────────────────────
function cssVar(path) {
  return '--' + path.join('-').toLowerCase()
    .replace(/[_\s]/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatColorValue(val) {
  if (typeof val === 'string' && /^#/.test(val)) return hexToHsl(val);
  return val;
}

function formatDimensionValue(val) {
  if (typeof val === 'string') return val; // already "16px" etc.
  return `${val}px`;
}

function formatShadowValue(shadows) {
  if (!Array.isArray(shadows)) return shadows;
  return shadows.map(s =>
    `${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color}`
  ).join(', ');
}

// ─── Split tokens by layer ────────────────────────────────────────────────────
const baseColors     = resolved.filter(t => t.type === 'color' && t.path[0] === 'base');
const semanticColors = resolved.filter(t => t.type === 'color' && t.path[0] === 'semantic');
const componentColors= resolved.filter(t => t.type === 'color' && t.path[0] === 'components');
const dimensions     = resolved.filter(t => t.type === 'dimension' && t.path[0] === 'semantic');
const shadows        = resolved.filter(t => t.type === 'shadow');

// ─── Custom format: tokens.css ────────────────────────────────────────────────
StyleDictionary.registerFormat({
  name: 'css/ds-tokens',
  format() {
    const lines = (tokens, fn) => tokens.map(t => `    ${cssVar(t.path)}: ${fn(t.value)};`).join('\n');

    return [
      '/* ============================================================',
      ' * Generated by Style Dictionary from tokens/design-tokens/',
      ' * DO NOT EDIT MANUALLY — run `npm run tokens` to regenerate',
      ' * ============================================================ */',
      '',
      '@tailwind base;',
      '@tailwind components;',
      '@tailwind utilities;',
      '',
      '@layer base {',
      '  /* ── Semantic colour tokens (use these in components) ─── */',
      '  :root {',
      lines(semanticColors, t => formatColorValue(t)),
      '    /* Tailwind/shadcn compatibility aliases — raw HSL so hsl(var(--x)) works */',
      '    --background: var(--semantic-color-surface-default);',
      '    --foreground: var(--semantic-color-text-primary);',
      '    --border: var(--semantic-color-border-default);',
      '    --ring: var(--semantic-color-border-extra-bold);',
      '    --muted: var(--semantic-color-surface-light);',
      '    --muted-foreground: var(--semantic-color-text-secondary);',
      '    --radius: 0.5rem;',
      '  }',
      '',
      '  /* ── Component colour tokens ─────────────────────────── */',
      '  :root {',
      lines(componentColors, t => formatColorValue(t)),
      '  }',
      '',
      '  /* ── Semantic spacing / sizing / corner-radius ───────── */',
      '  :root {',
      lines(dimensions, t => formatDimensionValue(t)),
      '  }',
      '',
      '  /* ── Drop shadows ────────────────────────────────────── */',
      '  :root {',
      lines(shadows, t => formatShadowValue(t)),
      '  }',
      '',
      '  /* ── Base colour palette (primitives) ────────────────── */',
      '  :root {',
      lines(baseColors, t => formatColorValue(t)),
      '  }',
      '}',
      '',
      '@layer base {',
      '  * { border-color: hsl(var(--semantic-color-border-default)); }',
      '  body {',
      '    background-color: hsl(var(--semantic-color-surface-default));',
      '    color: hsl(var(--semantic-color-text-primary));',
      '  }',
      '}',
    ].join('\n');
  },
});

// ─── Custom format: tailwind-tokens.js ───────────────────────────────────────
StyleDictionary.registerFormat({
  name: 'js/ds-tailwind-config',
  format() {
    // Build nested color object from semantic tokens
    // path: ['semantic', 'color', 'text', 'primary'] → colors.semantic.color.text.primary
    // We strip the 'semantic.color' prefix for cleaner Tailwind class names:
    // semantic.color.text.primary → text-primary in Tailwind
    function buildNestedColors(tokens) {
      const obj = {};
      for (const t of tokens) {
        // Skip base palette from tailwind colors (too many, add noise)
        const parts = t.path.slice(0); // e.g. ['semantic','color','text','primary']
        let node = obj;
        for (let i = 0; i < parts.length - 1; i++) {
          const k = parts[i];
          if (!node[k] || typeof node[k] === 'string') node[k] = {};
          node = node[k];
        }
        const leaf = parts[parts.length - 1];
        node[leaf] = `'hsl(var(${cssVar(t.path)}))'`;
      }
      return obj;
    }

    function serialize(obj, depth = 1) {
      const pad = '  '.repeat(depth);
      return Object.entries(obj).map(([k, v]) => {
        const safeKey = /[^a-zA-Z0-9_$]/.test(k) ? `'${k}'` : k;
        if (typeof v === 'object') {
          return `${pad}${safeKey}: {\n${serialize(v, depth + 1)}\n${pad}}`;
        }
        return `${pad}${safeKey}: ${v}`;
      }).join(',\n');
    }

    const semanticColorObj = buildNestedColors(semanticColors);
    const componentColorObj = buildNestedColors(componentColors);

    return [
      '/* ============================================================',
      ' * Generated by Style Dictionary from tokens/design-tokens/',
      ' * DO NOT EDIT MANUALLY — run `npm run tokens` to regenerate',
      ' * Merge into tailwind.config.js → theme.extend',
      ' * ============================================================ */',
      '',
      'export default {',
      '  colors: {',
      serialize(semanticColorObj, 2),
      '  },',
      '  components: {',
      serialize(componentColorObj, 2),
      '  },',
      '};',
    ].join('\n');
  },
});

// ─── Run Style Dictionary ─────────────────────────────────────────────────────
mkdirSync(join(__dirname, 'src/generated'), { recursive: true });

// SD needs tokens in its own format — we pass the merged tree directly
const sd = new StyleDictionary({
  tokens: allTokens,
  platforms: {
    css: {
      transformGroup: 'css',
      files: [
        {
          destination: join(__dirname, 'src/generated/tokens.css'),
          format: 'css/ds-tokens',
        },
        {
          destination: join(__dirname, 'src/generated/tailwind-tokens.js'),
          format: 'js/ds-tailwind-config',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();

// Count what was generated
const colorCount = semanticColors.length + componentColors.length;
const dimCount   = dimensions.length;
const shadowCount = shadows.length;

console.log(`\n✅ Tokens built from tokens/design-tokens/`);
console.log(`   ${semanticColors.length} semantic colour vars`);
console.log(`   ${componentColors.length} component colour vars`);
console.log(`   ${dimCount} dimension vars (spacing, sizing, corner-radius)`);
console.log(`   ${shadowCount} shadow vars`);
console.log(`   ${baseColors.length} base palette vars`);
console.log(`\n→  src/generated/tokens.css`);
console.log(`→  src/generated/tailwind-tokens.js`);
