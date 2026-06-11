import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ToggleSwitch, { type ToggleState, type ToggleSize, type ToggleLabelPos } from '../ui/ToggleSwitch';
import { PillToggle, Toggle, TextInput, ControlRow, PlaygroundShell } from '../ui/PlaygroundControls';

const DEFAULT = {
  state:         'on'                   as ToggleState,
  size:          'medium'               as ToggleSize,
  disabled:      false,
  withLabel:     true,
  withHint:      false,
  label:         'Enable notifications',
  hint:          'You will receive alerts for all activity.',
  labelPosition: 'right'               as ToggleLabelPos,
};

type Tab = 'playground' | 'usage' | 'changelog';

export default function TogglePage() {
  const [tab,           setTab]           = useState<Tab>('playground');
  const [state,         setState]         = useState<ToggleState>(DEFAULT.state);
  const [size,          setSize]          = useState<ToggleSize>(DEFAULT.size);
  const [disabled,      setDisabled]      = useState(DEFAULT.disabled);
  const [withLabel,     setWithLabel]     = useState(DEFAULT.withLabel);
  const [withHint,      setWithHint]      = useState(DEFAULT.withHint);
  const [label,         setLabel]         = useState(DEFAULT.label);
  const [hint,          setHint]          = useState(DEFAULT.hint);
  const [labelPosition, setLabelPosition] = useState<ToggleLabelPos>(DEFAULT.labelPosition);

  function reset() {
    setState(DEFAULT.state); setSize(DEFAULT.size); setDisabled(DEFAULT.disabled);
    setWithLabel(DEFAULT.withLabel); setWithHint(DEFAULT.withHint);
    setLabel(DEFAULT.label); setHint(DEFAULT.hint); setLabelPosition(DEFAULT.labelPosition);
  }

  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>
            Toggle
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
            Binary on/off control for settings and preferences with animated thumb.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://www.figma.com/design/AkDPcl3IKljXQK8Cf0lKlJ/Sample-Design-System--For-WorkShop-?node-id=32041-13821" target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border hover:bg-black/5"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))', color: 'hsl(var(--semantic-color-text-secondary))' }}>
            Figma <ExternalLink className="size-3" />
          </a>
          <a href="https://orbit-storybook.vercel.app/?path=/docs/components-toggle--docs" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border hover:bg-black/5"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))', color: 'hsl(var(--semantic-color-text-secondary))' }}>
            Storybook <ExternalLink className="size-3" />
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-6" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
        {(['playground', 'usage', 'changelog'] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className="px-4 py-2.5 text-sm font-medium capitalize relative"
            style={{ color: tab === t ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-secondary))' }}>
            {t}
            {tab === t && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t" style={{ backgroundColor: 'hsl(var(--semantic-color-text-brand-primary))' }} />}
          </button>
        ))}
      </div>

      {/* Playground */}
      {tab === 'playground' && (
        <PlaygroundShell title="Toggle" description="" onReset={reset}
          controls={<>
            <ControlRow label="State">
              <PillToggle<ToggleState> options={['on','off']} value={state} onChange={setState} />
            </ControlRow>
            <ControlRow label="Size">
              <PillToggle<ToggleSize> options={['large','medium','small']} value={size} onChange={setSize} />
            </ControlRow>
            <ControlRow label="Disabled">
              <Toggle checked={disabled} onChange={setDisabled} />
            </ControlRow>
            <ControlRow label="With Label">
              <Toggle checked={withLabel} onChange={setWithLabel} />
            </ControlRow>
            <ControlRow label="With Hint">
              <Toggle checked={withHint} onChange={setWithHint} />
            </ControlRow>
            <ControlRow label="Label">
              <TextInput value={label} onChange={setLabel} />
            </ControlRow>
            {withHint && (
              <ControlRow label="Hint text">
                <TextInput value={hint} onChange={setHint} />
              </ControlRow>
            )}
            <ControlRow label="Label Position">
              <PillToggle<ToggleLabelPos> options={['right','left']} value={labelPosition} onChange={setLabelPosition} />
            </ControlRow>
          </>}
          preview={
            <ToggleSwitch
              state={state}
              size={size}
              disabled={disabled}
              withLabel={withLabel}
              withHint={withHint}
              label={label}
              hint={hint}
              labelPosition={labelPosition}
              onChange={(next) => setState(next)}
            />
          }
        />
      )}

      {/* Usage */}
      {tab === 'usage' && (
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-4">
            <Section title="When to use">
              <Item>Immediately applying a setting without a confirm/save step.</Item>
              <Item>Binary choices like on/off, show/hide, enable/disable.</Item>
              <Item>Settings pages and preference panels.</Item>
            </Section>
            <Section title="When not to use">
              <Item isNot>When the action requires a confirmation step — use a Checkbox + submit instead.</Item>
              <Item isNot>For selecting between more than two options — use Radio buttons instead.</Item>
              <Item isNot>Inside forms where changes are saved on submit.</Item>
            </Section>
          </div>

          <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
            <div className="grid grid-cols-2 divide-x">
              <DoCell isGood label="DO">Use a clear label that describes what turning ON does ("Enable dark mode").</DoCell>
              <DoCell isGood={false} label="DON'T">Use toggles for destructive or irreversible actions.</DoCell>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>All sizes</p>
            <div className="flex flex-col gap-5 p-6 rounded-xl" style={{ backgroundColor: '#f6f7f9' }}>
              {(['large','medium','small'] as ToggleSize[]).map(s => (
                <ToggleSwitch key={s} size={s} state="on" withLabel label={`Toggle — ${s}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Changelog */}
      {tab === 'changelog' && (
        <div className="rounded-xl border overflow-hidden max-w-2xl" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
          <div className="grid px-6 py-3 border-b" style={{ gridTemplateColumns: '100px 140px 1fr', borderColor: 'hsl(var(--semantic-color-border-default))', backgroundColor: 'hsl(var(--semantic-color-surface-subtle))' }}>
            {['Version','Date','Change'].map(h => <span key={h} className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{h}</span>)}
          </div>
          <div className="grid items-center px-6 py-4" style={{ gridTemplateColumns: '100px 140px 1fr' }}>
            <span className="text-xs font-mono font-semibold" style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}>1.0.0</span>
            <span className="text-xs" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>11 Jun 2026</span>
            <span className="text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>Initial release</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>{title}</h3>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </div>
  );
}
function Item({ children, isNot = false }: { children: React.ReactNode; isNot?: boolean }) {
  return (
    <li className="flex items-start gap-2 text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
      <span className="mt-0.5 shrink-0 text-xs font-bold" style={{ color: isNot ? '#ef4444' : '#22c55e' }}>{isNot ? '✕' : '✓'}</span>
      {children}
    </li>
  );
}
function DoCell({ label, isGood, children }: { label: string; isGood: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 p-5">
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: isGood ? '#22c55e' : '#ef4444' }}>{label}</span>
      <p className="text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>{children}</p>
    </div>
  );
}
