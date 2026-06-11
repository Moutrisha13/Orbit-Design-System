import { useState } from 'react';
import { Sun, Moon, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Prerequisites from './Prerequisites';
import CloneAndInstall from './CloneAndInstall';
import ProjectStructure from './ProjectStructure';
import DevServer from './DevServer';
import UsingComponents from './UsingComponents';
import DesignTokens from './DesignTokens';
import ExtendingComponents from './ExtendingComponents';
import DarkMode from './DarkMode';

export type HowToUsePage =
  | 'prerequisites'
  | 'clone-and-install'
  | 'project-structure'
  | 'dev-server'
  | 'using-components'
  | 'design-tokens'
  | 'extending-components'
  | 'dark-mode';

interface HowToUseProps {
  onBack: () => void;
  onBrowse: () => void;
  onFoundations: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const GET_STARTED: { label: string; key: HowToUsePage }[] = [
  { label: 'Prerequisites',      key: 'prerequisites' },
  { label: 'Clone & install',    key: 'clone-and-install' },
  { label: 'Project structure',  key: 'project-structure' },
  { label: 'Dev server',         key: 'dev-server' },
];

const USING_SYSTEM: { label: string; key: HowToUsePage }[] = [
  { label: 'Using components',     key: 'using-components' },
  { label: 'Design tokens',        key: 'design-tokens' },
  { label: 'Extending components', key: 'extending-components' },
  { label: 'Dark mode',            key: 'dark-mode' },
];

function renderPage(page: HowToUsePage) {
  switch (page) {
    case 'prerequisites':        return <Prerequisites />;
    case 'clone-and-install':    return <CloneAndInstall />;
    case 'project-structure':    return <ProjectStructure />;
    case 'dev-server':           return <DevServer />;
    case 'using-components':     return <UsingComponents />;
    case 'design-tokens':        return <DesignTokens />;
    case 'extending-components': return <ExtendingComponents />;
    case 'dark-mode':            return <DarkMode />;
  }
}

export default function HowToUse({ onBack, onBrowse, onFoundations, theme, onToggleTheme }: HowToUseProps) {
  const [active, setActive]               = useState<HowToUsePage>('prerequisites');
  const [getStartedOpen, setGetStartedOpen]   = useState(true);
  const [usingSystemOpen, setUsingSystemOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen]         = useState(false);

  const borderStyle = { borderColor: 'hsl(var(--semantic-color-border-default))' };
  const bgStyle     = { backgroundColor: 'hsl(var(--semantic-color-surface-default))' };

  function pickAndClose(key: HowToUsePage) {
    setActive(key);
    setSidebarOpen(false);
  }

  const sidebarContent = (
    <>
      {/* Group: Get started */}
      <div>
        <button
          className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold transition-colors"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
          onClick={() => setGetStartedOpen(o => !o)}
        >
          Get started
          {getStartedOpen ? <ChevronDown className="size-3.5 opacity-50" /> : <ChevronRight className="size-3.5 opacity-50" />}
        </button>
        {getStartedOpen && (
          <div className="pl-4 pb-1">
            {GET_STARTED.map((item) => (
              <button
                key={item.key}
                onClick={() => pickAndClose(item.key)}
                className="w-full text-left px-4 py-1.5 text-sm rounded-lg transition-colors"
                style={{
                  backgroundColor: active === item.key ? 'hsl(var(--semantic-color-surface-brand-primary-subtle))' : 'transparent',
                  color: active === item.key ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-secondary))',
                  fontWeight: active === item.key ? 500 : 400,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Group: Using the system */}
      <div>
        <button
          className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold transition-colors"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
          onClick={() => setUsingSystemOpen(o => !o)}
        >
          Using the system
          {usingSystemOpen ? <ChevronDown className="size-3.5 opacity-50" /> : <ChevronRight className="size-3.5 opacity-50" />}
        </button>
        {usingSystemOpen && (
          <div className="pl-4 pb-1">
            {USING_SYSTEM.map((item) => (
              <button
                key={item.key}
                onClick={() => pickAndClose(item.key)}
                className="w-full text-left px-4 py-1.5 text-sm rounded-lg transition-colors"
                style={{
                  backgroundColor: active === item.key ? 'hsl(var(--semantic-color-surface-brand-primary-subtle))' : 'transparent',
                  color: active === item.key ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-secondary))',
                  fontWeight: active === item.key ? 500 : 400,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
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
            { label: 'Foundations', action: onFoundations, isActive: false },
            { label: 'Components',  action: onBrowse,      isActive: false },
            { label: 'How to use',  action: () => {},      isActive: true  },
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
            'fixed inset-y-0 left-0 z-40 flex flex-col overflow-y-auto pt-8 pr-6 pl-6 w-72 transition-transform duration-200 border-r',
            'md:relative md:translate-x-0 md:w-72 md:pl-16 md:pr-8 md:z-auto md:shrink-0',
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
        <main className="flex-1 overflow-y-auto" style={bgStyle}>
          <div className="max-w-3xl mx-auto px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 pb-20">
            {renderPage(active)}
          </div>
        </main>
      </div>
    </div>
  );
}
