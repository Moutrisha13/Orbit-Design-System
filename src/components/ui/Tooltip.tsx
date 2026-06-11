export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipStyle     = 'dark' | 'light';

export interface TooltipProps {
  content?: string;
  placement?: TooltipPlacement;
  style?: TooltipStyle;
  showArrow?: boolean;
  children?: React.ReactNode;
}

const ARROW_SIZE = 6;

function getTooltipPosition(placement: TooltipPlacement): React.CSSProperties {
  switch (placement) {
    case 'top':    return { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 };
    case 'bottom': return { top: '100%',    left: '50%', transform: 'translateX(-50%)', marginTop: 8 };
    case 'left':   return { right: '100%',  top: '50%',  transform: 'translateY(-50%)', marginRight: 8 };
    case 'right':  return { left: '100%',   top: '50%',  transform: 'translateY(-50%)', marginLeft: 8 };
  }
}

function getArrowStyle(placement: TooltipPlacement, isDark: boolean): React.CSSProperties {
  const color = isDark ? '#1f2937' : '#ffffff';
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 0,
    height: 0,
  };

  switch (placement) {
    case 'top': return {
      ...base,
      top: '100%', left: '50%', transform: 'translateX(-50%)',
      borderLeft: `${ARROW_SIZE}px solid transparent`,
      borderRight: `${ARROW_SIZE}px solid transparent`,
      borderTop: `${ARROW_SIZE}px solid ${color}`,
    };
    case 'bottom': return {
      ...base,
      bottom: '100%', left: '50%', transform: 'translateX(-50%)',
      borderLeft: `${ARROW_SIZE}px solid transparent`,
      borderRight: `${ARROW_SIZE}px solid transparent`,
      borderBottom: `${ARROW_SIZE}px solid ${color}`,
    };
    case 'left': return {
      ...base,
      left: '100%', top: '50%', transform: 'translateY(-50%)',
      borderTop: `${ARROW_SIZE}px solid transparent`,
      borderBottom: `${ARROW_SIZE}px solid transparent`,
      borderLeft: `${ARROW_SIZE}px solid ${color}`,
    };
    case 'right': return {
      ...base,
      right: '100%', top: '50%', transform: 'translateY(-50%)',
      borderTop: `${ARROW_SIZE}px solid transparent`,
      borderBottom: `${ARROW_SIZE}px solid transparent`,
      borderRight: `${ARROW_SIZE}px solid ${color}`,
    };
  }
}

export default function Tooltip({
  content = 'This is a tooltip',
  placement = 'top',
  style: tooltipStyle = 'dark',
  showArrow = true,
  children,
}: TooltipProps) {
  const isDark = tooltipStyle === 'dark';

  const bubbleStyle: React.CSSProperties = {
    position: 'absolute',
    ...getTooltipPosition(placement),
    whiteSpace: 'nowrap',
    padding: '6px 10px',
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: '18px',
    fontFamily: 'var(--font-family-primary)',
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    color: isDark ? '#ffffff' : '#1f2937',
    border: isDark ? 'none' : '1px solid #e5e7eb',
    boxShadow: isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.1)',
    zIndex: 10,
    pointerEvents: 'none',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
      <div style={bubbleStyle}>
        {content}
        {showArrow && <div style={getArrowStyle(placement, isDark)} />}
      </div>
    </div>
  );
}
