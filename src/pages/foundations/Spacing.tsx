const TOKENS = [4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80];

const MAX_VAL = 80;
const BRAND_BLUE = '#068ae9';
const TRACK_COLOR = '#e8edf5';

export default function Spacing() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
        >
          Spacing
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
          A consistent scale for padding, gaps, margins and layout rhythm. All values in px.
        </p>
      </div>

      {/* Table */}
      <div
        className="rounded-xl border overflow-hidden"
        style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
      >
        {/* Header */}
        <div
          className="grid px-6 py-3 border-b"
          style={{
            gridTemplateColumns: '180px 64px 1fr',
            borderColor: 'hsl(var(--semantic-color-border-default))',
            backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
          }}
        >
          {['Token', 'px', 'Visual'].map((h) => (
            <span
              key={h}
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        {TOKENS.map((val, i) => {
          const pct = (val / MAX_VAL) * 100;

          return (
            <div key={val}>
              <div
                className="grid items-center px-6 py-3"
                style={{
                  gridTemplateColumns: '180px 64px 1fr',
                  backgroundColor: i % 2 === 1
                    ? 'hsl(var(--semantic-color-surface-subtle))'
                    : 'transparent',
                }}
              >
                {/* Token name */}
                <span
                  className="text-xs font-mono"
                  style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}
                >
                  --space-{val}
                </span>

                {/* px */}
                <span
                  className="text-xs font-mono tabular-nums"
                  style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
                >
                  {val}px
                </span>

                {/* Visual bar — proportional track */}
                <div className="relative flex items-center pr-6" style={{ height: 20 }}>
                  {/* Track */}
                  <div
                    className="absolute left-0 right-6 my-auto"
                    style={{
                      height: 10,
                      borderRadius: 99,
                      backgroundColor: TRACK_COLOR,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  />
                  {/* Fill */}
                  {val === 0 ? (
                    <div
                      className="absolute left-0"
                      style={{
                        width: 12,
                        height: 10,
                        borderRadius: 99,
                        backgroundColor: TRACK_COLOR,
                        border: `1.5px dashed ${BRAND_BLUE}`,
                        opacity: 0.8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    />
                  ) : (
                    <div
                      className="absolute left-0"
                      style={{
                        width: `calc(${pct}% - 1.5rem)`,
                        height: 10,
                        borderRadius: 99,
                        backgroundColor: BRAND_BLUE,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    />
                  )}
                </div>
              </div>

              {i < TOKENS.length - 1 && (
                <div
                  className="border-b"
                  style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
