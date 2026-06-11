# Accordion — Component Cache
**Built:** 2026-06-10
**Figma source:** https://www.figma.com/design/AkDPcl3IKljXQK8Cf0lKlJ/Sample-Design-System--For-WorkShop-?node-id=32040-16563&m=dev
**Workflow:** A — Unorganised → Full Build (FRAME of 5 collapsed `_Accordion Item` instances)

## Variant Properties
| Property | Values |
|---|---|
| icon | present / absent (`icon?: ReactNode`) |
| badge | present / absent (`badge?: string`) |
| subheading | present / absent (`subheading?: string`) |
| open/closed | controlled by Radix (`type="single"\|"multiple"`, `collapsible`) |
| disabled | `disabled?: boolean` on AccordionItem |

## Component API
- `<Accordion>` — wraps Radix Root, adds `flex flex-col gap-3`
- `<AccordionItem>` — heading + optional subheading / icon / badge / body content

## Tailwind Tokens Applied
| Element | Class |
|---|---|
| Head background | `bg-semantic-color-surface-default` |
| Head hover | `hover:bg-semantic-color-surface-subtle` |
| Icon container | `bg-semantic-color-surface-subtle` |
| Badge background | `bg-semantic-color-surface-light` |
| Heading text | `text-semantic-color-text-primary` |
| Subheading + chevron | `text-semantic-color-text-secondary` |
| Badge text | `text-semantic-color-text-primary` |
| Focus ring | `focus-visible:ring-ring` (→ `--ring` alias → `semantic-color-border-extra-bold`) |

## Token Police Audit
- ✅ 8/8 colour classes use correct semantic token
- 🔧 No violations found

## Files Written
- `src/components/Accordion/Accordion.tsx`
- `src/components/Accordion/index.ts`
- `src/components/Accordion/Accordion.story.tsx`

## Notes
- Uses `@radix-ui/react-accordion` for accessible expand/collapse with keyboard nav
- Accordion open/close animation uses `--radix-accordion-content-height` CSS var — keyframes added to `tailwind.config.js`
- Font family is Figtree (`base/font/family/Primary`) — add Google Fonts link to `index.html` if not already loaded
- Badge truncates at `max-w-[240px]` matching Figma spec
- The Figma only shows collapsed state; open state uses `data-[state=open]` Radix attribute for chevron rotation
- Story pattern established: each component has a `ComponentName.story.tsx` with a default export — App.tsx auto-discovers it
