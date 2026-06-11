import { useState } from 'react';
import { Sun, Moon, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import BaseColours from './colours/BaseColours';
import SemanticColours from './colours/SemanticColours';
import Typography from './Typography';
import Spacing from './Spacing';
import CornerRadius from './CornerRadius';
import Shadows from './Shadows';

type Section =
  | 'colours/base'
  | 'colours/semantic'
  | 'colours/components'
  | 'typography'
  | 'spacing'
  | 'corner-radius'
  | 'shadows';

interface FoundationsProps {
  onBack: () => void;
  onBrowse: () => void;
  onHowToUse: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV = [
  {
    label: 'Colours',
    key: 'colours',
    children: [
      { label: 'Base',     key: 'colours/base' as Section },
      { label: 'Semantic', key: 'colours/semantic' as Section },
    ],
  },
  { label: 'Typography',    key: 'typography' as Section },
  { label: 'Spacing',       key: 'spacing' as Section },
  { label: 'Corner Radius', key: 'corner-radius' as Section },
  { label: 'Shadows',       key: 'shadows' as Section },
];

function ComingSoon({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>
        {name}
      </h1>
      <p className="text-sm" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Coming soon.</p>
    </div>
  );
}

function renderSection(section: Section, theme: 'light' | 'dark') {
  switch (section) {
    case 'colours/base':       return <BaseColours />;
    case 'colours/semantic':   return <SemanticColours />;
    case 'colours/components': return <ComingSoon name="Component Colours" />;
    case 'typography':         return <Typography />;
    case 'spacing':            return <Spacing />;
    case 'corner-radius':      return <CornerRadius />;
    case 'shadows':            return <Shadows theme={theme} />;
  }
}

export default function Foundations({ onBack, onBrowse, onHowToUse, theme, onToggleTheme }: FoundationsProps) {
  const [active, setActive] = useState<Section>('colours/base');
  const [coloursOpen, setColoursOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const borderStyle = { borderColor: 'hsl(var(--semantic-color-border-default))' };
  const bgStyle = { backgroundColor: 'hsl(var(--semantic-color-surface-default))' };

  function pickAndClose(key: Section) {
    setActive(key);
    setSidebarOpen(false);
  }

  const sidebarContent = (
    <>
      {NAV.map((item) => {
        if ('children' in item) {
          return (
            <div key={item.key}>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold transition-colors"
                style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
                onClick={() => setColoursOpen((o) => !o)}
              >
                {item.label}
                {coloursOpen
                  ? <ChevronDown className="size-3.5 opacity-50" />
                  : <ChevronRight className="size-3.5 opacity-50" />}
              </button>
              {coloursOpen && (
                <div className="pl-4 pb-1">
                  {item.children!.map((child) => (
                    <button
                      key={child.key}
                      onClick={() => pickAndClose(child.key)}
                      className="w-full text-left px-4 py-1.5 text-sm rounded-lg transition-colors"
                      style={{
                        backgroundColor: active === child.key ? 'hsl(var(--semantic-color-surface-brand-primary-subtle))' : 'transparent',
                        color: active === child.key ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-secondary))',
                        fontWeight: active === child.key ? 500 : 400,
                      }}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <button
            key={item.key}
            onClick={() => pickAndClose(item.key as Section)}
            className="w-full text-left px-4 py-2 text-sm font-semibold transition-colors"
            style={{
              color: active === item.key
                ? 'hsl(var(--semantic-color-text-brand-primary))'
                : 'hsl(var(--semantic-color-text-primary))',
            }}
          >
            {item.label}
          </button>
        );
      })}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ ...bgStyle, color: 'hsl(var(--semantic-color-text-primary))' }}>

      {/* ── Top nav ── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-10 h-16 border-b shrink-0"
        style={{ ...borderStyle, backgroundColor: theme === 'dark' ? 'hsl(var(--semantic-color-surface-default))' : '#ffffff' }}
      >
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-1.5 rounded-lg transition-colors hover:bg-black/5"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}
          >
            <Menu className="size-5" />
          </button>
          <button
            onClick={onBack}
            className="text-xl sm:text-2xl font-bold tracking-tight transition-opacity hover:opacity-70"
            style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
          >
            Orbit
          </button>
        </div>

        {/* Centre nav — desktop only */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {[
            { label: 'Foundations', action: () => {},    isActive: true  },
            { label: 'Components',  action: onBrowse,   isActive: false },
            { label: 'How to use',  action: onHowToUse, isActive: false },
          ].map(({ label, action, isActive }) => (
            <button
              key={label}
              onClick={action}
              className="px-4 py-1.5 rounded-full text-sm transition-colors hover:bg-black/5"
              style={{
                color: isActive ? 'hsl(var(--semantic-color-text-primary))' : 'hsl(var(--semantic-color-text-secondary))',
                fontWeight: isActive ? 700 : 400,
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition-colors"
          style={{ ...borderStyle, color: 'hsl(var(--semantic-color-text-secondary))' }}
        >
          {theme === 'light' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          <span className="hidden sm:inline">{theme === 'light' ? 'Light' : 'Dark'}</span>
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={[
            'fixed inset-y-0 left-0 z-40 flex flex-col overflow-y-auto pt-8 pr-6 pl-6 w-64 transition-transform duration-200 border-r',
            'md:relative md:translate-x-0 md:w-56 md:pl-16 md:pr-8 md:z-auto md:shrink-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          ].join(' ')}
          style={{ ...bgStyle, ...borderStyle }}
        >
          <button
            className="md:hidden self-end mb-4 p-1 rounded-lg hover:bg-black/5"
            onClick={() => setSidebarOpen(false)}
            style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}
          >
            <X className="size-5" />
          </button>
          {sidebarContent}
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 md:px-10" style={bgStyle}>
          {renderSection(active, theme)}
        </main>
      </div>
    </div>
  );
}
