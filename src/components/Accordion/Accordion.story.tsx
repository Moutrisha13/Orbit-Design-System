import { Heart } from 'lucide-react';
import { Accordion, AccordionItem } from './Accordion';

export default function AccordionStory() {
  return (
    <div className="flex flex-col gap-10 w-full max-w-2xl">

      {/* Default — no icon, no badge */}
      <section className="flex flex-col gap-2">
        <p className="text-xs font-medium text-semantic-color-text-tertiary uppercase tracking-widest mb-3">Default</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" heading="What is a design system?" subheading="Learn about the core principles">
            A design system is a collection of reusable components guided by clear standards that can be assembled together to build applications.
          </AccordionItem>
          <AccordionItem value="item-2" heading="How do tokens work?" subheading="Understand semantic token structure">
            Tokens are named design decisions — colours, spacing, typography — that map to specific values and can be referenced across your system.
          </AccordionItem>
          <AccordionItem value="item-3" heading="Can I customise components?" subheading="Explore theming and overrides">
            Yes. All components accept a className prop and use CVA variants, so you can extend or override styles while keeping the base semantics intact.
          </AccordionItem>
        </Accordion>
      </section>

      {/* With icon */}
      <section className="flex flex-col gap-2">
        <p className="text-xs font-medium text-semantic-color-text-tertiary uppercase tracking-widest mb-3">With icon</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" heading="Accessibility" subheading="Built on Radix UI primitives" icon={<Heart className="size-4 text-semantic-color-text-secondary" />}>
            Every component follows WAI-ARIA patterns, supports keyboard navigation, and is tested with screen readers.
          </AccordionItem>
          <AccordionItem value="item-2" heading="Theming" subheading="Light and dark mode support" icon={<Heart className="size-4 text-semantic-color-text-secondary" />}>
            Tokens are defined in both light and dark modes. Apply the <code>.dark</code> class to any ancestor to switch modes.
          </AccordionItem>
        </Accordion>
      </section>

      {/* With icon + badge */}
      <section className="flex flex-col gap-2">
        <p className="text-xs font-medium text-semantic-color-text-tertiary uppercase tracking-widest mb-3">With icon + badge</p>
        <Accordion type="multiple">
          <AccordionItem value="item-1" heading="Components" subheading="Pre-built, accessible UI blocks" icon={<Heart className="size-4 text-semantic-color-text-secondary" />} badge="New">
            Buttons, inputs, modals, accordions, and more — all built with the same token system and CVA pattern.
          </AccordionItem>
          <AccordionItem value="item-2" heading="Patterns" subheading="Composed layouts and flows" icon={<Heart className="size-4 text-semantic-color-text-secondary" />} badge="Beta">
            Higher-level compositions such as forms, data tables, and navigation sidebars built from primitive components.
          </AccordionItem>
        </Accordion>
      </section>

      {/* Disabled */}
      <section className="flex flex-col gap-2">
        <p className="text-xs font-medium text-semantic-color-text-tertiary uppercase tracking-widest mb-3">Disabled item</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" heading="Available" subheading="This item can be opened">
            Content for the available item.
          </AccordionItem>
          <AccordionItem value="item-2" heading="Disabled" subheading="This item is not interactive" disabled>
            This content cannot be reached.
          </AccordionItem>
        </Accordion>
      </section>

    </div>
  );
}
