import { Loader2, Minus, Plus } from 'lucide-react';

export type ButtonType  = 'primary' | 'secondary' | 'success' | 'warning' | 'failure' | 'info';
export type ButtonState = 'default' | 'hover' | 'pressed' | 'loading' | 'disabled';
export type ButtonSize  = 'large' | 'medium' | 'small';

export interface ButtonProps {
  variant?: ButtonType;
  state?: ButtonState;
  size?: ButtonSize;
  withText?: boolean;
  label?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onClick?: () => void;
}

const VARIANTS: Record<ButtonType, { bg: string; hoverBg: string; pressedBg: string; text: string; border?: string }> = {
  primary:   { bg: '#068ae9', hoverBg: '#056ab2', pressedBg: '#045a97', text: '#ffffff' },
  secondary: { bg: '#ffffff', hoverBg: '#eff6ff', pressedBg: '#dbeafe', text: '#068ae9', border: '#068ae9' },
  success:   { bg: '#16a34a', hoverBg: '#15803d', pressedBg: '#166534', text: '#ffffff' },
  warning:   { bg: '#d97706', hoverBg: '#b45309', pressedBg: '#92400e', text: '#ffffff' },
  failure:   { bg: '#dc2626', hoverBg: '#b91c1c', pressedBg: '#991b1b', text: '#ffffff' },
  info:      { bg: '#0891b2', hoverBg: '#0e7490', pressedBg: '#155e75', text: '#ffffff' },
};

const SIZES: Record<ButtonSize, { height: number; px: number; py: number; fontSize: number; iconSize: number; gap: number }> = {
  large:  { height: 48, px: 24, py: 16, fontSize: 17, iconSize: 18, gap: 8 },
  medium: { height: 40, px: 20, py: 12, fontSize: 15, iconSize: 16, gap: 6 },
  small:  { height: 32, px: 16, py: 8,  fontSize: 13, iconSize: 14, gap: 5 },
};

export default function Button({
  variant = 'primary',
  state = 'default',
  size = 'medium',
  withText = true,
  label = 'Button',
  showLeftIcon = true,
  showRightIcon = true,
  onClick,
}: ButtonProps) {
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const isDisabled = state === 'disabled';
  const isLoading  = state === 'loading';
  const isHover    = state === 'hover';
  const isPressed  = state === 'pressed';

  const bg = isPressed ? v.pressedBg : isHover ? v.hoverBg : v.bg;

  return (
    <button
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        paddingLeft: s.px,
        paddingRight: s.px,
        fontSize: s.fontSize,
        fontFamily: 'var(--font-family-primary)',
        fontWeight: 600,
        lineHeight: 1,
        color: v.text,
        backgroundColor: bg,
        border: v.border ? `1.5px solid ${v.border}` : 'none',
        borderRadius: 8,
        cursor: isDisabled ? 'not-allowed' : isLoading ? 'wait' : 'pointer',
        opacity: isDisabled ? 0.4 : 1,
        transition: 'background-color 150ms ease, opacity 150ms ease',
        outline: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {isLoading ? (
        <Loader2 style={{ width: s.iconSize, height: s.iconSize, animation: 'spin 1s linear infinite' }} />
      ) : (
        <>
          {showLeftIcon  && <Minus style={{ width: s.iconSize, height: s.iconSize, flexShrink: 0 }} />}
          {withText      && <span>{label}</span>}
          {showRightIcon && <Plus  style={{ width: s.iconSize, height: s.iconSize, flexShrink: 0 }} />}
        </>
      )}
      {isLoading && withText && <span>{label}</span>}
    </button>
  );
}
