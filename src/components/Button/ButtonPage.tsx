import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ButtonComponent, { type ButtonType, type ButtonState, type ButtonSize } from '../ui/Button';
import { PillToggle, Toggle, TextInput, ControlRow, PlaygroundShell } from '../ui/PlaygroundControls';

const TYPES: ButtonType[]  = ['primary', 'secondary', 'success', 'warning', 'failure', 'info'];
const STATES: ButtonState[] = ['default', 'hover', 'pressed', 'loading', 'disabled'];
const SIZES: ButtonSize[]   = ['large', 'medium', 'small'];

const DEFAULT = {
  variant:       'primary'  as ButtonType,
  state:         'default'  as ButtonState,
  size:          'medium'   as ButtonSize,
  withText:      true,
  label:         'Button',
  showLeftIcon:  true,
  showRightIcon: true,
};

type Tab = 'playground' | 'usage' | 'changelog';

export default function ButtonPage() {
  const [tab,           setTab]           = useState<Tab>('playground');
  const [variant,       setVariant]       = useState<ButtonType>(DEFAULT.variant);
  const [state,         setState]         = useState<ButtonState>(DEFAULT.state);
  const [size,          setSize]          = useState<ButtonSize>(DEFAULT.size);
  const [withText,      setWithText]      = useState(DEFAULT.withText);
  const [label,         setLabel]         = useState(DEFAULT.label);
  const [showLeftIcon,  setShowLeftIcon]  = useState(DEFAULT.showLeftIcon);
  const [showRightIcon, setShowRightIcon] = useState(DEFAULT.showRightIcon);

  function reset() {
    setVariant(DEFAULT.variant); setState(DEFAULT.state); setSize(DEFAULT.size);
    setWithText(DEFAULT.withText); setLabel(DEFAULT.label);
    setShowLeftIcon(DEFAULT.showLeftIcon); setShowRightIcon(DEFAULT.showRightIcon);
  }

  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>
            Button
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
            Triggers an action or event — submit forms, open dialogs, confirm decisions.
          </p>
        </div>
        <a href="https://orbit-storybook.vercel.app/?path=/docs/components-button--docs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border hover:bg-black/5"
          style={{ borderColor: 'hsl(var(--semantic-color-border-default))', color: 'hsl(var(--semantic-color-text-secondary))' }}>
          Storybook <ExternalLink className="size-3" />
        </a>
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
        <PlaygroundShell title="Button" description="" onReset={reset}
          controls={<>
            <ControlRow label="Type">
              <PillToggle<ButtonType> options={TYPES} value={variant} onChange={setVariant} />
            </ControlRow>
            <ControlRow label="State">
              <PillToggle<ButtonState> options={STATES} value={state} onChange={setState} />
            </ControlRow>
            <ControlRow label="Size">
              <PillToggle<ButtonSize> options={SIZES} value={size} onChange={setSize} />
            </ControlRow>
            <ControlRow label="With Text">
              <Toggle checked={withText} onChange={setWithText} />
            </ControlRow>
            <ControlRow label="Label">
              <TextInput value={label} onChange={setLabel} width={160} />
            </ControlRow>
            <ControlRow label="Show Left Icon">
              <Toggle checked={showLeftIcon} onChange={setShowLeftIcon} />
            </ControlRow>
            <ControlRow label="Show Right Icon">
              <Toggle checked={showRightIcon} onChange={setShowRightIcon} />
            </ControlRow>
          </>}
          preview={
            <div style={{ padding: 32, backgroundColor: '#f6f7f9', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <ButtonComponent
                variant={variant} state={state} size={size}
                withText={withText} label={label}
                showLeftIcon={showLeftIcon} showRightIcon={showRightIcon}
              />
            </div>
          }
        />
      )}

      {/* Usage */}
      {tab === 'usage' && (
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-4">
            <Section title="When to use">
              <Item>Triggering a primary action — submitting a form, confirming a dialog.</Item>
              <Item>Navigation where a link is semantically incorrect (e.g. modal triggers).</Item>
              <Item>Offering a set of related actions with clear visual hierarchy.</Item>
            </Section>
            <Section title="When not to use">
              <Item isNot>For navigating to another page — use a link instead.</Item>
              <Item isNot>When the action is destructive without a confirmation step.</Item>
              <Item isNot>More than two primary actions side by side.</Item>
            </Section>
          </div>

          <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
            <div className="grid grid-cols-2 divide-x">
              <DoCell isGood label="DO">Use a single Primary button per section to establish clear hierarchy.</DoCell>
              <DoCell isGood={false} label="DON'T">Place two Primary buttons side by side — it creates visual confusion.</DoCell>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>All variants</p>
            <div className="flex flex-wrap gap-3 p-6 rounded-xl" style={{ backgroundColor: '#f6f7f9' }}>
              {TYPES.map(v => (
                <ButtonComponent key={v} variant={v} label={v.charAt(0).toUpperCase()+v.slice(1)} showLeftIcon={false} showRightIcon={false} />
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
