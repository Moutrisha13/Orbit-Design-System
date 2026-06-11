import { RotateCcw, Eye, Code2, ExternalLink } from 'lucide-react';

// ─── Pill toggle ─────────────────────────────────────────────────────────────

export function PillToggle<T extends string>({
  options, value, onChange,
}: { options: T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="flex rounded-lg p-0.5 gap-0.5" style={{ backgroundColor: 'hsl(var(--semantic-color-surface-subtle))' }}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className="px-3 py-1 rounded-md text-xs font-medium capitalize transition-all"
          style={{
            backgroundColor: value === opt ? 'hsl(var(--semantic-color-surface-default))' : 'transparent',
            color: value === opt ? 'hsl(var(--semantic-color-text-primary))' : 'hsl(var(--semantic-color-text-secondary))',
            boxShadow: value === opt ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// ─── Toggle switch ────────────────────────────────────────────────────────────

export function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors duration-200"
      style={{ backgroundColor: checked ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-border-default))' }}
    >
      <span
        className="pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 mt-0.5"
        style={{ transform: checked ? 'translateX(18px)' : 'translateX(2px)' }}
      />
    </button>
  );
}

// ─── Text input ───────────────────────────────────────────────────────────────

export function TextInput({ value, onChange, width = 220 }: { value: string; onChange: (v: string) => void; width?: number }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg px-3 py-1.5 text-xs border outline-none"
      style={{
        width,
        fontFamily: 'var(--font-family-primary)',
        borderColor: 'hsl(var(--semantic-color-border-default))',
        backgroundColor: 'hsl(var(--semantic-color-surface-default))',
        color: 'hsl(var(--semantic-color-text-primary))',
      }}
    />
  );
}

// ─── Control row ──────────────────────────────────────────────────────────────

export function ControlRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3" style={{ borderBottom: '1px solid hsl(var(--semantic-color-border-default))' }}>
      <span className="text-xs font-medium shrink-0" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>{label}</span>
      {children}
    </div>
  );
}

// ─── Playground shell ─────────────────────────────────────────────────────────

export function PlaygroundShell({
  title: _title, description: _description, onReset, controls, preview,
}: {
  title?: string;
  description?: string;
  onReset: () => void;
  controls: React.ReactNode;
  preview: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-5" style={{ minHeight: 400 }}>
      {/* Controls */}
      <div className="flex flex-col rounded-xl border overflow-hidden md:w-[55%] md:shrink-0" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
        <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'hsl(var(--semantic-color-border-default))', backgroundColor: 'hsl(var(--semantic-color-surface-subtle))' }}>
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Playground</span>
          <button onClick={onReset} className="flex items-center gap-1 text-xs font-medium hover:opacity-70" style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}>
            <RotateCcw className="size-3" /> Reset
          </button>
        </div>
        <div className="flex flex-col px-5 pb-4 flex-1">{controls}</div>
      </div>

      {/* Preview */}
      <div className="flex flex-col rounded-xl border overflow-hidden md:flex-1" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
        <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'hsl(var(--semantic-color-border-default))', backgroundColor: 'hsl(var(--semantic-color-surface-subtle))' }}>
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Preview</span>
          <div className="flex items-center gap-2">
            <Eye className="size-3.5" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }} />
            <Code2 className="size-3.5" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }} />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-8" style={{ backgroundColor: 'hsl(var(--semantic-color-surface-default))' }}>
          {preview}
        </div>
      </div>
    </div>
  );
}

// ─── Page shell (heading + tabs) ──────────────────────────────────────────────

type Tab = 'playground' | 'usage';

export function PageShell({
  title, description, tab, setTab, children, storybookUrl,
}: {
  title: string;
  description: string;
  tab: Tab;
  setTab: (t: Tab) => void;
  children: React.ReactNode;
  storybookUrl?: string;
}) {
  return (
    <div className="flex flex-col gap-0">
      <div className="flex items-start justify-between mb-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>{title}</h1>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>{description}</p>
        </div>
        <a href={storybookUrl ?? '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border hover:bg-black/5" style={{ borderColor: 'hsl(var(--semantic-color-border-default))', color: 'hsl(var(--semantic-color-text-secondary))' }}>
          Storybook <ExternalLink className="size-3" />
        </a>
      </div>

      <div className="flex gap-0 border-b mb-6" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
        {(['playground', 'usage'] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)} className="px-4 py-2.5 text-sm font-medium capitalize relative"
            style={{ color: tab === t ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-secondary))' }}>
            {t}
            {tab === t && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t" style={{ backgroundColor: 'hsl(var(--semantic-color-text-brand-primary))' }} />}
          </button>
        ))}
      </div>

      {children}
    </div>
  );
}
