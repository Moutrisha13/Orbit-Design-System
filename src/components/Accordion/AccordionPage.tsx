import { useState } from 'react';
import { Eye, Code2, ExternalLink, RotateCcw } from 'lucide-react';
import Accordion, {
  type AccordionType,
  type AccordionVariant,
  type AccordionSize,
  type AccordionItem,
} from '../ui/Accordion';

// ─── Static content ───────────────────────────────────────────────────────────

const ITEMS: AccordionItem[] = [
  {
    id: 'item-1',
    trigger: 'What is a design token?',
    content:
      'Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes like color, typography, and spacing.',
  },
  {
    id: 'item-2',
    trigger: 'How do I use components?',
    content:
      'Import the component from the design system package, pass the required props, and override styles using the provided CSS token variables. Never hardcode colors.',
  },
  {
    id: 'item-3',
    trigger: 'Is this accessible?',
    content:
      'Yes. All accordion items are keyboard navigable using Tab and Enter/Space. ARIA attributes (aria-expanded, aria-controls) are applied automatically.',
  },
];


// ─── Helpers ──────────────────────────────────────────────────────────────────

type Tab = 'playground' | 'usage';

function PillToggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div
      className="flex rounded-lg p-0.5 gap-0.5"
      style={{ backgroundColor: 'hsl(var(--semantic-color-surface-subtle))' }}
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className="px-3 py-1 rounded-md text-xs font-medium capitalize transition-all"
          style={{
            backgroundColor:
              value === opt ? 'hsl(var(--semantic-color-surface-default))' : 'transparent',
            color:
              value === opt
                ? 'hsl(var(--semantic-color-text-primary))'
                : 'hsl(var(--semantic-color-text-secondary))',
            boxShadow: value === opt ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors duration-200"
      style={{
        backgroundColor: checked
          ? 'hsl(var(--semantic-color-text-brand-primary))'
          : 'hsl(var(--semantic-color-border-default))',
      }}
    >
      <span
        className="pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 mt-0.5"
        style={{ transform: checked ? 'translateX(18px)' : 'translateX(2px)' }}
      />
    </button>
  );
}

function ControlRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3" style={{ borderBottom: '1px solid hsl(var(--semantic-color-border-default))' }}>
      <span className="text-xs font-medium" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
        {label}
      </span>
      {children}
    </div>
  );
}

// ─── Default state ────────────────────────────────────────────────────────────

const DEFAULT = {
  type: 'single' as AccordionType,
  variant: 'default' as AccordionVariant,
  size: 'medium' as AccordionSize,
  showChevron: true,
  showLeadingIcon: false,
  dividers: true,
  defaultOpen: 'item-1' as string | null,
  disabledItem: false,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AccordionPage() {
  const [tab, setTab] = useState<Tab>('playground');

  // Controls
  const [type,            setType]            = useState<AccordionType>(DEFAULT.type);
  const [variant,         setVariant]         = useState<AccordionVariant>(DEFAULT.variant);
  const [size,            setSize]            = useState<AccordionSize>(DEFAULT.size);
  const [showChevron,     setShowChevron]     = useState(DEFAULT.showChevron);
  const [showLeadingIcon, setShowLeadingIcon] = useState(DEFAULT.showLeadingIcon);
  const [dividers,        setDividers]        = useState(DEFAULT.dividers);
  const [defaultOpen,     setDefaultOpen]     = useState<string | null>(DEFAULT.defaultOpen);
  const [disabledItem,    setDisabledItem]    = useState(DEFAULT.disabledItem);

  function reset() {
    setType(DEFAULT.type);
    setVariant(DEFAULT.variant);
    setSize(DEFAULT.size);
    setShowChevron(DEFAULT.showChevron);
    setShowLeadingIcon(DEFAULT.showLeadingIcon);
    setDividers(DEFAULT.dividers);
    setDefaultOpen(DEFAULT.defaultOpen);
    setDisabledItem(DEFAULT.disabledItem);
  }

  const defaultOpenMap: Record<string, string | null> = {
    None: null, 'Item 1': 'item-1', 'Item 2': 'item-2', 'Item 3': 'item-3',
  };
  const defaultOpenLabel = Object.entries(defaultOpenMap).find(([, v]) => v === defaultOpen)?.[0] ?? 'None';

  const liveItems: AccordionItem[] = ITEMS.map((it) => ({
    ...it,
    disabled: disabledItem && it.id === 'item-3',
  }));

  return (
    <div className="flex flex-col gap-0">
      {/* ── Page header ── */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex flex-col gap-1.5">
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
          >
            Accordion
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
            Vertically stacked list of items that expand/collapse to reveal content.
          </p>
        </div>
        <a
          href="http://localhost:6006/?path=/story/components-accordion--default"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors hover:bg-black/5"
          style={{
            borderColor: 'hsl(var(--semantic-color-border-default))',
            color: 'hsl(var(--semantic-color-text-secondary))',
          }}
        >
          Storybook
          <ExternalLink className="size-3" />
        </a>
      </div>

      {/* ── Tabs ── */}
      <div
        className="flex gap-0 border-b mb-6"
        style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
      >
        {(['playground', 'usage'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-4 py-2.5 text-sm font-medium capitalize transition-colors relative"
            style={{ color: tab === t ? 'hsl(var(--semantic-color-text-brand-primary))' : 'hsl(var(--semantic-color-text-secondary))' }}
          >
            {t}
            {tab === t && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                style={{ backgroundColor: 'hsl(var(--semantic-color-text-brand-primary))' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Playground tab ── */}
      {tab === 'playground' && (
        <div className="flex flex-col md:flex-row gap-5" style={{ minHeight: 480 }}>

          {/* Controls panel */}
          <div
            className="flex flex-col rounded-xl border overflow-hidden md:w-[55%] md:shrink-0"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{
                borderColor: 'hsl(var(--semantic-color-border-default))',
                backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>
                Playground
              </span>
              <button
                onClick={reset}
                className="flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-70"
                style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}
              >
                <RotateCcw className="size-3" />
                Reset
              </button>
            </div>

            {/* Controls */}
            <div className="flex flex-col px-5 pb-4 flex-1">
              <ControlRow label="Type">
                <PillToggle<AccordionType>
                  options={['single', 'multiple']}
                  value={type}
                  onChange={setType}
                />
              </ControlRow>

              <ControlRow label="Variant">
                <PillToggle<AccordionVariant>
                  options={['default', 'bordered', 'filled']}
                  value={variant}
                  onChange={setVariant}
                />
              </ControlRow>

              <ControlRow label="Size">
                <PillToggle<AccordionSize>
                  options={['large', 'medium', 'small']}
                  value={size}
                  onChange={setSize}
                />
              </ControlRow>

              <ControlRow label="With Icon">
                <Toggle checked={showChevron} onChange={setShowChevron} />
              </ControlRow>

              <ControlRow label="With Leading Icon">
                <Toggle checked={showLeadingIcon} onChange={setShowLeadingIcon} />
              </ControlRow>

              <ControlRow label="Dividers">
                <Toggle checked={dividers} onChange={setDividers} />
              </ControlRow>

              <ControlRow label="Default Open">
                <PillToggle<string>
                  options={['None', 'Item 1', 'Item 2', 'Item 3']}
                  value={defaultOpenLabel}
                  onChange={(label) => setDefaultOpen(defaultOpenMap[label] ?? null)}
                />
              </ControlRow>

              <ControlRow label="Disabled Item">
                <Toggle checked={disabledItem} onChange={setDisabledItem} />
              </ControlRow>
            </div>
          </div>

          {/* Preview panel */}
          <div
            className="flex flex-col rounded-xl border overflow-hidden md:flex-1"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{
                borderColor: 'hsl(var(--semantic-color-border-default))',
                backgroundColor: 'hsl(var(--semantic-color-surface-subtle))',
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}>
                Preview
              </span>
              <div className="flex items-center gap-2">
                <Eye className="size-3.5" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }} />
                <Code2 className="size-3.5" style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }} />
              </div>
            </div>

            {/* Live preview */}
            <div
              className="flex-1 flex items-start justify-center p-8"
              style={{ backgroundColor: 'hsl(var(--semantic-color-surface-default))' }}
            >
              <div style={{ width: '100%', maxWidth: 480 }}>
                <Accordion
                  key={`${type}-${defaultOpen}`}
                  type={type}
                  variant={variant}
                  size={size}
                  showChevron={showChevron}
                  showLeadingIcon={showLeadingIcon}
                  dividers={dividers}
                  defaultOpen={defaultOpen}
                  items={liveItems}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Usage tab ── */}
      {tab === 'usage' && (
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-4">
            <UsageSection title="When to use">
              <UsageItem>Progressive disclosure of secondary content to reduce page length.</UsageItem>
              <UsageItem>FAQs, settings panels, nested navigation.</UsageItem>
              <UsageItem>When users need to compare multiple sections without scrolling.</UsageItem>
            </UsageSection>

            <UsageSection title="When not to use">
              <UsageItem isNot>For primary content users should always see.</UsageItem>
              <UsageItem isNot>When all items need to be visible simultaneously — use a list instead.</UsageItem>
              <UsageItem isNot>Deeply nested accordions (more than 2 levels).</UsageItem>
            </UsageSection>
          </div>

          <div
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
          >
            <div
              className="grid grid-cols-2 divide-x"
              style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
            >
              <DoCell isGood label="DO">
                Keep trigger labels short and scannable.
              </DoCell>
              <DoCell isGood={false} label="DON'T">
                Nest accordions more than one level deep.
              </DoCell>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// ─── Usage helpers ────────────────────────────────────────────────────────────

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold" style={{ color: 'hsl(var(--semantic-color-text-primary))' }}>
        {title}
      </h3>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </div>
  );
}

function UsageItem({ children, isNot = false }: { children: React.ReactNode; isNot?: boolean }) {
  return (
    <li className="flex items-start gap-2 text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
      <span
        className="mt-0.5 shrink-0 text-xs font-bold"
        style={{ color: isNot ? '#ef4444' : '#22c55e' }}
      >
        {isNot ? '✕' : '✓'}
      </span>
      {children}
    </li>
  );
}

function DoCell({ label, isGood, children }: { label: string; isGood: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 p-5">
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: isGood ? '#22c55e' : '#ef4444' }}
      >
        {label}
      </span>
      <p className="text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
        {children}
      </p>
    </div>
  );
}
