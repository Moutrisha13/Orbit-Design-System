import { useState } from 'react';
import AvatarComponent, { type AvatarMode, type AvatarSize, type AvatarStatus, type AvatarBg } from '../ui/Avatar';
import { PillToggle, Toggle, TextInput, ControlRow, PlaygroundShell, PageShell } from '../ui/PlaygroundControls';

const DEFAULT = { mode: 'initials' as AvatarMode, size: 'large' as AvatarSize, showStatus: true, status: 'online' as AvatarStatus, initials: 'HB', bg: 'blue' as AvatarBg };

export default function AvatarPage() {
  const [tab, setTab] = useState<'playground' | 'usage'>('playground');
  const [mode,       setMode]       = useState<AvatarMode>(DEFAULT.mode);
  const [size,       setSize]       = useState<AvatarSize>(DEFAULT.size);
  const [showStatus, setShowStatus] = useState(DEFAULT.showStatus);
  const [status,     setStatus]     = useState<AvatarStatus>(DEFAULT.status);
  const [initials,   setInitials]   = useState(DEFAULT.initials);
  const [bg,         setBg]         = useState<AvatarBg>(DEFAULT.bg);

  function reset() { setMode(DEFAULT.mode); setSize(DEFAULT.size); setShowStatus(DEFAULT.showStatus); setStatus(DEFAULT.status); setInitials(DEFAULT.initials); setBg(DEFAULT.bg); }

  return (
    <PageShell title="Avatar" description="Circular avatar in image, icon, or initials mode with optional status dot." tab={tab} setTab={setTab} storybookUrl="https://orbit-storybook.vercel.app/?path=/docs/components-avatar--docs">
      {tab === 'playground' && (
        <PlaygroundShell title="Avatar" description="" onReset={reset}
          controls={<>
            <ControlRow label="Mode"><PillToggle<AvatarMode> options={['image','icon','initials']} value={mode} onChange={setMode} /></ControlRow>
            <ControlRow label="Size"><PillToggle<AvatarSize> options={['xl','large','medium','small']} value={size} onChange={setSize} /></ControlRow>
            <ControlRow label="Show Status Dot"><Toggle checked={showStatus} onChange={setShowStatus} /></ControlRow>
            {showStatus && <ControlRow label="Status"><PillToggle<AvatarStatus> options={['online','offline','busy']} value={status} onChange={setStatus} /></ControlRow>}
            {mode === 'initials' && <ControlRow label="Initials"><TextInput value={initials} onChange={setInitials} width={80} /></ControlRow>}
            <ControlRow label="Background Color"><PillToggle<AvatarBg> options={['blue','pink','green','purple','teal']} value={bg} onChange={setBg} /></ControlRow>
          </>}
          preview={
            <AvatarComponent mode={mode} size={size} showStatus={showStatus} status={status} initials={initials} bg={bg} />
          }
        />
      )}
      {tab === 'usage' && (
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>All sizes</p>
            <div className="flex items-end gap-6">
              {(['xl','large','medium','small'] as AvatarSize[]).map(s => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <AvatarComponent size={s} mode="initials" initials="HB" showStatus />
                  <span className="text-xs font-mono" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>All modes</p>
            <div className="flex items-center gap-6">
              {(['image','icon','initials'] as AvatarMode[]).map(m => (
                <div key={m} className="flex flex-col items-center gap-2">
                  <AvatarComponent mode={m} initials="HB" showStatus={false} />
                  <span className="text-xs font-mono" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
