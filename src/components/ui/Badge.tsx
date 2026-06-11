import { Circle } from 'lucide-react';

export type BadgeColor = 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple';
export type BadgeStyle = 'light' | 'heavy';

export interface BadgeProps {
  color?: BadgeColor;
  style?: BadgeStyle;
  showIcon?: boolean;
  showCount?: boolean;
  label?: string;
  count?: number;
}

const PALETTE: Record<BadgeColor, { light: { bg: string; text: string; dot: string }; heavy: { bg: string; text: string; dot: string } }> = {
  default: {
    light: { bg: '#f8f9fa', text: '#343a40', dot: '#6c757d' },
    heavy: { bg: '#495057', text: '#ffffff', dot: '#ffffff' },
  },
  blue: {
    light: { bg: '#eff6ff', text: '#1d4ed8', dot: '#3b82f6' },
    heavy: { bg: '#2563eb', text: '#ffffff', dot: '#ffffff' },
  },
  green: {
    light: { bg: '#f0fdf4', text: '#15803d', dot: '#22c55e' },
    heavy: { bg: '#16a34a', text: '#ffffff', dot: '#ffffff' },
  },
  red: {
    light: { bg: '#fef2f2', text: '#b91c1c', dot: '#ef4444' },
    heavy: { bg: '#dc2626', text: '#ffffff', dot: '#ffffff' },
  },
  yellow: {
    light: { bg: '#fffbeb', text: '#b45309', dot: '#f59e0b' },
    heavy: { bg: '#d97706', text: '#ffffff', dot: '#ffffff' },
  },
  purple: {
    light: { bg: '#faf5ff', text: '#7e22ce', dot: '#a855f7' },
    heavy: { bg: '#9333ea', text: '#ffffff', dot: '#ffffff' },
  },
};

export default function Badge({
  color = 'blue',
  style: badgeStyle = 'light',
  showIcon = true,
  showCount = false,
  label = 'Live',
  count = 12,
}: BadgeProps) {
  const p = PALETTE[color][badgeStyle];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-family-primary)' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          height: 24,
          padding: '0 10px',
          borderRadius: 9999,
          backgroundColor: p.bg,
          color: p.text,
          fontSize: 12,
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        {showIcon && (
          <Circle style={{ width: 8, height: 8, fill: p.dot, color: p.dot, flexShrink: 0 }} />
        )}
        {label}
      </div>

      {showCount && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 20,
            minWidth: 20,
            padding: '0 6px',
            borderRadius: 9999,
            backgroundColor: badgeStyle === 'heavy' ? PALETTE[color].heavy.bg : '#374151',
            color: '#ffffff',
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {count}
        </div>
      )}
    </div>
  );
}
