import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const pageModules = import.meta.glob('./components/*/*Page.tsx', { eager: true });

import { COMPONENT_NAMES } from './lib/componentList';

function getPage(name: string): React.ComponentType | null {
  const mod = pageModules[`./components/${name}/${name}Page.tsx`] as
    | { default?: React.ComponentType }
    | undefined;
  return mod?.default ?? null;
}

interface ShowcaseProps {
  onBack: () => void;
  onFoundations: () => void;
  onHowToUse: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Showcase({ onBack, onFoundations, onHowToUse, theme, onToggleTheme }: ShowcaseProps) {
  const [active, setActive] = useState<string>(COMPONENT_NAMES[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarBg = { backgroundColor: 'hsl(var(--semantic-color-surface-default))' };
  const borderStyle = { borderColor: 'hsl(var(--semantic-color-border-default))' };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: 'hsl(var(--semantic-color-surface-default))', color: 'hsl(var(--semantic-color-text-primary))' }}
    >
      {/* Top nav */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-10 h-16 border-b shrink-0"
        style={{ ...borderStyle, backgroundColor: theme === 'dark' ? 'hsl(var(--semantic-color-surface-default))' : '#ffffff' }}
      >
        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only */}
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

        {/* Centre: nav links — desktop only */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {[
            { label: 'Foundations', action: onFoundations, isActive: false },
            { label: 'Components',  action: () => {},       isActive: true  },
            { label: 'How to use',  action: onHowToUse,    isActive: false },
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
          style={{ ...sidebarBg, ...borderStyle }}
        >
          {/* Close button — mobile only */}
          <button
            className="md:hidden self-end mb-4 p-1 rounded-lg hover:bg-black/5"
            onClick={() => setSidebarOpen(false)}
            style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}
          >
            <X className="size-5" />
          </button>

          {COMPONENT_NAMES.map((name) => (
            <button
              key={name}
              onClick={() => { setActive(name); setSidebarOpen(false); }}
              className="w-full text-left px-4 py-1.5 text-sm rounded-lg transition-colors"
              style={{
                backgroundColor: active === name ? 'hsl(var(--semantic-color-surface-brand-primary-subtle))' : 'transparent',
                color: active === name ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-primary))',
                fontWeight: active === name ? 500 : 600,
              }}
            >
              {name}
            </button>
          ))}
        </aside>

        {/* Canvas */}
        <main
          className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto"
          style={sidebarBg}
        >
          {active ? <ComponentCanvas name={active} /> : <EmptyState />}
        </main>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Select a component from the sidebar.</p>
    </div>
  );
}

function ComponentCanvas({ name }: { name: string }) {
  const Page = getPage(name);
  if (Page) return <Page />;

  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>
        {name}
      </h1>
      <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
        Documentation coming soon.
      </p>
    </div>
  );
}
