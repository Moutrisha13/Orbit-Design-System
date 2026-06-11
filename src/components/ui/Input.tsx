import { Mail, Eye, AlertCircle } from 'lucide-react';

export type InputState = 'default' | 'focused' | 'error' | 'disabled';
export type InputSize  = 'large' | 'medium' | 'small';

export interface InputProps {
  state?: InputState;
  size?: InputSize;
  showLabel?: boolean;
  showHint?: boolean;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  label?: string;
  placeholder?: string;
  hint?: string;
  value?: string;
  onChange?: (v: string) => void;
}

const HEIGHTS: Record<InputSize, number> = { large: 48, medium: 40, small: 32 };
const FONT: Record<InputSize, number> = { large: 15, medium: 14, small: 13 };

export default function Input({
  state = 'default',
  size = 'medium',
  showLabel = true,
  showHint = true,
  showLeftIcon = false,
  showRightIcon = false,
  label = 'Email address',
  placeholder = 'Enter your email',
  hint = "We'll never share your email.",
  value = '',
  onChange,
}: InputProps) {
  const height = HEIGHTS[size];
  const fontSize = FONT[size];
  const isDisabled = state === 'disabled';
  const isError = state === 'error';
  const isFocused = state === 'focused';

  const borderColor = isError ? '#ef4444' : isFocused ? '#068ae9' : '#d1d5db';
  const bgColor = isDisabled ? '#f9fafb' : '#ffffff';
  const boxShadow = isFocused ? '0 0 0 3px rgba(6,138,233,0.15)' : 'none';
  const hintColor = isError ? '#ef4444' : '#6b7280';

  const iconColor = isDisabled ? '#9ca3af' : '#6b7280';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-family-primary)', width: '100%' }}>
      {showLabel && (
        <label style={{ fontSize: 14, fontWeight: 500, color: isDisabled ? '#9ca3af' : '#374151', lineHeight: '20px' }}>
          {label}
        </label>
      )}

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {showLeftIcon && (
          <Mail style={{ position: 'absolute', left: 12, width: 16, height: 16, color: iconColor, pointerEvents: 'none', flexShrink: 0 }} />
        )}

        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={isDisabled}
          readOnly={state === 'focused'}
          style={{
            width: '100%',
            height,
            padding: `0 ${showRightIcon || isError ? 40 : 12}px 0 ${showLeftIcon ? 40 : 12}px`,
            fontSize,
            fontFamily: 'var(--font-family-primary)',
            fontWeight: 400,
            color: isDisabled ? '#9ca3af' : '#111827',
            backgroundColor: bgColor,
            border: `1px solid ${borderColor}`,
            borderRadius: 8,
            outline: 'none',
            boxShadow,
            cursor: isDisabled ? 'not-allowed' : 'text',
            transition: 'border-color 150ms, box-shadow 150ms',
          }}
        />

        {(showRightIcon && !isError) && (
          <Eye style={{ position: 'absolute', right: 12, width: 16, height: 16, color: iconColor, pointerEvents: 'none' }} />
        )}
        {isError && (
          <AlertCircle style={{ position: 'absolute', right: 12, width: 16, height: 16, color: '#ef4444', pointerEvents: 'none' }} />
        )}
      </div>

      {showHint && hint && (
        <p style={{ margin: 0, fontSize: 13, fontWeight: 400, color: hintColor, lineHeight: '18px' }}>{hint}</p>
      )}
    </div>
  );
}
