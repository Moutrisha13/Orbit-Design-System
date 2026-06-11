import { useState } from 'react';
import { Eye, Code2, ExternalLink, RotateCcw } from 'lucide-react';
import Alert, { type AlertVariant } from '../ui/Alert';

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'playground' | 'usage';

// ─── Shared control helpers ───────────────────────────────────────────────────

function PillToggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div
      className="flex rounded-lg p-0.5 gap-0.5"
      style={{ backgroundColor: 'hsl(var(--semantic-color-surface-subtle))' }}
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className="px-3 py-1 rounded-md text-xs font-medium capitalize transition-all"
          style={{
            backgroundColor:
              value === opt ? 'hsl(var(--semantic-color-surface-default))' : 'transparent',
            color:
              value === opt
                ? 'hsl(var(--semantic-color-text-primary))'
                : 'hsl(var(--semantic-color-text-secondary))',
            boxShadow: value === opt ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors duration-200"
      style={{
        backgroundColor: checked
          ? 'hsl(var(--semantic-color-text-brand-primary))'
          : 'hsl(var(--semantic-color-border-default))',
      }}
    >
      <span
        className="pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 mt-0.5"
        style={{ transform: checked ? 'translateX(18px)' : 'translateX(2px)' }}
      />
    </button>
  );
}

function TextInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg px-3 py-1.5 text-xs border outline-none transition-colors"
      style={{
        width: 220,
        fontFamily: 'var(--font-family-primary)',
        borderColor: 'hsl(var(--semantic-color-border-default))',
        backgroundColor: 'hsl(var(--semantic-color-surface-default))',
        color: 'hsl(var(--semantic-color-text-primary))',
      }}
    />
  );
}

function ControlRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-between gap-4 py-3"
      style={{ borderBottom: '1px solid hsl(var(--semantic-color-border-default))' }}
    >
      <span className="text-xs font-medium shrink-0" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
        {label}
      </span>
      {children}
    </div>
  );
}

// ─── Default state ────────────────────────────────────────────────────────────

const DEFAULT = {
  variant:     'default' as AlertVariant,
  showIcon:    true,
  withActions: false,
  title:       'Alert title',
  description: 'This is an alert description providing more detail.',
};

const VARIANTS: AlertVariant[] = ['default', 'success', 'warning', 'failure', 'info'];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AlertPage() {
  const [tab,         setTab]         = useState<Tab>('playground');
  const [variant,     setVariant]     = useState<AlertVariant>(DEFAULT.variant);
  const [showIcon,    setShowIcon]    = useState(DEFAULT.showIcon);
  const [withActions, setWithActions] = useState(DEFAULT.withActions);
  const [title,       setTitle]       = useState(DEFAULT.title);
  const [description, setDescription] = useState(DEFAULT.description);

  function reset() {
    setVariant(DEFAULT.variant);
    setShowIcon(DEFAULT.showIcon);
    setWithActions(DEFAULT.withActions);
    setTitle(DEFAULT.title);
    setDescription(DEFAULT.description);
  }

  const actions = withActions
    ? [{ label: 'Primary action' }, { label: 'Dismiss' }]
    : undefined;

  return (
    <div className="flex flex-col gap-0">
      {/* ── Page header ── */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>
            Alert
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
            Inline alert with colour variants, optional icons, and action buttons.
          </p>
        </div>
        <a
          href="https://orbit-storybook.vercel.app/?path=/docs/components-alert--docs" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors hover:bg-black/5"
          style={{
            borderColor: 'hsl(var(--semantic-color-border-default))',
            color: 'hsl(var(--semantic-color-text-secondary))',
          }}
        >
          Storybook
          <ExternalLink className="size-3" />
        </a>
      </div>

      {/* ── Tabs ── */}
      <div className="flex gap-0 border-b mb-6" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
        {(['playground', 'usage'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-4 py-2.5 text-sm font-medium capitalize transition-colors relative"
            style={{ color: tab === t ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-secondary))' }}
          >
            {t}
            {tab === t && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                style={{ backgroundColor: 'hsl(var(--semantic-color-text-brand-primary))' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Playground tab ── */}
      {tab === 'playground' && (
        <div className="flex flex-col md:flex-row gap-5" style={{ minHeight: 400 }}>

          {/* Controls panel */}
          <div
            className="flex flex-col rounded-xl border overflow-hidden md:w-[55%] md:shrink-0"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
          >
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{
                borderColor: 'hsl(var(--semantic-color-border-default))',
                backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>
                Playground
              </span>
              <button
                onClick={reset}
                className="flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-70"
                style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}
              >
                <RotateCcw className="size-3" />
                Reset
              </button>
            </div>

            <div className="flex flex-col px-5 pb-4 flex-1">
              <ControlRow label="Variant">
                <PillToggle<AlertVariant>
                  options={VARIANTS}
                  value={variant}
                  onChange={setVariant}
                />
              </ControlRow>

              <ControlRow label="With Icon">
                <Toggle checked={showIcon} onChange={setShowIcon} />
              </ControlRow>

              <ControlRow label="With Actions">
                <Toggle checked={withActions} onChange={setWithActions} />
              </ControlRow>

              <ControlRow label="Title">
                <TextInput value={title} onChange={setTitle} />
              </ControlRow>

              <ControlRow label="Description">
                <TextInput value={description} onChange={setDescription} />
              </ControlRow>
            </div>
          </div>

          {/* Preview panel */}
          <div
            className="flex flex-col rounded-xl border overflow-hidden md:flex-1"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
          >
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{
                borderColor: 'hsl(var(--semantic-color-border-default))',
                backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>
                Preview
              </span>
              <div className="flex items-center gap-2">
                <Eye className="size-3.5" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }} />
                <Code2 className="size-3.5" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }} />
              </div>
            </div>

            <div
              className="flex-1 flex items-center justify-center p-8"
              style={{ backgroundColor: 'hsl(var(--semantic-color-surface-default))' }}
            >
              <div style={{ width: '100%', maxWidth: 480 }}>
                <Alert
                  variant={variant}
                  title={title}
                  description={description}
                  showIcon={showIcon}
                  actions={actions}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Usage tab ── */}
      {tab === 'usage' && (
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-4">
            <UsageSection title="When to use">
              <UsageItem>Communicate a status change that needs user awareness — success, warning, error, or info.</UsageItem>
              <UsageItem>Inline feedback after a form submission or action.</UsageItem>
              <UsageItem>Non-blocking notices that don't require a modal dialog.</UsageItem>
            </UsageSection>
            <UsageSection title="When not to use">
              <UsageItem isNot>As a replacement for toast notifications (transient feedback).</UsageItem>
              <UsageItem isNot>For content that is always visible and not triggered by an action.</UsageItem>
              <UsageItem isNot>When you need to block user interaction — use a modal instead.</UsageItem>
            </UsageSection>
          </div>

          <div
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
          >
            <div className="grid grid-cols-2 divide-x" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
              <DoCell isGood label="DO">Keep alert messages short and actionable.</DoCell>
              <DoCell isGood={false} label="DON'T">Stack multiple alerts of the same type on the same page.</DoCell>
            </div>
          </div>

          {/* All variants reference */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>All variants</h3>
            {VARIANTS.map((v) => (
              <Alert
                key={v}
                variant={v}
                title={`${v.charAt(0).toUpperCase() + v.slice(1)} alert`}
                description="This is an example of this alert variant."
                showIcon
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Usage helpers ────────────────────────────────────────────────────────────

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>{title}</h3>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </div>
  );
}

function UsageItem({ children, isNot = false }: { children: React.ReactNode; isNot?: boolean }) {
  return (
    <li className="flex items-start gap-2 text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
      <span className="mt-0.5 shrink-0 text-xs font-bold" style={{ color: isNot ? '#ef4444' : '#22c55e' }}>
        {isNot ? '✕' : '✓'}
      </span>
      {children}
    </li>
  );
}

function DoCell({ label, isGood, children }: { label: string; isGood: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 p-5">
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: isGood ? '#22c55e' : '#ef4444' }}>
        {label}
      </span>
      <p className="text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>{children}</p>
    </div>
  );
}
