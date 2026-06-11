const TOKENS: { key: string; label: string; radius: number | string; display: string }[] = [
  { key: 'radius-0',       label: '--radius-0',       radius: 0,      display: '0px' },
  { key: 'radius-2',       label: '--radius-2',       radius: 2,      display: '2px' },
  { key: 'radius-4',       label: '--radius-4',       radius: 4,      display: '4px' },
  { key: 'radius-6',       label: '--radius-6',       radius: 6,      display: '6px' },
  { key: 'radius-8',       label: '--radius-8',       radius: 8,      display: '8px' },
  { key: 'radius-10',      label: '--radius-10',      radius: 10,     display: '10px' },
  { key: 'radius-12',      label: '--radius-12',      radius: 12,     display: '12px' },
  { key: 'radius-16',      label: '--radius-16',      radius: 16,     display: '16px' },
  { key: 'radius-20',      label: '--radius-20',      radius: 20,     display: '20px' },
  { key: 'radius-24',      label: '--radius-24',      radius: 24,     display: '24px' },
  { key: 'radius-rounded', label: '--radius-rounded', radius: 9999,   display: '9999px' },
];

const BRAND_BLUE = '#068ae9';

export default function CornerRadius() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
        >
          Corner Radius
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
          Eleven steps from sharp to full-capsule.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}
      >
        {TOKENS.map((t) => (
          <div
            key={t.key}
            className="flex flex-col items-center gap-5 rounded-xl border p-6"
            style={{
              borderColor: 'hsl(var(--semantic-color-border-default))',
              backgroundColor: 'hsl(var(--semantic-color-surface-default))',
            }}
          >
            {/* Shape demo */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: t.radius,
                backgroundColor: `${BRAND_BLUE}26`,
                border: `2px solid ${BRAND_BLUE}`,
                flexShrink: 0,
              }}
            />

            {/* Label */}
            <div className="flex flex-col items-center gap-0.5 text-center">
              <span
                className="text-xs font-mono font-medium"
                style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
              >
                {t.label}
              </span>
              <span
                className="text-[11px] font-mono"
                style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
              >
                {t.display}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
