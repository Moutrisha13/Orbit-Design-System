import CodeBlock from '../../components/docs/CodeBlock';
import NoteCallout from '../../components/docs/NoteCallout';
import { InlineCode } from '../../components/docs/NoteCallout';

interface CommandRowProps {
  command: string;
  description: string;
}

function CommandRow({ command, description }: CommandRowProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
      <CodeBlock language="bash" code={command} />
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', margin: 0, lineHeight: '22px' }}>
        {description}
      </p>
    </div>
  );
}

export default function DevServer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        SETUP GUIDE
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Dev server
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 32 }}>
        Available commands for development, building, and previewing.
      </p>

      {/* Commands table header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: 16,
        padding: '8px 0',
        borderBottom: '2px solid hsl(var(--semantic-color-border-default))',
        marginBottom: 24,
      }}>
        <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'hsl(var(--semantic-color-text-tertiary))' }}>
          Command
        </span>
        <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'hsl(var(--semantic-color-text-tertiary))' }}>
          Description
        </span>
      </div>

      {[
        { cmd: 'npm run dev',        desc: 'Start local dev server at localhost:5173 with Vite HMR.' },
        { cmd: 'npm run build',      desc: 'Production build — outputs to the dist/ folder.' },
        { cmd: 'npm run preview',    desc: 'Serve the production build locally to verify before deploy.' },
        { cmd: 'npm run lint',       desc: 'Run ESLint across the codebase and report any issues.' },
        { cmd: 'npx tsc --noEmit',   desc: 'Run TypeScript compiler in check-only mode — no output files.' },
      ].map(({ cmd, desc }) => (
        <div key={cmd} style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 16,
          padding: '12px 0',
          borderBottom: '1px solid hsl(var(--semantic-color-border-default))',
          alignItems: 'center',
        }}>
          <code style={{
            fontSize: 13,
            fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
            backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
            padding: '4px 10px',
            borderRadius: 6,
            color: '#068ae9',
            fontWeight: 600,
            display: 'inline-block',
          }}>
            {cmd}
          </code>
          <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', margin: 0, lineHeight: '22px' }}>
            {desc}
          </p>
        </div>
      ))}

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 16 }}>
          Each command in detail
        </h2>
        <CommandRow
          command="npm run dev"
          description="Starts Vite's development server. Changes to most source files are reflected instantly via Hot Module Replacement (HMR) — no full page reload needed."
        />
        <CommandRow
          command="npm run build"
          description="Runs the TypeScript compiler then bundles for production using Vite (Rollup under the hood). The output goes to dist/ and is ready to deploy."
        />
        <CommandRow
          command="npx tsc --noEmit"
          description="Type-checks your entire codebase without emitting any JavaScript. Useful for CI and pre-commit hooks."
        />
      </div>

      <NoteCallout>
        Hot reload is enabled by default. Changes to token files in{' '}
        <InlineCode>/tokens</InlineCode> require restarting the dev server to
        regenerate <InlineCode>tokens.css</InlineCode>.
      </NoteCallout>
    </div>
  );
}
