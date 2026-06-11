export type ToggleState    = 'on' | 'off';
export type ToggleSize     = 'large' | 'medium' | 'small';
export type ToggleLabelPos = 'left' | 'right';

export interface ToggleSwitchProps {
  state?: ToggleState;
  size?: ToggleSize;
  disabled?: boolean;
  withLabel?: boolean;
  withHint?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: ToggleLabelPos;
  onChange?: (next: ToggleState) => void;
}

const TRACK: Record<ToggleSize, { w: number; h: number }> = {
  large:  { w: 48, h: 28 },
  medium: { w: 40, h: 24 },
  small:  { w: 32, h: 18 },
};

const THUMB: Record<ToggleSize, { d: number; offset: number }> = {
  large:  { d: 22, offset: 3 },
  medium: { d: 18, offset: 3 },
  small:  { d: 14, offset: 2 },
};

const LABEL_SIZE: Record<ToggleSize, number> = { large: 17, medium: 15, small: 13 };

export default function ToggleSwitch({
  state = 'on',
  size = 'medium',
  disabled = false,
  withLabel = true,
  withHint = false,
  label = 'Enable notifications',
  hint = 'You will receive alerts for all activity.',
  labelPosition = 'right',
  onChange,
}: ToggleSwitchProps) {
  const isOn = state === 'on';
  const track = TRACK[size];
  const thumb = THUMB[size];
  const labelSize = LABEL_SIZE[size];
  const translateX = isOn ? track.w - thumb.d - thumb.offset : thumb.offset;

  function handleToggle() {
    if (!disabled) onChange?.(isOn ? 'off' : 'on');
  }

  const trackEl = (
    <button
      role="switch"
      aria-checked={isOn}
      aria-disabled={disabled}
      onClick={handleToggle}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); handleToggle(); } }}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: track.w,
        height: track.h,
        borderRadius: 9999,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: isOn ? '#068ae9' : '#ced6de',
        transition: 'background-color 200ms ease',
        flexShrink: 0,
        outline: 'none',
        padding: 0,
      }}
      className="focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <span
        style={{
          position: 'absolute',
          width: thumb.d,
          height: thumb.d,
          borderRadius: 9999,
          backgroundColor: '#ffffff',
          boxShadow: '0px 1px 2px 0px #1018280f, 0px 1px 3px 0px #1018281a',
          transform: `translateX(${translateX}px)`,
          transition: 'transform 200ms ease, box-shadow 200ms ease',
        }}
      />
    </button>
  );

  const labelEl = withLabel ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span
        style={{
          fontSize: labelSize,
          fontWeight: 500,
          color: 'hsl(var(--semantic-color-text-primary))',
          fontFamily: 'var(--font-family-primary)',
          lineHeight: '20px',
          userSelect: 'none',
        }}
      >
        {label}
      </span>
      {withHint && (
        <span
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: 'hsl(var(--semantic-color-text-secondary))',
            fontFamily: 'var(--font-family-primary)',
            lineHeight: '18px',
          }}
        >
          {hint}
        </span>
      )}
    </div>
  ) : null;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: withHint ? 'flex-start' : 'center',
        gap: 10,
        opacity: disabled ? 0.4 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        cursor: disabled ? 'not-allowed' : 'default',
      }}
    >
      {labelPosition === 'left'  && labelEl}
      {trackEl}
      {labelPosition === 'right' && labelEl}
    </div>
  );
}
