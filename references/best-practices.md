# Design System — Best Practices

## HTML semantics

| Use case             | Element                        |
|----------------------|--------------------------------|
| Clickable action     | `<button>`                     |
| Navigation / link    | `<a href="...">`               |
| Text input           | `<input type="text">`          |
| Display container    | `<div>` or `<section>`         |
| Icon-only button     | `<button aria-label="...">`    |

## Component file structure

Every component lives in its own folder:
```
src/components/{ComponentName}/
  {ComponentName}.tsx   ← component + CVA variants
  index.ts              ← re-exports only
```

No `.module.css` files. Tailwind utility classes only.

## CVA pattern

```tsx
const componentVariants = cva(
  // Base: layout + interaction — never colour
  ['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors',
   'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
   'disabled:pointer-events-none disabled:opacity-50'],
  {
    variants: { variant: { ... }, size: { ... } },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);
```

## Required patterns on every interactive component

**Focus ring** (exact):
```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```

**Disabled state** (exact):
```
disabled:pointer-events-none disabled:opacity-50
```

## Naming conventions

- Component names: PascalCase (`Button`, `InputField`, `CardHeader`)
- Prop names: camelCase
- Variant keys: lowercase (`primary`, `ghost`, `sm`, `lg`)
- Files: match component name exactly

## Imports

```ts
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
```

## Token rules (enforced by Token Police)

- ✅ Only shadcn semantic tokens for colour (`bg-primary`, `text-foreground`, etc.)
- ❌ No raw hex arbitrary values in shipped components (`bg-[#3B82F6]`)
- ❌ No Tailwind palette classes (`bg-blue-500`, `text-gray-900`)
- ✅ Standard Tailwind scale for spacing/sizing (`p-4`, `h-10`, `gap-2`) — always fine
- ✅ Opacity modifiers on semantic tokens (`hover:bg-primary/90`) — always fine

## Hover pattern

```
hover:bg-primary/90        ← primary button hover
hover:bg-secondary/80      ← secondary button hover
hover:bg-destructive/90    ← destructive button hover
hover:bg-accent            ← ghost / subtle hover
```
