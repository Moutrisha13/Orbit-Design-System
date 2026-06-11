import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

// ─── Variant map ──────────────────────────────────────────────────────────────
// Audited by Token Police — all colour classes reference semantic tokens
const triggerVariants = cva(
  [
    'flex w-full items-center gap-4 p-4 text-left transition-colors',
    'bg-semantic-color-surface-default',
    'hover:bg-semantic-color-surface-subtle',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ]
);

const iconContainerVariants = cva(
  'flex shrink-0 items-center justify-center rounded-full size-8 p-1 bg-semantic-color-surface-subtle'
);

const badgeVariants = cva(
  'inline-flex h-6 min-w-8 max-w-[240px] items-center justify-center rounded-full px-2 py-1 bg-semantic-color-surface-light'
);

// ─── Types ────────────────────────────────────────────────────────────────────
export interface AccordionItemProps
  extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  heading: string;
  subheading?: string;
  icon?: ReactNode;
  badge?: string;
  children?: ReactNode;
}

export type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

// ─── Sub-components ───────────────────────────────────────────────────────────
export function AccordionItem({
  heading,
  subheading,
  icon,
  badge,
  children,
  className,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn('w-full overflow-hidden rounded-lg', className)}
      {...props}
    >
      <AccordionPrimitive.Header asChild>
        <AccordionPrimitive.Trigger className={cn(triggerVariants())}>
          {icon && (
            <span className={cn(iconContainerVariants())}>
              {icon}
            </span>
          )}

          <div className="flex flex-1 min-w-0 flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="text-[17px] font-medium leading-6 tracking-[0px] truncate text-semantic-color-text-primary">
                {heading}
              </span>
              {badge && (
                <span className={cn(badgeVariants())}>
                  <span className="text-[12px] font-medium leading-4 tracking-[0.1px] truncate text-semantic-color-text-primary">
                    {badge}
                  </span>
                </span>
              )}
            </div>
            {subheading && (
              <span className="text-[15px] font-normal leading-5 tracking-[0px] truncate text-semantic-color-text-secondary">
                {subheading}
              </span>
            )}
          </div>

          <ChevronDown
            className="size-4 shrink-0 text-semantic-color-text-secondary transition-transform duration-200 [[data-state=open]_&]:rotate-180"
            aria-hidden
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <div className="bg-semantic-color-surface-default px-4 pb-4 text-[15px] leading-5 text-semantic-color-text-secondary">
          {children}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  );
}
