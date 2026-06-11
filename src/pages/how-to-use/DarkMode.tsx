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

export default function DarkMode() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#068ae9' }}>
        USING THE SYSTEM
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(var(--semantic-color-text-primary))', marginBottom: 4 }}>
        Dark mode
      </h1>
      <p style={{ fontSize: 15, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px', marginBottom: 8 }}>
        Orbit supports light and dark mode out of the box via CSS token variables.
      </p>

      <SectionHeading>How it works</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', lineHeight: '24px' }}>
        The theme toggle in the top bar switches a <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>.dark</code> class
        on the <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>&lt;html&gt;</code> element.
        All semantic CSS custom properties are redefined under the <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>.dark</code> selector,
        so every component that uses token variables flips automatically — no JavaScript logic needed per component.
      </p>

      <SectionHeading>Token overrides</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        In <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>src/styles/dark-mode.css</code>, each semantic token gets a dark-mode override:
      </p>
      <CodeBlock language="css" code={`:root {
  --semantic-color-surface-default: #ffffff;
  --semantic-color-text-primary:    #1d242b;
  --semantic-color-border-default:  #e2e8f0;
}

html.dark {
  --semantic-color-surface-default: #1d242b;  /* flips in dark mode */
  --semantic-color-text-primary:    #f6f7f9;
  --semantic-color-border-default:  #2d3748;
}`} />

      <div style={{ marginTop: 20 }}>
        <NoteCallout>
          Always use semantic token names like <InlineCode>--semantic-color-surface-default</InlineCode>{' '}
          rather than <InlineCode>--base-color-grey-900</InlineCode>. Only token-based values adapt
          automatically in dark mode.
        </NoteCallout>
      </div>

      <SectionHeading>The useTheme hook</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        Orbit ships a <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>useTheme</code> hook that reads and persists the theme preference to <code style={{ fontSize: 12, backgroundColor: 'hsl(var(--semantic-color-surface-subtle))', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>localStorage</code>:
      </p>
      <CodeBlock language="tsx" code={`import { useTheme } from '@/hooks/useTheme'

export function MyApp() {
  const { theme, toggle } = useTheme()

  return (
    <div>
      <button onClick={toggle}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}`} />

      <SectionHeading>Writing dark-mode-safe components</SectionHeading>
      <p style={{ fontSize: 14, color: 'hsl(var(--semantic-color-text-secondary))', marginBottom: 16, lineHeight: '22px' }}>
        Any component that uses only semantic token variables will work in both modes automatically:
      </p>
      <CodeBlock language="tsx" code={`// Safe — uses semantic tokens
<div style={{
  backgroundColor: 'hsl(var(--semantic-color-surface-default))',
  color: 'hsl(var(--semantic-color-text-primary))',
  border: '1px solid hsl(var(--semantic-color-border-default))',
}}>
  Adapts to dark mode automatically
</div>

// Not safe — hardcoded hex values
<div style={{ backgroundColor: '#ffffff', color: '#1d242b' }}>
  Broken in dark mode
</div>`} />

      <SectionHeading>Testing dark mode</SectionHeading>
      <CodeBlock language="bash" code={`# Toggle via the Orbit topbar sun/moon button

# Or toggle in DevTools console:
document.documentElement.classList.toggle('dark')`} />
    </div>
  );
}
