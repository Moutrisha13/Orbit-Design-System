import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

// Very lightweight token colorizer — no external deps
function colorize(code: string, lang: string): React.ReactNode[] {
  if (lang === 'bash') return colorizeBash(code);
  if (lang === 'css')  return colorizeCss(code);
  return colorizeTsx(code);
}

type Token = { text: string; color: string };


const C = {
  keyword:   '#c792ea',
  string:    '#c3e88d',
  comment:   '#546e7a',
  number:    '#f78c6c',
  tag:       '#89ddff',
  attr:      '#80cbc4',
  plain:     '#cdd3de',
  punct:     '#89ddff',
  prop:      '#82aaff',
  value:     '#f07178',
};

function colorizeBash(code: string): React.ReactNode[] {
  const lines = code.split('\n');
  const result: React.ReactNode[] = [];
  lines.forEach((line, li) => {
    if (li > 0) result.push('\n');
    if (line.trimStart().startsWith('#')) {
      result.push(<span key={li} style={{ color: C.comment }}>{line}</span>);
      return;
    }
    // commands
    const cmdMatch = line.match(/^(\s*)(npm|pnpm|yarn|git|node|npx)(\s.*)?$/);
    if (cmdMatch) {
      result.push(
        <span key={`${li}a`} style={{ color: C.plain }}>{cmdMatch[1]}</span>,
        <span key={`${li}b`} style={{ color: C.keyword }}>{cmdMatch[2]}</span>,
        <span key={`${li}c`} style={{ color: C.plain }}>{cmdMatch[3] ?? ''}</span>,
      );
      return;
    }
    result.push(<span key={li} style={{ color: C.plain }}>{line}</span>);
  });
  return result;
}

function colorizeCss(code: string): React.ReactNode[] {
  return code.split('\n').flatMap((line, li) => {
    const nodes: React.ReactNode[] = li > 0 ? ['\n'] : [];
    // comment
    if (line.trim().startsWith('/*') || line.trim().startsWith('//')) {
      nodes.push(<span key={`${li}`} style={{ color: C.comment }}>{line}</span>);
      return nodes;
    }
    // property: value;
    const propMatch = line.match(/^(\s*)([\w-]+)(\s*:\s*)(.+?)(;?\s*)$/);
    if (propMatch) {
      nodes.push(
        <span key={`${li}a`} style={{ color: C.plain }}>{propMatch[1]}</span>,
        <span key={`${li}b`} style={{ color: C.prop }}>{propMatch[2]}</span>,
        <span key={`${li}c`} style={{ color: C.punct }}>{propMatch[3]}</span>,
        <span key={`${li}d`} style={{ color: C.string }}>{propMatch[4]}</span>,
        <span key={`${li}e`} style={{ color: C.plain }}>{propMatch[5]}</span>,
      );
      return nodes;
    }
    nodes.push(<span key={`${li}`} style={{ color: C.plain }}>{line}</span>);
    return nodes;
  });
}


function colorizeTsx(code: string): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  const lines = code.split('\n');

  lines.forEach((line, li) => {
    if (li > 0) result.push('\n');

    // comment line
    if (line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('/*')) {
      result.push(<span key={li} style={{ color: C.comment }}>{line}</span>);
      return;
    }

    // Tokenize: strings first, then keywords, then rest
    const segments: Token[] = [];
    let idx = 0;

    // Simple pass: split on string literals
    const strRe = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g;
    let last = 0;
    let m: RegExpExecArray | null;

    while ((m = strRe.exec(line)) !== null) {
      const before = line.slice(last, m.index);
      // tokenize before for keywords
      if (before) addTsxTokens(before, segments, idx);
      segments.push({ text: m[1], color: C.string });
      last = m.index + m[1].length;
    }
    if (last < line.length) addTsxTokens(line.slice(last), segments, last);

    segments.forEach((s, i) =>
      result.push(<span key={`${li}-${i}`} style={{ color: s.color }}>{s.text}</span>)
    );
  });

  return result;
}

function addTsxTokens(text: string, out: Token[], _offset: number) {
  const kwRe = /\b(import|export|from|const|let|var|function|return|default|if|else|type|interface|extends|implements|class|new|null|undefined|true|false|async|await|as)\b/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = kwRe.exec(text)) !== null) {
    if (m.index > last) out.push({ text: text.slice(last, m.index), color: C.plain });
    out.push({ text: m[0], color: C.keyword });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last), color: C.plain });
}

export default function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const lines = code.split('\n');
  const colorized = colorize(code, language);

  return (
    <div style={{
      position: 'relative',
      borderRadius: 8,
      backgroundColor: '#1d242b',
      overflow: 'hidden',
      fontSize: 13,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
    }}>
      {/* Header bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <span style={{ color: '#546e7a', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex', alignItems: 'center', gap: 4,
            color: copied ? '#c3e88d' : '#546e7a',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 11, fontWeight: 500, transition: 'color 0.15s',
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code area with line numbers */}
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {/* Line numbers */}
        <div style={{
          padding: '16px 0',
          userSelect: 'none',
          textAlign: 'right',
          color: '#37474f',
          borderRight: '1px solid rgba(255,255,255,0.04)',
          flexShrink: 0,
        }}>
          {lines.map((_, i) => (
            <div key={i} style={{ padding: '0 12px', lineHeight: '20px' }}>{i + 1}</div>
          ))}
        </div>

        {/* Code */}
        <pre style={{
          margin: 0, padding: '16px 20px',
          whiteSpace: 'pre',
          lineHeight: '20px',
          flex: 1,
        }}>
          <code>{colorized}</code>
        </pre>
      </div>
    </div>
  );
}
