import { useState } from 'react';
import BadgeComponent, { type BadgeColor, type BadgeStyle } from '../ui/Badge';
import { PillToggle, Toggle, TextInput, ControlRow, PlaygroundShell, PageShell } from '../ui/PlaygroundControls';

const COLORS: BadgeColor[] = ['default', 'blue', 'green', 'red', 'yellow', 'purple'];
const DEFAULT = { color: 'blue' as BadgeColor, style: 'light' as BadgeStyle, showIcon: true, showCount: false, label: 'Live', count: 12 };

export default function BadgePage() {
  const [tab,       setTab]       = useState<'playground' | 'usage'>('playground');
  const [color,     setColor]     = useState<BadgeColor>(DEFAULT.color);
  const [style,     setStyle]     = useState<BadgeStyle>(DEFAULT.style);
  const [showIcon,  setShowIcon]  = useState(DEFAULT.showIcon);
  const [showCount, setShowCount] = useState(DEFAULT.showCount);
  const [label,     setLabel]     = useState(DEFAULT.label);

  function reset() { setColor(DEFAULT.color); setStyle(DEFAULT.style); setShowIcon(DEFAULT.showIcon); setShowCount(DEFAULT.showCount); setLabel(DEFAULT.label); }

  return (
    <PageShell title="Badge" description="Pill-shaped badge with colour tones, icon, and count bubble." tab={tab} setTab={setTab} storybookUrl="http://localhost:6006/?path=/story/components-badge--default">
      {tab === 'playground' && (
        <PlaygroundShell title="Badge" description="" onReset={reset}
          controls={<>
            <ControlRow label="Color"><PillToggle<BadgeColor> options={COLORS} value={color} onChange={setColor} /></ControlRow>
            <ControlRow label="Style"><PillToggle<BadgeStyle> options={['light','heavy']} value={style} onChange={setStyle} /></ControlRow>
            <ControlRow label="With Icon"><Toggle checked={showIcon} onChange={setShowIcon} /></ControlRow>
            <ControlRow label="With Count"><Toggle checked={showCount} onChange={setShowCount} /></ControlRow>
            <ControlRow label="Label"><TextInput value={label} onChange={setLabel} width={160} /></ControlRow>
          </>}
          preview={<BadgeComponent color={color} style={style} showIcon={showIcon} showCount={showCount} label={label} count={DEFAULT.count} />}
        />
      )}
      {tab === 'usage' && (
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>All colours — Light</p>
            <div className="flex flex-wrap gap-3">
              {COLORS.map(c => <BadgeComponent key={c} color={c} style="light" showIcon label={c.charAt(0).toUpperCase()+c.slice(1)} />)}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>All colours — Heavy</p>
            <div className="flex flex-wrap gap-3">
              {COLORS.map(c => <BadgeComponent key={c} color={c} style="heavy" showIcon label={c.charAt(0).toUpperCase()+c.slice(1)} />)}
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
