export type RadioSize = 'large' | 'medium' | 'small';

export interface RadioOption {
  id: string;
  label: string;
  hint?: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  selected: string | null;
  size?: RadioSize;
  disabled?: boolean;
  showHint?: boolean;
  onChange?: (id: string) => void;
}

const CIRCLE_SIZES: Record<RadioSize, number> = { large: 20, medium: 16, small: 14 };
const DOT_SIZES:    Record<RadioSize, number>  = { large: 8,  medium: 6,  small: 5  };
const LABEL_SIZES:  Record<RadioSize, number>  = { large: 15, medium: 14, small: 13 };

export default function RadioGroup({
  options,
  selected,
  size = 'medium',
  disabled = false,
  showHint = false,
  onChange,
}: RadioGroupProps) {
  const circle = CIRCLE_SIZES[size];
  const dot    = DOT_SIZES[size];
  const label  = LABEL_SIZES[size];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-family-primary)' }}>
      {options.map((opt) => {
        const isSelected = opt.id === selected;
        const isDisabled = disabled;

        const outerBg     = isDisabled ? '#f3f4f6' : '#ffffff';
        const outerBorder = isDisabled ? '#d1d5db' : isSelected ? '#068ae9' : '#d1d5db';

        return (
          <div
            key={opt.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              opacity: isDisabled ? 0.5 : 1,
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            }}
            onClick={() => !isDisabled && onChange?.(opt.id)}
          >
            <div
              style={{
                width: circle,
                height: circle,
                minWidth: circle,
                borderRadius: 9999,
                border: `1.5px solid ${outerBorder}`,
                backgroundColor: outerBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 1,
                transition: 'border-color 150ms',
              }}
            >
              {isSelected && (
                <div
                  style={{
                    width: dot,
                    height: dot,
                    borderRadius: 9999,
                    backgroundColor: '#068ae9',
                  }}
                />
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <span style={{ fontSize: label, fontWeight: 500, color: isDisabled ? '#9ca3af' : '#111827', lineHeight: '20px' }}>
                {opt.label}
              </span>
              {showHint && opt.hint && (
                <span style={{ fontSize: 13, color: '#6b7280', lineHeight: '18px' }}>{opt.hint}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
