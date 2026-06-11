import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const SHADOWS = [
  {
    name: 'sm',
    description: 'Slight separation — tooltips, popovers, tags.',
    css: '0px 1px 2px 0px #1018280f, 0px 1px 3px 0px #1018281a',
  },
  {
    name: 'md',
    description: 'Cards lifting off the canvas — default elevation.',
    css: '0px 2px 4px -2px #1018280f, 0px 4px 8px -2px #1018281a',
  },
  {
    name: 'lg',
    description: 'Dropdowns, date pickers, contextual menus.',
    css: '0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814',
  },
];

function ShadowCard({ name, description, css, darkMode }: {
  name: string;
  description: string;
  css: string;
  darkMode: boolean;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{
        borderColor: 'hsl(var(--semantic-color-border-default))',
        backgroundColor: 'hsl(var(--semantic-color-surface-default))',
      }}
    >
      {/* Preview area */}
      <div
        className="flex items-center justify-center p-8"
        style={{
          backgroundColor: darkMode ? '#313d49' : '#f0f2f5',
          minHeight: 180,
        }}
      >
        <div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: '100%',
            maxWidth: 260,
            height: 100,
            backgroundColor: darkMode ? '#1e2832' : '#ffffff',
            boxShadow: css,
            borderRadius: 12,
          }}
        >
          <span
            className="text-sm font-mono"
            style={{ color: darkMode ? '#64748b' : '#94a3b8' }}
          >
            shadow-{name}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <span
            className="text-base font-bold"
            style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
          >
            {name}
          </span>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}
          >
            {description}
          </p>
        </div>

        {/* CSS value */}
        <button
          onClick={handleCopy}
          className="group flex items-start justify-between gap-2 rounded-lg px-3 py-2.5 text-left transition-colors"
          style={{
            backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
            border: '1px solid hsl(var(--semantic-color-border-default))',
          }}
        >
          <span
            className="text-[11px] font-mono leading-relaxed break-all flex-1"
            style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
          >
            {css}
          </span>
          <span
            className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}
          >
            {copied
              ? <Check className="size-3.5" />
              : <Copy className="size-3.5" />
            }
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Shadows({ theme }: { theme?: 'light' | 'dark' }) {
  const darkMode = theme === 'dark';

  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
        >
          Shadows
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
          Seven deliberate elevations — from barely lifted to floating.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
      >
        {SHADOWS.map((s) => (
          <ShadowCard key={s.name} {...s} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}
