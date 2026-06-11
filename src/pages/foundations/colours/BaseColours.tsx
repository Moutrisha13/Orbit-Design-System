import { useState, useCallback } from 'react';

// ─── Hardcoded palette data from tokens/design-tokens/1-Base.Mode 1.tokens.json ──

type Swatch = { step: string; hex: string };
type Palette = { name: string; swatches: Swatch[]; alpha?: boolean; neutral?: boolean };

const PALETTES: Palette[] = [
  {
    name: 'Grey',
    swatches: [
      { step: '50',  hex: '#f6f7f9' },
      { step: '100', hex: '#eceff3' },
      { step: '200', hex: '#e0e5eb' },
      { step: '300', hex: '#ced6de' },
      { step: '400', hex: '#b6c2ce' },
      { step: '500', hex: '#97a8b9' },
      { step: '600', hex: '#7289a1' },
      { step: '700', hex: '#52667a' },
      { step: '800', hex: '#313d49' },
      { step: '900', hex: '#1d242b' },
    ],
  },
  {
    name: 'Blue',
    swatches: [
      { step: '50',  hex: '#ebf4ff' },
      { step: '100', hex: '#d7eafe' },
      { step: '200', hex: '#beddfd' },
      { step: '300', hex: '#94c5f9' },
      { step: '400', hex: '#69aef7' },
      { step: '500', hex: '#3491f4' },
      { step: '600', hex: '#0c74e4' },
      { step: '700', hex: '#0959ae' },
      { step: '800', hex: '#063e79' },
      { step: '900', hex: '#0f2f52' },
    ],
  },
  {
    name: 'Sky',
    swatches: [
      { step: '50',  hex: '#f0f9ff' },
      { step: '100', hex: '#d7eefe' },
      { step: '200', hex: '#bee3fd' },
      { step: '300', hex: '#92d0fc' },
      { step: '400', hex: '#65bdfb' },
      { step: '500', hex: '#2ea5fa' },
      { step: '600', hex: '#068ae9' },
      { step: '700', hex: '#056ab2' },
      { step: '800', hex: '#034a7c' },
      { step: '900', hex: '#02385f' },
    ],
  },
  {
    name: 'Pink',
    swatches: [
      { step: '50',  hex: '#feecf2' },
      { step: '100', hex: '#fdd8e4' },
      { step: '200', hex: '#fdbed3' },
      { step: '300', hex: '#fc92b5' },
      { step: '400', hex: '#fb6597' },
      { step: '500', hex: '#fa2e72' },
      { step: '600', hex: '#d81858' },
      { step: '700', hex: '#b3053f' },
      { step: '800', hex: '#7c032c' },
      { step: '900', hex: '#570a23' },
    ],
  },
  {
    name: 'Green',
    swatches: [
      { step: '50',  hex: '#eefbf0' },
      { step: '100', hex: '#e0f5e4' },
      { step: '200', hex: '#cdefd3' },
      { step: '300', hex: '#aae3b4' },
      { step: '400', hex: '#88d796' },
      { step: '500', hex: '#5fc96f' },
      { step: '600', hex: '#3cb450' },
      { step: '700', hex: '#2e8a3d' },
      { step: '800', hex: '#20602b' },
      { step: '900', hex: '#184920' },
    ],
  },
  {
    name: 'Red',
    swatches: [
      { step: '50',  hex: '#fef6f6' },
      { step: '100', hex: '#fbe1df' },
      { step: '200', hex: '#f8c7c3' },
      { step: '300', hex: '#f4a099' },
      { step: '400', hex: '#f3766d' },
      { step: '500', hex: '#e45046' },
      { step: '600', hex: '#cc2f24' },
      { step: '700', hex: '#9c241c' },
      { step: '800', hex: '#73140d' },
      { step: '900', hex: '#5c0b05' },
    ],
  },
  {
    name: 'Teal',
    swatches: [
      { step: '50',  hex: '#ecf9fd' },
      { step: '100', hex: '#daf3fb' },
      { step: '200', hex: '#c3ebf9' },
      { step: '300', hex: '#99def5' },
      { step: '400', hex: '#6fd0f1' },
      { step: '500', hex: '#3cc0ec' },
      { step: '600', hex: '#16a9da' },
      { step: '700', hex: '#1181a7' },
      { step: '800', hex: '#0b5a74' },
      { step: '900', hex: '#094458' },
    ],
  },
  {
    name: 'Orange',
    swatches: [
      { step: '50',  hex: '#fff7f0' },
      { step: '100', hex: '#ffebd6' },
      { step: '200', hex: '#ffdabd' },
      { step: '300', hex: '#ffc18f' },
      { step: '400', hex: '#ff9e61' },
      { step: '500', hex: '#ff7429' },
      { step: '600', hex: '#f05d00' },
      { step: '700', hex: '#b83d00' },
      { step: '800', hex: '#802b00' },
      { step: '900', hex: '#611400' },
    ],
  },
  {
    name: 'Yellow',
    swatches: [
      { step: '50',  hex: '#fefbf1' },
      { step: '100', hex: '#fdf5d8' },
      { step: '200', hex: '#fcedc0' },
      { step: '300', hex: '#ffe38e' },
      { step: '400', hex: '#ffd461' },
      { step: '500', hex: '#ffb829' },
      { step: '600', hex: '#f09800' },
      { step: '700', hex: '#b86e00' },
      { step: '800', hex: '#804400' },
      { step: '900', hex: '#613000' },
    ],
  },
  {
    name: 'Neutrals',
    neutral: true,
    swatches: [
      { step: 'White', hex: '#ffffff' },
      { step: 'Black', hex: '#000000' },
    ],
  },
];

// ─── Swatch component ────────────────────────────────────────────────────────

function ColorSwatch({
  swatch,
  neutral,
  alpha,
  onCopy,
}: {
  swatch: Swatch;
  neutral?: boolean;
  alpha?: boolean;
  onCopy: (hex: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <button
        className="relative rounded-lg overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
        style={{ width: 72, height: 64, flexShrink: 0 }}
        onClick={() => onCopy(swatch.hex)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Copy ${swatch.hex}`}
      >
        {/* Checkerboard for alpha swatches */}
        {alpha && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(45deg, #ccc 25%, transparent 25%),' +
                'linear-gradient(-45deg, #ccc 25%, transparent 25%),' +
                'linear-gradient(45deg, transparent 75%, #ccc 75%),' +
                'linear-gradient(-45deg, transparent 75%, #ccc 75%)',
              backgroundSize: '12px 12px',
              backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
            }}
          />
        )}
        {/* Colour fill */}
        <div
          className="absolute inset-0 rounded-lg transition-opacity"
          style={{
            backgroundColor: swatch.hex,
            border: neutral && swatch.step === 'White' ? '1px solid hsl(var(--semantic-color-border-default))' : undefined,
          }}
        />
        {/* Copy overlay */}
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(0,0,0,0.28)' }}>
            <span className="text-white text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              Copy
            </span>
          </div>
        )}
      </button>

      <div className="flex flex-col gap-0.5" style={{ width: 72 }}>
        <span
          className="text-xs font-semibold"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
        >
          {swatch.step}
        </span>
        <span
          className="font-mono uppercase"
          style={{ fontSize: 10, color: 'hsl(var(--semantic-color-text-tertiary))' }}
        >
          {swatch.hex.length > 7 ? swatch.hex.slice(0, 7) + '…' : swatch.hex}
        </span>
      </div>
    </div>
  );
}

// ─── Toast ───────────────────────────────────────────────────────────────────

function Toast({ hex }: { hex: string }) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium pointer-events-none"
      style={{
        backgroundColor: 'hsl(var(--semantic-color-text-primary))',
        color: 'hsl(var(--semantic-color-surface-default))',
      }}
    >
      <span
        className="inline-block size-3 rounded-sm border"
        style={{ backgroundColor: hex, borderColor: 'rgba(255,255,255,0.3)' }}
      />
      <span>{hex.toUpperCase()} copied!</span>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BaseColours() {
  const [toast, setToast] = useState<string | null>(null);

  const handleCopy = useCallback((hex: string) => {
    navigator.clipboard.writeText(hex).catch(() => {});
    setToast(hex);
    setTimeout(() => setToast(null), 1800);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {/* Page header */}
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
        >
          Base Colours
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
          The raw palette — 12 colour ramps that power every semantic and component token.
        </p>
      </div>

      {/* Palettes */}
      {PALETTES.map((palette) => (
        <section key={palette.name} className="flex flex-col gap-4">
          <h2
            className="text-base font-semibold"
            style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
          >
            {palette.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {palette.swatches.map((swatch) => (
              <ColorSwatch
                key={swatch.step}
                swatch={swatch}
                neutral={palette.neutral}
                alpha={palette.alpha}
                onCopy={handleCopy}
              />
            ))}
          </div>
          <div
            className="mt-1 border-b"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
          />
        </section>
      ))}

      {toast && <Toast hex={toast} />}
    </div>
  );
}
