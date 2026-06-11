import { useState, type ReactNode } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
}

export default function TabGroup({ tabs }: TabGroupProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab bar */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid hsl(var(--semantic-color-border-default))',
        marginBottom: 28,
      }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            style={{
              padding: '10px 16px',
              fontSize: 14,
              fontWeight: 500,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              color: active === i
                ? 'hsl(var(--semantic-color-text-brand-primary))'
                : 'hsl(var(--semantic-color-text-secondary))',
              transition: 'color 0.15s',
            }}
          >
            {tab.label}
            {active === i && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 2,
                borderRadius: '2px 2px 0 0',
                backgroundColor: 'hsl(var(--semantic-color-text-brand-primary))',
              }} />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>{tabs[active].content}</div>
    </div>
  );
}
