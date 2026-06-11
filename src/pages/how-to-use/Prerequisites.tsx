import { Check } from 'lucide-react';
import CodeBlock from '../../components/docs/CodeBlock';
import TabGroup from '../../components/docs/TabGroup';

function RequirementCard({ text, sub }: { text: string; sub?: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 16px',
      borderRadius: 8,
      border: '1px solid hsl(var(--semantic-color-border-default))',
      backgroundColor: 'hsl(var(--semantic-color-surface-default))',
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: '50%',
        backgroundColor: 'hsl(var(--semantic-color-surface-brand-primary-subtle))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 1,
      }}>
        <Check size={11} color="#068ae9" strokeWidth={3} />
      </div>
      <div>
        <p style={{ fontSize: 14, fontWeight: 500, color: 'hsl(var(--semantic-color-text-primary))' }}>{text}</p>
        {sub && <p style={{ fontSize: 12, color: 'hsl(var(--semantic-color-text-tertiary))', marginTop: 2 }}>{sub}</p>}
      </div>
    </div>
  );
}

const devContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 12 }}>
        Required
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <RequirementCard text="Node.js 18.0 or later" sub="Download from nodejs.org — LTS version recommended" />
        <RequirementCard text="npm 9+ or pnpm 8+ or yarn 1.22+" sub="Comes with Node.js; upgrade with: npm install -g npm@latest" />
        <RequirementCard text="Git" sub="Download from git-scm.com" />
        <RequirementCard text="A React 18+ project" sub="Next.js 13+ with App Router recommended" />
      </div>
    </div>

    <div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 12 }}>
        Recommended
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <RequirementCard text="VS Code" sub="Recommended editor for the best TypeScript + Tailwind experience" />
        <RequirementCard text="Tailwind CSS IntelliSense" sub="VS Code extension — autocomplete for Tailwind classes" />
        <RequirementCard text="ESLint" sub="VS Code extension — real-time lint feedback" />
        <RequirementCard text="Prettier" sub="VS Code extension — consistent code formatting" />
      </div>
    </div>

    <div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 12 }}>
        Check your versions
      </h3>
      <CodeBlock language="bash" code={`node --version   # should be 18+
npm --version    # should be 9+
git --version`} />
    </div>
  </div>
);

const designerContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <RequirementCard text="Figma" sub="Free or paid account at figma.com" />
    <RequirementCard text="Orbit Figma library access" sub="Request from your team lead — you'll be invited as viewer or editor" />
    <RequirementCard text="Figma Tokens plugin" sub="Optional but recommended — install from Figma Community" />
  </div>
);

export default function Prerequisites() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        SETUP GUIDE
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Prerequisites
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 24 }}>
        Make sure your environment is ready before installing Orbit.
      </p>

      <TabGroup tabs={[
        { label: 'Developers', content: devContent },
        { label: 'Designers',  content: designerContent },
      ]} />
    </div>
  );
}
