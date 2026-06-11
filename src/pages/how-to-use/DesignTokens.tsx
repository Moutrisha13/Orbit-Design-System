import CodeBlock from '../../components/docs/CodeBlock';
import NoteCallout from '../../components/docs/NoteCallout';
import { InlineCode } from '../../components/docs/NoteCallout';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 17, fontWeight: 700,
      color: 'hsl(var(--semantic-color-text-primary))',
      marginBottom: 14, marginTop: 32,
      paddingBottom: 10,
      borderBottom: '1px solid hsl(var(--semantic-color-border-default))',
    }}>
      {children}
    </h2>
  );
}

interface TierCardProps {
  tier: string;
  example: string;
  desc: string;
  color: string;
}

function TierCard({ tier, example, desc, color }: TierCardProps) {
  return (
    <div style={{
      flex: 1,
      padding: '16px 20px',
      borderRadius: 10,
      border: '1px solid hsl(var(--semantic-color-border-default))',
      backgroundColor: 'hsl(var(--semantic-color-surface-default))',
    }}>
      <div style={{
        display: 'inline-block',
        fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
        color, backgroundColor: color + '18',
        padding: '3px 8px', borderRadius: 4, marginBottom: 10,
      }}>
        {tier}
      </div>
      <p style={{ fontSize: 13, fontFamily: "'JetBrains Mono', Consolas, monospace", color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 8, fontWeight: 600 }}>
        {example}
      </p>
      <p style={{ fontSize: 13, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '20px', margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

export default function DesignTokens() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        USING THE SYSTEM
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Design tokens
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 8 }}>
        The single source of truth for every visual decision in Orbit.
      </p>

      <SectionHeading>What are tokens?</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px' }}>
        Design tokens are named variables that store design decisions — colours, spacing, radii, shadows — in
        a format that's shareable across design tools and code. Instead of hardcoding <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>#1d242b</code> everywhere,
        you use <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>var(--color-text-primary)</code> and let the token system adapt
        in dark mode, across brands, or across platforms automatically.
      </p>

      <SectionHeading>Token layers</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 20 }}>
        Orbit uses a three-tier token architecture. Each tier references the tier above it.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <TierCard
          tier="1 — Base"
          example="grey-900 = #1d242b"
          desc="Raw values with no semantic meaning. These are the atoms — every possible colour, radius, and spacing value in the system."
          color="#6366f1"
        />
        <TierCard
          tier="2 — Semantic"
          example="text-primary = grey-900"
          desc="Tokens with a role. These are what you use in code. They flip their values in dark mode without any code change."
          color="#068ae9"
        />
        <TierCard
          tier="3 — Component"
          example="button-bg-primary = brand-blue"
          desc="Component-scoped aliases. Rarely referenced directly — they let you retheme a component without touching others."
          color="#10b981"
        />
      </div>

      {/* Arrow connector */}
      <p style={{ fontSize: 12, color: 'hsl(var(--semantic-color-text-tertiary))', textAlign: 'center', margin: '8px 0' }}>
        Base → Semantic → Component — each tier references only the tier above
      </p>

      <SectionHeading>Using tokens in CSS</SectionHeading>
      <CodeBlock language="css" code={`.my-component {
  color: var(--semantic-color-text-primary);
  background: var(--semantic-color-surface-subtle);
  border-radius: var(--corner-radius-8);
  padding: var(--spacing-12) var(--spacing-16);
}`} />

      <SectionHeading>Using tokens in Tailwind</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        Use the arbitrary value syntax to reference tokens directly in Tailwind class names:
      </p>
      <CodeBlock language="tsx" code={`<div className="bg-[var(--semantic-color-surface-subtle)] text-[var(--semantic-color-text-primary)]">
  Content
</div>`} />

      <div style={{ marginTop: 20 }}>
        <NoteCallout>
          Always use semantic token names like <InlineCode>--semantic-color-text-primary</InlineCode>{' '}
          rather than <InlineCode>--base-color-grey-900</InlineCode>. Only semantic tokens adapt
          automatically in dark mode.
        </NoteCallout>
      </div>

      <SectionHeading>Token JSON structure</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        Token files live in <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>tokens/</code> as Figma Tokens plugin JSON exports.
        A build step converts them to CSS custom properties in <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>src/generated/tokens.css</code>.
        Never edit the generated file — edit the JSON source and re-run the build.
      </p>
    </div>
  );
}
