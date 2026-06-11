import CodeBlock from '../../components/docs/CodeBlock';
import NoteCallout from '../../components/docs/NoteCallout';
import TabGroup from '../../components/docs/TabGroup';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 17,
      fontWeight: 700,
      color: 'hsl(var(--semantic-color-text-primary))',
      marginBottom: 14,
      marginTop: 32,
      paddingBottom: 10,
      borderBottom: '1px solid hsl(var(--semantic-color-border-default))',
    }}>
      {children}
    </h2>
  );
}

const devContent = (
  <div>
    <SectionHeading>Basic usage</SectionHeading>
    <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
      Import any component directly from <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>@/components/ui</code> and use it in your JSX.
    </p>
    <CodeBlock language="tsx" code={`import { Button } from '@/components/ui/Button'

export default function MyPage() {
  return (
    <Button variant="primary" size="medium">
      Save changes
    </Button>
  )
}`} />

    <SectionHeading>With props</SectionHeading>
    <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
      All components expose typed props. Your IDE will autocomplete every available variant, size, and state.
    </p>
    <CodeBlock language="tsx" code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button disabled>Disabled</Button>`} />

    <div style={{ marginTop: 20 }}>
      <NoteCallout>
        All components accept a <strong>className</strong> prop for layout overrides (margin, width).
        Never use <strong>className</strong> to override colors — use the <strong>variant</strong> prop
        or CSS token variables instead.
      </NoteCallout>
    </div>

    <SectionHeading>Copying a component to your project</SectionHeading>
    <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
      Orbit is a copy-paste design system. Copy the component file from <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>src/components/ui/</code> into your own project's components folder. Make sure <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>tokens.css</code> is imported in your root layout.
    </p>
    <CodeBlock language="tsx" code={`// In your root layout or _app.tsx
import '@/styles/tokens.css'`} />
  </div>
);

const designerContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div>
      <SectionHeading>Using component instances</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '22px' }}>
        Drag components from the <strong>Assets panel → Orbit Design System</strong> onto your canvas.
        Use the right panel to switch variants, states, and sizes.
      </p>
    </div>
    <div>
      <SectionHeading>Detaching instances</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '22px' }}>
        Only detach an instance if you need a one-off customisation that isn't covered by existing variants.
        Right-click → <strong>Detach instance</strong>. Detached components won't receive library updates.
      </p>
    </div>
    <div>
      <SectionHeading>Overriding text and icons</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '22px' }}>
        Double-click any text layer inside a component to edit it without detaching.
        Swap icons by selecting the icon layer and using the component picker in the right panel.
      </p>
    </div>
  </div>
);

export default function UsingComponents() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        USING THE SYSTEM
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Using components
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 24 }}>
        How to import and use Orbit components in your project.
      </p>

      <TabGroup tabs={[
        { label: 'Developers', content: devContent },
        { label: 'Designers',  content: designerContent },
      ]} />
    </div>
  );
}
