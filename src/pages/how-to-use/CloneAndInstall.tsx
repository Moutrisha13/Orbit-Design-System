import CodeBlock from '../../components/docs/CodeBlock';
import NoteCallout from '../../components/docs/NoteCallout';
import StepNumber from '../../components/docs/StepNumber';
import TabGroup from '../../components/docs/TabGroup';

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        <StepNumber n={n} />
        <div style={{ width: 1, flex: 1, backgroundColor: 'hsl(var(--semantic-color-border-default))', marginTop: 8, marginBottom: 0 }} />
      </div>
      <div style={{ paddingBottom: 32, flex: 1, minWidth: 0 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 12, marginTop: 2 }}>
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

const devContent = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Step n={1} title="Clone the repository">
      <CodeBlock language="bash" code={`git clone https://github.com/your-org/orbit-design-system.git
cd orbit-design-system`} />
    </Step>

    <Step n={2} title="Install dependencies">
      <CodeBlock language="bash" code={`npm install
# or
pnpm install`} />
    </Step>

    <Step n={3} title="Start the dev server">
      <CodeBlock language="bash" code="npm run dev" />
    </Step>

    <div style={{ display: 'flex', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StepNumber n={4} />
      </div>
      <div style={{ flex: 1, minWidth: 0, marginTop: 2 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 12 }}>
          Open in browser
        </h3>
        <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
          Navigate to{' '}
          <code style={{ fontSize: 13, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>
            http://localhost:5173
          </code>{' '}
          to see Orbit running.
        </p>
        <NoteCallout>
          If you're adding Orbit to an existing project, see the{' '}
          <strong>Using components</strong> section for how to copy individual components.
        </NoteCallout>
      </div>
    </div>
  </div>
);

const designerContent = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Step n={1} title="Access the Figma file">
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '22px' }}>
        Request access to the Orbit Figma library from your design lead.
        You will be invited as a viewer or editor.
      </p>
    </Step>

    <Step n={2} title="Enable the library">
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '22px' }}>
        In your Figma project: <strong>Main Menu → Assets → Team Libraries</strong> → enable{' '}
        <strong>Orbit Design System</strong>.
      </p>
    </Step>

    <div style={{ display: 'flex', gap: 16 }}>
      <StepNumber n={3} />
      <div style={{ flex: 1, minWidth: 0, marginTop: 2 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 8 }}>
          Start using components
        </h3>
        <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '22px' }}>
          Orbit components will appear in your Assets panel under <strong>Orbit Design System</strong>.
        </p>
      </div>
    </div>
  </div>
);

export default function CloneAndInstall() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        SETUP GUIDE
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Clone &amp; install
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 24 }}>
        Get Orbit running locally in under 5 minutes.
      </p>

      <TabGroup tabs={[
        { label: 'Developers', content: devContent },
        { label: 'Designers',  content: designerContent },
      ]} />
    </div>
  );
}
