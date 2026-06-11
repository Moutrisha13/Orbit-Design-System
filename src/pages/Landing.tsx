import { useState } from 'react';
import { Sun, Moon, LayoutGrid, Layers, BookOpen, Menu, X } from 'lucide-react';
import { COMPONENT_NAMES } from '@/lib/componentList';
import { cn } from '@/lib/utils';

interface LandingProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onBrowse: () => void;
  onFoundations: () => void;
  onHowToUse: () => void;
}

const cards = [
  {
    icon: LayoutGrid,
    eyebrow: 'TOKENS & STYLES',
    title: 'Foundations',
    description: 'Colour, typography, spacing and radii — the tokens behind every component.',
  },
  {
    icon: Layers,
    eyebrow: `${COMPONENT_NAMES.length} COMPONENTS`,
    title: 'Components',
    description: 'Interactive playground for every component, wired to live stories.',
  },
  {
    icon: BookOpen,
    eyebrow: 'GUIDES',
    title: 'How to use',
    description: 'Step-by-step guidance on integrating Orbit into your product workflow.',
  },
];

export default function Landing({ theme, onToggleTheme, onBrowse, onFoundations, onHowToUse }: LandingProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Foundations', action: onFoundations },
    { label: 'Components',  action: onBrowse },
    { label: 'How to use',  action: onHowToUse },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
    >
      {/* ── Background ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden"
        style={{ backgroundColor: theme === 'dark' ? 'hsl(var(--semantic-color-surface-default))' : '#ffffff' }}
      >
        {theme === 'light' && (
          <>
            <div style={{ position: 'absolute', top: '-10%', left: '5%', width: '55vw', height: '55vw', borderRadius: '9999px', background: 'radial-gradient(circle, #3B82F60F 0%, transparent 70%)', willChange: 'transform', animation: 'mesh-1 20s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '50vw', height: '50vw', borderRadius: '9999px', background: 'radial-gradient(circle, #8B5CF60C 0%, transparent 70%)', willChange: 'transform', animation: 'mesh-2 20s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', bottom: '5%', left: '20%', width: '45vw', height: '45vw', borderRadius: '9999px', background: 'radial-gradient(circle, #06B6D40A 0%, transparent 70%)', willChange: 'transform', animation: 'mesh-3 20s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', bottom: '-5%', right: '10%', width: '40vw', height: '40vw', borderRadius: '9999px', background: 'radial-gradient(circle, #EC48990A 0%, transparent 70%)', willChange: 'transform', animation: 'mesh-4 20s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', top: '35%', left: '35%', width: '35vw', height: '35vw', borderRadius: '9999px', background: 'radial-gradient(circle, #3B82F608 0%, transparent 70%)', willChange: 'transform', animation: 'mesh-5 20s ease-in-out infinite' }} />
          </>
        )}
      </div>

      {/* ── Mobile menu overlay ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{ backgroundColor: theme === 'dark' ? 'hsl(var(--semantic-color-surface-default))' : '#ffffff' }}
        >
          <div className="flex items-center justify-between px-4 h-16 border-b" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}>
            <span className="text-2xl font-bold tracking-tight">Orbit</span>
            <button onClick={() => setMobileMenuOpen(false)} style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map(({ label, action }) => (
              <button
                key={label}
                onClick={() => { action(); setMobileMenuOpen(false); }}
                className="text-left px-4 py-3 rounded-xl text-base font-medium transition-colors hover:bg-black/5"
                style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* ── Nav ── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-10 h-16 border-b backdrop-blur-sm"
        style={{
          borderColor: 'hsl(var(--semantic-color-border-default))',
          backgroundColor: theme === 'dark'
            ? 'hsl(var(--semantic-color-surface-default) / 0.9)'
            : '#ffffff',
        }}
      >
        <span className="text-2xl font-bold tracking-tight">Orbit</span>

        {/* Centre nav links — desktop only */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navLinks.map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-black/5"
              style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
              'border focus-visible:outline-none',
            )}
            style={{
              borderColor: 'hsl(var(--semantic-color-border-default))',
              color: 'hsl(var(--semantic-color-text-secondary))',
            }}
          >
            {theme === 'light' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            <span className="hidden sm:inline">{theme === 'light' ? 'Light' : 'Dark'}</span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* ── Page body ── */}
      <main className="relative flex flex-col items-center px-4 sm:px-8 md:px-10 pt-10 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(hsl(var(--semantic-color-border-default)) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,0,0,0.35) 20%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,0,0,0.35) 20%, transparent 90%)',
          }}
        />

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-3xl w-full">
          <h1
            className="tracking-tight leading-[1.05]"
            style={{
              fontSize: 'clamp(32px, 6vw, 67px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
            }}
          >
            Design Faster.{' '}
            <span style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}>
              Build Smarter.
            </span>
          </h1>

          <p
            className="leading-relaxed max-w-xl px-2"
            style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'hsl(var(--semantic-color-text-secondary))' }}
          >
            Orbit brings together tokens, components, guidelines, and patterns into a single
            source of truth for teams building at scale.
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 mt-10 sm:mt-14 w-full flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-5">
          {cards.map((card) => (
            <LandingCard
              key={card.title}
              {...card}
              onBrowse={onBrowse}
              onFoundations={onFoundations}
              onHowToUse={onHowToUse}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function LandingCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  onBrowse,
  onFoundations,
  onHowToUse,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
  onBrowse: () => void;
  onFoundations: () => void;
  onHowToUse: () => void;
}) {
  const handleClick =
    title === 'Components'  ? onBrowse :
    title === 'Foundations' ? onFoundations :
    title === 'How to use'  ? onHowToUse :
    undefined;

  return (
    <button
      onClick={handleClick}
      className="group relative flex flex-col gap-4 rounded-2xl border p-6 text-left transition-all duration-200 cursor-pointer w-full sm:w-[340px] lg:w-[440px]"
      style={{
        minHeight: 180,
        borderColor: 'hsl(var(--semantic-color-border-default))',
        backgroundColor: 'hsl(var(--semantic-color-surface-default))',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = 'hsl(205 100% 97%)';
        el.style.borderColor = 'hsl(var(--semantic-color-text-brand-primary) / 0.35)';
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = 'hsl(var(--semantic-color-surface-default))';
        el.style.borderColor = 'hsl(var(--semantic-color-border-default))';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      <div
        className="size-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: 'hsl(var(--semantic-color-surface-brand-primary-subtle))' }}
      >
        <Icon className="size-5" style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }} />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}>
          {eyebrow}
        </p>
        <h2 className="text-xl font-bold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>
          {title}
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
          {description}
        </p>
      </div>
    </button>
  );
}
