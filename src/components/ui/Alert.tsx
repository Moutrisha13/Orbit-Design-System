import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  Bell,
  X,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type AlertVariant = 'default' | 'success' | 'warning' | 'failure' | 'info';

export interface AlertAction {
  label: string;
  onClick?: () => void;
}

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  description?: string;
  showIcon?: boolean;
  actions?: AlertAction[];
  onDismiss?: () => void;
}

// ─── Variant styles ───────────────────────────────────────────────────────────

const VARIANT_STYLES: Record<
  AlertVariant,
  { bg: string; border: string; iconColor: string; titleColor: string; textColor: string; actionColor: string }
> = {
  default: {
    bg:          '#f8f9fa',
    border:      '#dee2e6',
    iconColor:   '#495057',
    titleColor:  '#343a40',
    textColor:   '#6c757d',
    actionColor: '#495057',
  },
  success: {
    bg:          '#f0fdf4',
    border:      '#bbf7d0',
    iconColor:   '#16a34a',
    titleColor:  '#15803d',
    textColor:   '#166534',
    actionColor: '#16a34a',
  },
  warning: {
    bg:          '#fffbeb',
    border:      '#fde68a',
    iconColor:   '#d97706',
    titleColor:  '#b45309',
    textColor:   '#92400e',
    actionColor: '#d97706',
  },
  failure: {
    bg:          '#fef2f2',
    border:      '#fecaca',
    iconColor:   '#dc2626',
    titleColor:  '#b91c1c',
    textColor:   '#991b1b',
    actionColor: '#dc2626',
  },
  info: {
    bg:          '#eff6ff',
    border:      '#bfdbfe',
    iconColor:   '#2563eb',
    titleColor:  '#1d4ed8',
    textColor:   '#1e40af',
    actionColor: '#2563eb',
  },
};

const VARIANT_ICONS: Record<AlertVariant, React.ElementType> = {
  default: Bell,
  success: CheckCircle2,
  warning: AlertTriangle,
  failure: XCircle,
  info:    Info,
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Alert({
  variant = 'default',
  title,
  description,
  showIcon = true,
  actions,
  onDismiss,
}: AlertProps) {
  const s = VARIANT_STYLES[variant];
  const Icon = VARIANT_ICONS[variant];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: 16,
        borderRadius: 8,
        border: `1px solid ${s.border}`,
        backgroundColor: s.bg,
        fontFamily: 'var(--font-family-primary)',
      }}
      role="alert"
    >
      {/* Leading icon */}
      {showIcon && (
        <Icon
          style={{
            width: 20,
            height: 20,
            flexShrink: 0,
            marginTop: title && description ? 1 : 0,
            color: s.iconColor,
          }}
        />
      )}

      {/* Text block */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <p
            style={{
              margin: 0,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '20px',
              color: s.titleColor,
            }}
          >
            {title}
          </p>
        )}
        {description && (
          <p
            style={{
              margin: title ? '2px 0 0' : 0,
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '20px',
              color: s.textColor,
            }}
          >
            {description}
          </p>
        )}

        {/* Action buttons */}
        {actions && actions.length > 0 && (
          <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
            {actions.map((action, i) => (
              <button
                key={action.label}
                onClick={action.onClick}
                style={{
                  padding: 0,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: 'var(--font-family-primary)',
                  color: i === 0 ? s.actionColor : s.textColor,
                  textDecoration: 'none',
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dismiss button */}
      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            flexShrink: 0,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 2,
            borderRadius: 4,
            color: s.textColor,
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Dismiss"
        >
          <X style={{ width: 16, height: 16 }} />
        </button>
      )}
    </div>
  );
}
