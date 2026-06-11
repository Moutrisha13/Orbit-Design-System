import { useState, useId } from 'react';
import { ChevronDown, CircleDot } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type AccordionType    = 'single' | 'multiple';
export type AccordionVariant = 'default' | 'bordered' | 'filled';
export type AccordionSize    = 'large' | 'medium' | 'small';

export interface AccordionItem {
  id: string;
  trigger: string;
  content: string;
  disabled?: boolean;
}

export interface AccordionProps {
  type?: AccordionType;
  variant?: AccordionVariant;
  size?: AccordionSize;
  showChevron?: boolean;
  showLeadingIcon?: boolean;
  dividers?: boolean;
  defaultOpen?: string | null;
  items: AccordionItem[];
}

// ─── Size map ─────────────────────────────────────────────────────────────────

const SIZE = {
  large:  { height: 56, contentPadding: '16px 24px', fontSize: 17 },
  medium: { height: 48, contentPadding: '12px 20px', fontSize: 15 },
  small:  { height: 40, contentPadding: '8px 16px',  fontSize: 13 },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Accordion({
  type = 'single',
  variant = 'default',
  size = 'medium',
  showChevron = true,
  showLeadingIcon = false,
  dividers = true,
  defaultOpen = null,
  items,
}: AccordionProps) {
  const uid = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(defaultOpen ? [defaultOpen] : []),
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (type === 'single') next.clear();
        next.add(id);
      }
      return next;
    });
  }

  const s = SIZE[size];

  const wrapperStyle: React.CSSProperties = variant === 'bordered'
    ? {
        border: '1px solid hsl(var(--semantic-color-border-default))',
        borderRadius: 8,
        overflow: 'hidden',
        padding: 4,
      }
    : variant === 'filled'
    ? { display: 'flex', flexDirection: 'column', gap: 4 }
    : {};

  return (
    <div style={wrapperStyle}>
      {items.map((item, i) => {
        const isOpen     = openIds.has(item.id);
        const isDisabled = !!item.disabled;
        const triggerId  = `${uid}-trigger-${item.id}`;
        const contentId  = `${uid}-content-${item.id}`;
        const showDivider = dividers && i < items.length - 1 && variant !== 'filled';

        const triggerStyle: React.CSSProperties = {
          height: s.height,
          paddingLeft: variant === 'filled' ? 16 : 0,
          paddingRight: variant === 'filled' ? 16 : 0,
          fontSize: s.fontSize,
          fontFamily: 'var(--font-family-primary)',
          fontWeight: 500,
          color: 'hsl(var(--semantic-color-text-primary))',
          backgroundColor: isOpen && variant === 'filled'
            ? 'hsl(var(--semantic-color-surface-subtle))'
            : variant === 'filled'
            ? 'hsl(var(--semantic-color-surface-subtle))'
            : 'transparent',
          borderRadius: variant === 'filled' ? 8 : 0,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.4 : 1,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          textAlign: 'left',
          border: 'none',
          outline: 'none',
          gap: 10,
          transition: 'background-color 150ms ease',
        };

        const itemWrapperStyle: React.CSSProperties = variant === 'bordered'
          ? {
              borderBottom: i < items.length - 1
                ? '1px solid hsl(var(--semantic-color-border-default))'
                : 'none',
            }
          : {};

        return (
          <div key={item.id} style={itemWrapperStyle}>
            <button
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              disabled={isDisabled}
              onClick={() => !isDisabled && toggle(item.id)}
              style={triggerStyle}
              onMouseEnter={(e) => {
                if (!isDisabled && variant !== 'filled') {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    'hsl(var(--semantic-color-surface-subtle))';
                }
              }}
              onMouseLeave={(e) => {
                if (!isDisabled && variant !== 'filled') {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }
              }}
            >
              {showLeadingIcon && (
                <CircleDot
                  style={{
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    color: 'hsl(var(--semantic-color-text-brand-primary))',
                  }}
                />
              )}

              <span style={{ flex: 1, minWidth: 0 }}>{item.trigger}</span>

              {showChevron && (
                <ChevronDown
                  style={{
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    color: 'hsl(var(--semantic-color-text-secondary))',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 200ms ease',
                  }}
                />
              )}
            </button>

            {/* CSS grid row trick for smooth height animation */}
            <div
              id={contentId}
              role="region"
              aria-labelledby={triggerId}
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 200ms ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p
                  style={{
                    padding: s.contentPadding,
                    paddingTop: 4,
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: s.fontSize,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: 'hsl(var(--semantic-color-text-secondary))',
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>

            {showDivider && (
              <div style={{
                height: 1,
                backgroundColor: 'hsl(var(--semantic-color-border-default))',
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
