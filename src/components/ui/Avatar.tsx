import { User } from 'lucide-react';

export type AvatarMode   = 'image' | 'icon' | 'initials';
export type AvatarSize   = 'xl' | 'large' | 'medium' | 'small';
export type AvatarStatus = 'online' | 'offline' | 'busy';
export type AvatarBg     = 'blue' | 'pink' | 'green' | 'purple' | 'teal';

export interface AvatarProps {
  mode?: AvatarMode;
  size?: AvatarSize;
  initials?: string;
  bg?: AvatarBg;
  src?: string;
  showStatus?: boolean;
  status?: AvatarStatus;
}

const SIZES: Record<AvatarSize, number> = { xl: 56, large: 48, medium: 40, small: 32 };
const DOT_SIZES: Record<AvatarSize, number> = { xl: 14, large: 12, medium: 10, small: 8 };
const FONT_SIZES: Record<AvatarSize, number> = { xl: 20, large: 17, medium: 14, small: 11 };

const BG_COLORS: Record<AvatarBg, string> = {
  blue:   '#3491f4',
  pink:   '#e879a0',
  green:  '#22c55e',
  purple: '#a855f7',
  teal:   '#14b8a6',
};

const STATUS_COLORS: Record<AvatarStatus, string> = {
  online:  '#22c55e',
  offline: '#9ca3af',
  busy:    '#ef4444',
};

export default function Avatar({
  mode = 'initials',
  size = 'large',
  initials = 'HB',
  bg = 'blue',
  src,
  showStatus = true,
  status = 'online',
}: AvatarProps) {
  const dim = SIZES[size];
  const dotDim = DOT_SIZES[size];
  const fontSize = FONT_SIZES[size];
  const bgColor = BG_COLORS[bg];

  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexShrink: 0 }}>
      <div
        style={{
          width: dim,
          height: dim,
          borderRadius: 9999,
          backgroundColor: mode === 'image' ? '#e5e7eb' : bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {mode === 'image' && src && (
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
        {mode === 'image' && !src && (
          <User style={{ width: dim * 0.45, height: dim * 0.45, color: '#9ca3af' }} />
        )}
        {mode === 'icon' && (
          <User style={{ width: dim * 0.45, height: dim * 0.45, color: '#ffffff' }} />
        )}
        {mode === 'initials' && (
          <span style={{ fontSize, fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-family-primary)', lineHeight: 1 }}>
            {initials.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {showStatus && (
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: dotDim,
            height: dotDim,
            borderRadius: 9999,
            backgroundColor: STATUS_COLORS[status],
            border: '2px solid #ffffff',
          }}
        />
      )}
    </div>
  );
}
