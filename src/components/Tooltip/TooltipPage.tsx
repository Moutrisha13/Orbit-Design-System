import { useState } from 'react';
import TooltipComponent, { type TooltipPlacement, type TooltipStyle } from '../ui/Tooltip';
import { PillToggle, Toggle, TextInput, ControlRow, PlaygroundShell, PageShell } from '../ui/PlaygroundControls';

const DEFAULT = { placement: 'top' as TooltipPlacement, style: 'dark' as TooltipStyle, showArrow: true, content: 'This is a tooltip' };

export default function TooltipPage() {
  const [tab,       setTab]       = useState<'playground' | 'usage'>('playground');
  const [placement, setPlacement] = useState<TooltipPlacement>(DEFAULT.placement);
  const [style,     setStyle]     = useState<TooltipStyle>(DEFAULT.style);
  const [showArrow, setShowArrow] = useState(DEFAULT.showArrow);
  const [content,   setContent]   = useState(DEFAULT.content);

  function reset() { setPlacement(DEFAULT.placement); setStyle(DEFAULT.style); setShowArrow(DEFAULT.showArrow); setContent(DEFAULT.content); }

  const PADDING: Record<TooltipPlacement, string> = { top: '80px 0 20px', bottom: '20px 0 80px', left: '0 20px 0 80px', right: '0 80px 0 20px' };

  return (
    <PageShell title="Tooltip" description="Contextual tooltip with four placement options and two style variants." tab={tab} setTab={setTab} storybookUrl="http://localhost:6006/?path=/story/components-tooltip--default">
      {tab === 'playground' && (
        <PlaygroundShell title="Tooltip" description="" onReset={reset}
          controls={<>
            <ControlRow label="Placement"><PillToggle<TooltipPlacement> options={['top','bottom','left','right']} value={placement} onChange={setPlacement} /></ControlRow>
            <ControlRow label="Style"><PillToggle<TooltipStyle> options={['dark','light']} value={style} onChange={setStyle} /></ControlRow>
            <ControlRow label="With Arrow"><Toggle checked={showArrow} onChange={setShowArrow} /></ControlRow>
            <ControlRow label="Content"><TextInput value={content} onChange={setContent} /></ControlRow>
          </>}
          preview={
            <div style={{ padding: PADDING[placement] }}>
              <TooltipComponent placement={placement} style={style} showArrow={showArrow} content={content}>
                <button
                  className="px-4 py-2 rounded-lg text-sm font-medium border"
                  style={{
                    borderColor: 'hsl(var(--semantic-color-border-default))',
                    backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
                    color: 'hsl(var(--semantic-color-text-primary))',
                    fontFamily: 'var(--font-family-primary)',
                  }}
                >
                  Hover me
                </button>
              </TooltipComponent>
            </div>
          }
        />
      )}
      {tab === 'usage' && (
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>Both styles</p>
            <div className="flex gap-16 items-center py-8">
              {(['dark','light'] as TooltipStyle[]).map(s => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div style={{ padding: '40px 0 8px' }}>
                    <TooltipComponent style={s} placement="top" content="Tooltip text">
                      <button className="px-3 py-1.5 rounded-lg text-xs border" style={{ borderColor: 'hsl(var(--semantic-color-border-default))', color: 'hsl(var(--semantic-color-text-secondary))', fontFamily: 'var(--font-family-primary)' }}>
                        Trigger
                      </button>
                    </TooltipComponent>
                  </div>
                  <span className="text-xs font-mono capitalize" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
