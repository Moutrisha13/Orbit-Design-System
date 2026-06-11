import { useState } from 'react';
import CheckboxComponent, { type CheckboxState, type CheckboxSize } from '../ui/Checkbox';
import { PillToggle, Toggle, TextInput, ControlRow, PlaygroundShell, PageShell } from '../ui/PlaygroundControls';

const DEFAULT = { state: 'checked' as CheckboxState, size: 'medium' as CheckboxSize, disabled: false, showLabel: true, showHint: false, label: 'Accept terms and conditions' };

export default function CheckboxPage() {
  const [tab,       setTab]       = useState<'playground' | 'usage'>('playground');
  const [state,     setState]     = useState<CheckboxState>(DEFAULT.state);
  const [size,      setSize]      = useState<CheckboxSize>(DEFAULT.size);
  const [disabled,  setDisabled]  = useState(DEFAULT.disabled);
  const [showLabel, setShowLabel] = useState(DEFAULT.showLabel);
  const [showHint,  setShowHint]  = useState(DEFAULT.showHint);
  const [label,     setLabel]     = useState(DEFAULT.label);

  function reset() { setState(DEFAULT.state); setSize(DEFAULT.size); setDisabled(DEFAULT.disabled); setShowLabel(DEFAULT.showLabel); setShowHint(DEFAULT.showHint); setLabel(DEFAULT.label); }

  function cycleState() {
    setState(s => s === 'unchecked' ? 'checked' : s === 'checked' ? 'indeterminate' : 'unchecked');
  }

  return (
    <PageShell title="Checkbox" description="Checkbox with label and hint across three states and three sizes." tab={tab} setTab={setTab} storybookUrl="http://localhost:6006/?path=/story/components-checkbox--default">
      {tab === 'playground' && (
        <PlaygroundShell title="Checkbox" description="" onReset={reset}
          controls={<>
            <ControlRow label="State"><PillToggle<CheckboxState> options={['unchecked','checked','indeterminate']} value={state} onChange={setState} /></ControlRow>
            <ControlRow label="Size"><PillToggle<CheckboxSize> options={['large','medium','small']} value={size} onChange={setSize} /></ControlRow>
            <ControlRow label="Disabled"><Toggle checked={disabled} onChange={setDisabled} /></ControlRow>
            <ControlRow label="With Label"><Toggle checked={showLabel} onChange={setShowLabel} /></ControlRow>
            <ControlRow label="With Hint"><Toggle checked={showHint} onChange={setShowHint} /></ControlRow>
            <ControlRow label="Label"><TextInput value={label} onChange={setLabel} /></ControlRow>
          </>}
          preview={<CheckboxComponent state={state} size={size} disabled={disabled} showLabel={showLabel} showHint={showHint} label={label} onChange={cycleState} />}
        />
      )}
      {tab === 'usage' && (
        <div className="flex flex-col gap-5 max-w-sm">
          {(['unchecked','checked','indeterminate'] as CheckboxState[]).map(s => (
            <div key={s} className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold capitalize" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{s}</p>
              <CheckboxComponent state={s} showLabel label={s.charAt(0).toUpperCase()+s.slice(1)} />
            </div>
          ))}
          <div className="flex flex-col gap-1.5">
            <p className="text-xs font-semibold" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Disabled</p>
            <CheckboxComponent state="checked" disabled showLabel label="Disabled checked" />
          </div>
        </div>
      )}
    </PageShell>
  );
}
