import { Check, Minus } from 'lucide-react';

export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';
export type CheckboxSize  = 'large' | 'medium' | 'small';

export interface CheckboxProps {
  state?: CheckboxState;
  size?: CheckboxSize;
  disabled?: boolean;
  showLabel?: boolean;
  showHint?: boolean;
  label?: string;
  hint?: string;
  onChange?: () => void;
}

const BOX_SIZES: Record<CheckboxSize, number> = { large: 20, medium: 16, small: 14 };
const ICON_SIZES: Record<CheckboxSize, number> = { large: 13, medium: 11, small: 9 };
const LABEL_SIZES: Record<CheckboxSize, number> = { large: 15, medium: 14, small: 13 };

export default function Checkbox({
  state = 'checked',
  size = 'medium',
  disabled = false,
  showLabel = true,
  showHint = false,
  label = 'Accept terms and conditions',
  hint = 'You must agree to our terms to continue.',
  onChange,
}: CheckboxProps) {
  const box = BOX_SIZES[size];
  const iconSize = ICON_SIZES[size];
  const labelSize = LABEL_SIZES[size];

  const isChecked = state === 'checked';
  const isIndet   = state === 'indeterminate';
  const filled    = isChecked || isIndet;

  const bg     = disabled ? '#f3f4f6' : filled ? '#068ae9' : '#ffffff';
  const border = disabled ? '#d1d5db' : filled ? '#068ae9' : '#d1d5db';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 8,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-family-primary)',
      }}
      onClick={() => !disabled && onChange?.()}
    >
      <div
        style={{
          width: box,
          height: box,
          minWidth: box,
          borderRadius: 4,
          border: `1.5px solid ${border}`,
          backgroundColor: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 1,
          transition: 'background-color 150ms, border-color 150ms',
        }}
      >
        {isChecked && <Check style={{ width: iconSize, height: iconSize, color: '#ffffff', strokeWidth: 3 }} />}
        {isIndet   && <Minus style={{ width: iconSize, height: iconSize, color: '#ffffff', strokeWidth: 3 }} />}
      </div>

      {(showLabel || showHint) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {showLabel && (
            <span style={{ fontSize: labelSize, fontWeight: 500, color: disabled ? '#9ca3af' : '#111827', lineHeight: '20px' }}>
              {label}
            </span>
          )}
          {showHint && (
            <span style={{ fontSize: 13, fontWeight: 400, color: '#6b7280', lineHeight: '18px' }}>
              {hint}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
