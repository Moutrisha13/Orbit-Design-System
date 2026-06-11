// ─── Type data ────────────────────────────────────────────────────────────────

const HEADINGS = [
  { label: 'H1', size: 50, lineHeight: 66, weight: 600, tracking: 0 },
  { label: 'H2', size: 38, lineHeight: 50, weight: 600, tracking: 0 },
  { label: 'H3', size: 31, lineHeight: 42, weight: 600, tracking: 0 },
  { label: 'H4', size: 25, lineHeight: 34, weight: 600, tracking: 0 },
  { label: 'H5', size: 21, lineHeight: 30, weight: 600, tracking: 0 },
  { label: 'H6', size: 19, lineHeight: 28, weight: 600, tracking: 0 },
];

const BODY = [
  { label: 'B1', size: 17, lineHeight: 26, tracking: 0 },
  { label: 'B2', size: 15, lineHeight: 22, tracking: 0 },
  { label: 'B3', size: 13, lineHeight: 20, tracking: 0 },
];

const CAPTION = [
  { label: 'C12', size: 12, lineHeight: 16, tracking: 0.4 },
  { label: 'C11', size: 11, lineHeight: 14, tracking: 0.4 },
];

const OVERLINE = [
  { label: 'O12', size: 12, lineHeight: 16, tracking: 0.4 },
  { label: 'O11', size: 11, lineHeight: 14, tracking: 0.4 },
];

const WEIGHTS = [
  { label: 'Regular',  value: 400 },
  { label: 'Medium',   value: 500 },
  { label: 'Semibold', value: 600 },
];

const FONT = 'var(--font-family-primary)';
const SAMPLE = 'The quick brown fox';

// ─── Spec block ───────────────────────────────────────────────────────────────

function Spec({ size, lineHeight, weight, tracking }: { size: number; lineHeight: number; weight?: number; tracking: number }) {
  return (
    <div className="flex flex-col gap-0.5 shrink-0" style={{ minWidth: 160 }}>
      {[
        ['font-size',    `${size}px`],
        ['line-height',  `${lineHeight}px`],
        ...(weight !== undefined ? [['weight', `${weight === 600 ? 'SemiBold' : weight === 500 ? 'Medium' : 'Regular'} / ${weight}`] as [string, string]] : []),
        ['tracking',     `${tracking}px`],
      ].map(([k, v]) => (
        <div key={k} className="flex items-baseline gap-1.5">
          <span className="text-[10px] font-mono" style={{ color: 'hsl(var(--semantic-color-text-muted))', minWidth: 72 }}>{k}</span>
          <span className="text-[11px] font-mono font-medium" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Section eyebrow ─────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-widest mb-3"
      style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}
    >
      {children}
    </p>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider() {
  return <div className="border-b" style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }} />;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Typography() {
  return (
    <div className="flex flex-col gap-12">
      {/* Page header */}
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
        >
          Typography
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
          Manrope across all semantic type styles — headings, body, and captions.
        </p>
      </div>

      {/* ── Headings ── */}
      <section>
        <Eyebrow>Headings</Eyebrow>
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
        >
          {HEADINGS.map((h, i) => (
            <div key={h.label}>
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 px-6 py-6"
                style={{ backgroundColor: i % 2 === 1 ? 'hsl(var(--semantic-color-surface-subtle))' : 'transparent' }}
              >
                {/* Label */}
                <span
                  className="text-xs font-semibold font-mono shrink-0 w-8"
                  style={{ color: 'hsl(var(--semantic-color-text-muted))' }}
                >
                  {h.label}
                </span>

                {/* Live sample */}
                <div className="flex-1 min-w-0">
                  <span
                    style={{
                      fontFamily: FONT,
                      fontSize: h.size,
                      fontWeight: h.weight,
                      lineHeight: `${h.lineHeight}px`,
                      letterSpacing: h.tracking,
                      color: 'hsl(var(--semantic-color-text-primary))',
                      display: 'block',
                    }}
                  >
                    {SAMPLE}
                  </span>
                </div>

                {/* Spec */}
                <Spec size={h.size} lineHeight={h.lineHeight} weight={h.weight} tracking={h.tracking} />
              </div>
              {i < HEADINGS.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Body ── */}
      <section>
        <Eyebrow>Body</Eyebrow>
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-[56px_1fr_1fr_1fr_140px] gap-4 px-6 py-3 border-b"
            style={{
              borderColor: 'hsl(var(--semantic-color-border-default))',
              backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Style</span>
            {WEIGHTS.map(w => (
              <span key={w.label} className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>
                {w.label}
              </span>
            ))}
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Spec</span>
          </div>

          {BODY.map((b, i) => (
            <div key={b.label}>
              <div
                className="grid grid-cols-[56px_1fr_1fr_1fr_140px] gap-4 items-center px-6 py-5"
                style={{ backgroundColor: i % 2 === 1 ? 'hsl(var(--semantic-color-surface-subtle))' : 'transparent' }}
              >
                <span className="text-xs font-mono font-semibold" style={{ color: 'hsl(var(--semantic-color-text-muted))' }}>{b.label}</span>
                {WEIGHTS.map(w => (
                  <span
                    key={w.label}
                    style={{
                      fontFamily: FONT,
                      fontSize: b.size,
                      fontWeight: w.value,
                      lineHeight: `${b.lineHeight}px`,
                      letterSpacing: b.tracking,
                      color: 'hsl(var(--semantic-color-text-primary))',
                    }}
                  >
                    {SAMPLE}
                  </span>
                ))}
                <Spec size={b.size} lineHeight={b.lineHeight} tracking={b.tracking} />
              </div>
              {i < BODY.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Caption & Overline ── */}
      <section>
        <Eyebrow>Caption &amp; Overline</Eyebrow>
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[80px_1fr_140px] gap-4 px-6 py-3 border-b"
            style={{
              borderColor: 'hsl(var(--semantic-color-border-default))',
              backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
            }}
          >
            {['Style', 'Sample', 'Spec'].map(h => (
              <span key={h} className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>{h}</span>
            ))}
          </div>

          {/* Caption group label */}
          <div
            className="px-6 py-1.5 border-b"
            style={{
              borderColor: 'hsl(var(--semantic-color-border-default))',
              backgroundColor: 'hsl(var(--semantic-color-surface-light))',
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Caption</span>
          </div>

          {CAPTION.map((c, i) => (
            <div key={c.label}>
              <div
                className="grid grid-cols-[80px_1fr_140px] gap-4 items-center px-6 py-4"
                style={{ backgroundColor: i % 2 === 1 ? 'hsl(var(--semantic-color-surface-subtle))' : 'transparent' }}
              >
                <span className="text-xs font-mono font-semibold" style={{ color: 'hsl(var(--semantic-color-text-muted))' }}>{c.label}</span>
                <span
                  style={{
                    fontFamily: FONT,
                    fontSize: c.size,
                    fontWeight: 400,
                    lineHeight: `${c.lineHeight}px`,
                    letterSpacing: c.tracking,
                    color: 'hsl(var(--semantic-color-text-primary))',
                  }}
                >
                  {SAMPLE}
                </span>
                <Spec size={c.size} lineHeight={c.lineHeight} tracking={c.tracking} />
              </div>
              {i < CAPTION.length - 1 && <Divider />}
            </div>
          ))}

          {/* Overline group label */}
          <div
            className="px-6 py-1.5 border-t border-b"
            style={{
              borderColor: 'hsl(var(--semantic-color-border-default))',
              backgroundColor: 'hsl(var(--semantic-color-surface-light))',
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>Overline</span>
          </div>

          {OVERLINE.map((o, i) => (
            <div key={o.label}>
              <div
                className="grid grid-cols-[80px_1fr_140px] gap-4 items-center px-6 py-4"
                style={{ backgroundColor: i % 2 === 1 ? 'hsl(var(--semantic-color-surface-subtle))' : 'transparent' }}
              >
                <span className="text-xs font-mono font-semibold" style={{ color: 'hsl(var(--semantic-color-text-muted))' }}>{o.label}</span>
                <span
                  style={{
                    fontFamily: FONT,
                    fontSize: o.size,
                    fontWeight: 400,
                    lineHeight: `${o.lineHeight}px`,
                    letterSpacing: o.tracking,
                    textTransform: 'uppercase',
                    color: 'hsl(var(--semantic-color-text-primary))',
                  }}
                >
                  {SAMPLE}
                </span>
                <Spec size={o.size} lineHeight={o.lineHeight} tracking={o.tracking} />
              </div>
              {i < OVERLINE.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
