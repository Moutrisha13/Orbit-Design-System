import CodeBlock from '../../components/docs/CodeBlock';

const TREE = `orbit-design-system/
├── src/
│   ├── pages/
│   │   ├── foundations/      # Colour, typography, spacing pages
│   │   ├── how-to-use/       # This section
│   │   └── Landing.tsx       # Landing page
│   ├── components/
│   │   ├── ui/               # All reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Toggle.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── ...
│   │   └── docs/             # Documentation-specific components
│   │       ├── CodeBlock.tsx
│   │       ├── NoteCallout.tsx
│   │       └── ...
│   ├── lib/
│   │   ├── componentList.ts  # Source of truth for component names
│   │   └── utils.ts
│   ├── styles/
│   │   ├── animations.css
│   │   └── dark-mode.css
│   └── generated/
│       └── tokens.css        # Generated CSS custom properties
├── tokens/                   # Figma token JSON files (source of truth)
│   ├── 1-Base.Mode 1.tokens.json
│   ├── 2-Semantics.Value.tokens.json
│   └── 3-Components.Mode 1.tokens.json
├── tailwind.config.ts
├── vite.config.ts
└── package.json`;

interface FolderRowProps {
  name: string;
  desc: string;
}

function FolderRow({ name, desc }: FolderRowProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 16,
      padding: '12px 0',
      borderBottom: '1px solid hsl(var(--semantic-color-border-default))',
      alignItems: 'start',
    }}>
      <code style={{
        fontSize: 13,
        fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
        color: '#068ae9',
        fontWeight: 600,
      }}>
        {name}
      </code>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '22px', margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

export default function ProjectStructure() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        SETUP GUIDE
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Project structure
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 24 }}>
        How Orbit is organised so you can find anything fast.
      </p>

      <CodeBlock language="bash" code={TREE} />

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 16 }}>
          Folder guide
        </h2>
        <div>
          <FolderRow name="src/pages/" desc="Route-level view components. Each sub-folder maps to a section: foundations, how-to-use, and the landing page." />
          <FolderRow name="src/components/ui/" desc="All reusable UI components (Button, Toggle, Accordion…). These are the production-ready components you copy into your project." />
          <FolderRow name="src/components/docs/" desc="Documentation helpers only used inside this design system site — CodeBlock, NoteCallout, StepNumber, TabGroup." />
          <FolderRow name="tokens/" desc="Figma token JSON files exported directly from the Figma Tokens plugin. These are the single source of truth for every design decision." />
          <FolderRow name="src/generated/" desc="Auto-generated tokens.css — CSS custom properties built from the token JSON files. Never edit this file manually." />
          <FolderRow name="src/styles/" desc="Hand-authored global CSS: dark-mode overrides and keyframe animations." />
          <FolderRow name="src/lib/" desc="Shared utilities: componentList.ts (keeps component count in sync), utils.ts (cn helper)." />
        </div>
      </div>
    </div>
  );
}
