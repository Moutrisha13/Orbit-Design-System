import { useState } from 'react';
import InputComponent, { type InputState, type InputSize } from '../ui/Input';
import { PillToggle, Toggle, TextInput, ControlRow, PlaygroundShell, PageShell } from '../ui/PlaygroundControls';

const DEFAULT = { state: 'default' as InputState, size: 'medium' as InputSize, showLabel: true, showHint: true, showLeftIcon: false, showRightIcon: false, label: 'Email address', placeholder: 'Enter your email', hint: "We'll never share your email." };

export default function InputPage() {
  const [tab,           setTab]           = useState<'playground' | 'usage'>('playground');
  const [state,         setState]         = useState<InputState>(DEFAULT.state);
  const [size,          setSize]          = useState<InputSize>(DEFAULT.size);
  const [showLabel,     setShowLabel]     = useState(DEFAULT.showLabel);
  const [showHint,      setShowHint]      = useState(DEFAULT.showHint);
  const [showLeftIcon,  setShowLeftIcon]  = useState(DEFAULT.showLeftIcon);
  const [showRightIcon, setShowRightIcon] = useState(DEFAULT.showRightIcon);
  const [label,         setLabel]         = useState(DEFAULT.label);
  const [placeholder,   setPlaceholder]   = useState(DEFAULT.placeholder);
  const [hint,          setHint]          = useState(DEFAULT.hint);

  function reset() { setState(DEFAULT.state); setSize(DEFAULT.size); setShowLabel(DEFAULT.showLabel); setShowHint(DEFAULT.showHint); setShowLeftIcon(DEFAULT.showLeftIcon); setShowRightIcon(DEFAULT.showRightIcon); setLabel(DEFAULT.label); setPlaceholder(DEFAULT.placeholder); setHint(DEFAULT.hint); }

  return (
    <PageShell title="Input" description="Text input with label, hint text, and icon slots across four states." tab={tab} setTab={setTab} storybookUrl="http://localhost:6006/?path=/story/components-input--default">
      {tab === 'playground' && (
        <PlaygroundShell title="Input" description="" onReset={reset}
          controls={<>
            <ControlRow label="State"><PillToggle<InputState> options={['default','focused','error','disabled']} value={state} onChange={setState} /></ControlRow>
            <ControlRow label="Size"><PillToggle<InputSize> options={['large','medium','small']} value={size} onChange={setSize} /></ControlRow>
            <ControlRow label="With Label"><Toggle checked={showLabel} onChange={setShowLabel} /></ControlRow>
            <ControlRow label="With Hint"><Toggle checked={showHint} onChange={setShowHint} /></ControlRow>
            <ControlRow label="With Left Icon"><Toggle checked={showLeftIcon} onChange={setShowLeftIcon} /></ControlRow>
            <ControlRow label="With Right Icon"><Toggle checked={showRightIcon} onChange={setShowRightIcon} /></ControlRow>
            <ControlRow label="Label"><TextInput value={label} onChange={setLabel} /></ControlRow>
            <ControlRow label="Placeholder"><TextInput value={placeholder} onChange={setPlaceholder} /></ControlRow>
            <ControlRow label="Hint text"><TextInput value={hint} onChange={setHint} /></ControlRow>
          </>}
          preview={
            <div style={{ width: '100%', maxWidth: 360 }}>
              <InputComponent state={state} size={size} showLabel={showLabel} showHint={showHint} showLeftIcon={showLeftIcon} showRightIcon={showRightIcon} label={label} placeholder={placeholder} hint={hint} />
            </div>
          }
        />
      )}
      {tab === 'usage' && (
        <div className="flex flex-col gap-6 max-w-sm">
          {(['default','focused','error','disabled'] as InputState[]).map(s => (
            <div key={s} className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold capitalize" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{s}</p>
              <InputComponent state={s} showLabel showHint label="Email address" placeholder="Enter your email" hint={s === 'error' ? 'Invalid email address.' : "We'll never share your email."} />
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
}
