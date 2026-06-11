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

function RuleCard({ type, children }: { type: 'do' | 'dont'; children: React.ReactNode }) {
  const isGood = type === 'do';
  return (
    <div style={{
      flex: 1,
      padding: '16px 20px',
      borderRadius: 10,
      border: `1px solid ${isGood ? '#bbf7d0' : '#fecaca'}`,
      backgroundColor: isGood ? '#f0fdf4' : '#fff1f2',
    }}>
      <span style={{
        fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em',
        color: isGood ? '#16a34a' : '#dc2626',
        display: 'block', marginBottom: 8,
      }}>
        {isGood ? '✓ Do' : '✕ Don\'t'}
      </span>
      <p style={{ fontSize: 14, color: isGood ? '#166534' : '#991b1b', lineHeight: '22px', margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

export default function ExtendingComponents() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        USING THE SYSTEM
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Extending components
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 8 }}>
        How to customise Orbit components without breaking the system.
      </p>

      <SectionHeading>The right way to extend</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        Wrap Orbit components — don't modify them. Wrapping preserves the original props API and lets you still receive system updates.
      </p>
      <CodeBlock language="tsx" code={`// Wrap, don't modify
import ButtonComponent from '@/components/ui/Button'
import type { ButtonProps } from '@/components/ui/Button'

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode
}

export function IconButton({ icon, children, ...props }: IconButtonProps) {
  return (
    <ButtonComponent {...props}>
      <span style={{ marginRight: 6 }}>{icon}</span>
      {children}
    </ButtonComponent>
  )
}`} />

      <SectionHeading>Composing with className</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        Use <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>className</code> only for layout adjustments — margins, widths, flex positioning. Never for color overrides.
      </p>
      <CodeBlock language="tsx" code={`// OK — layout override
<Button className="w-full mt-4" variant="primary">
  Full width
</Button>

// Not OK — color override via className
<Button className="bg-red-500 text-white">
  Broken
</Button>`} />

      <SectionHeading>Adding new variants</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        If you need a variant that doesn't exist, add a token for the new color in your token file first, then extend the component's variant map:
      </p>
      <CodeBlock language="tsx" code={`// 1. Add to tokens/2-Semantics.Value.tokens.json
// "color-button-bg-brand": { "value": "{brand.indigo}" }

// 2. Create a wrapper with the extra variant
const EXTRA_VARIANTS = {
  brand: {
    background: 'var(--color-button-bg-brand)',
    color: '#ffffff',
  },
} as const

type ExtendedVariant = 'brand'

export function BrandButton({ children }: { children: React.ReactNode }) {
  const v = EXTRA_VARIANTS.brand
  return (
    <button style={{ background: v.background, color: v.color }}>
      {children}
    </button>
  )
}`} />

      <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <RuleCard type="do">Create wrapper components in your own codebase that compose Orbit primitives.</RuleCard>
        <RuleCard type="dont">Edit files inside <code>src/components/ui/</code> directly — your changes will be overwritten when you sync from the main Orbit repo.</RuleCard>
      </div>

      <div style={{ marginTop: 24 }}>
        <NoteCallout>
          Never edit <InlineCode>src/components/ui/</InlineCode> files directly if you're consuming
          Orbit as a package. Create wrapper components in your own codebase instead.
        </NoteCallout>
      </div>
    </div>
  );
}
