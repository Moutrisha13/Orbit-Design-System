import { useState } from 'react';
import RadioGroup, { type RadioSize } from '../ui/Radio';
import { PillToggle, Toggle, ControlRow, PlaygroundShell, PageShell } from '../ui/PlaygroundControls';

const OPTIONS = [
  { id: 'opt1', label: 'Option 1', hint: 'A short hint for option 1.' },
  { id: 'opt2', label: 'Option 2', hint: 'A short hint for option 2.' },
  { id: 'opt3', label: 'Option 3', hint: 'A short hint for option 3.' },
];

type SelectedLabel = 'Option 1' | 'Option 2' | 'Option 3' | 'None';
const LABEL_MAP: Record<SelectedLabel, string | null> = { 'Option 1': 'opt1', 'Option 2': 'opt2', 'Option 3': 'opt3', None: null };

const DEFAULT = { selectedLabel: 'Option 1' as SelectedLabel, size: 'medium' as RadioSize, disabled: false, showHint: false };

export default function RadioPage() {
  const [tab,           setTab]           = useState<'playground' | 'usage'>('playground');
  const [selectedLabel, setSelectedLabel] = useState<SelectedLabel>(DEFAULT.selectedLabel);
  const [size,          setSize]          = useState<RadioSize>(DEFAULT.size);
  const [disabled,      setDisabled]      = useState(DEFAULT.disabled);
  const [showHint,      setShowHint]      = useState(DEFAULT.showHint);

  const selected = LABEL_MAP[selectedLabel];

  function reset() { setSelectedLabel(DEFAULT.selectedLabel); setSize(DEFAULT.size); setDisabled(DEFAULT.disabled); setShowHint(DEFAULT.showHint); }

  return (
    <PageShell title="Radio" description="Radio button group for single-option selection." tab={tab} setTab={setTab} storybookUrl="https://orbit-storybook.vercel.app/?path=/docs/components-radio--docs">
      {tab === 'playground' && (
        <PlaygroundShell title="Radio" description="" onReset={reset}
          controls={<>
            <ControlRow label="Selected Option"><PillToggle<SelectedLabel> options={['Option 1','Option 2','Option 3','None']} value={selectedLabel} onChange={setSelectedLabel} /></ControlRow>
            <ControlRow label="Size"><PillToggle<RadioSize> options={['large','medium','small']} value={size} onChange={setSize} /></ControlRow>
            <ControlRow label="Disabled"><Toggle checked={disabled} onChange={setDisabled} /></ControlRow>
            <ControlRow label="With Hint"><Toggle checked={showHint} onChange={setShowHint} /></ControlRow>
          </>}
          preview={
            <RadioGroup options={OPTIONS} selected={selected} size={size} disabled={disabled} showHint={showHint} onChange={(id) => { const lbl = Object.entries(LABEL_MAP).find(([,v]) => v===id)?.[0] as SelectedLabel; if(lbl) setSelectedLabel(lbl); }} />
          }
        />
      )}
      {tab === 'usage' && (
        <div className="flex flex-col gap-6 max-w-sm">
          {(['large','medium','small'] as RadioSize[]).map(s => (
            <div key={s} className="flex flex-col gap-2">
              <p className="text-xs font-semibold capitalize" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{s}</p>
              <RadioGroup options={OPTIONS.slice(0,2)} selected="opt1" size={s} />
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
}
