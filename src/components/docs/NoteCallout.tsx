import type { ReactNode } from 'react';

interface NoteCalloutProps {
  children: ReactNode;
}

export default function NoteCallout({ children }: NoteCalloutProps) {
  return (
    <div style={{
      backgroundColor: '#ebf4ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      padding: '14px 20px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
    }}>
      <span style={{
        flexShrink: 0,
        fontSize: 14,
        fontWeight: 700,
        color: '#1d4ed8',
        paddingTop: 1,
      }}>
        Note —
      </span>
      <span style={{
        fontSize: 14,
        lineHeight: '22px',
        color: '#1e40af',
      }}>
        {children}
      </span>
    </div>
  );
}

// Inline code pill for use inside NoteCallout
export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code style={{
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      borderRadius: 4,
      padding: '1px 6px',
      fontSize: 12,
      fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
      fontWeight: 600,
    }}>
      {children}
    </code>
  );
}
