# Token Structure — 3-Tier Hierarchy

## Tier 1: Primitive tokens
Raw values — colours, radii, spacing. Never used directly in components.
Defined in `tokens.json` under `"primitive"`.

## Tier 2: Semantic tokens
Meaningful roles mapped from primitives (e.g. `primary`, `destructive`, `muted`).
These are the CSS variables declared in `src/index.css` and extended in `tailwind.config.js`.
**Components always use semantic tokens.**

## Tier 3: Component tokens (optional)
Per-component overrides when a semantic token isn't specific enough.
Add under `tailwind.config.js → theme.extend.colors` with a component prefix (e.g. `btn-primary`).

---

## Semantic token → Tailwind class mapping

| Role              | Background          | Text / Foreground            | Border           |
|-------------------|---------------------|------------------------------|------------------|
| Page background   | `bg-background`     | `text-foreground`            | `border-border`  |
| Primary action    | `bg-primary`        | `text-primary-foreground`    | —                |
| Secondary action  | `bg-secondary`      | `text-secondary-foreground`  | —                |
| Muted / subtle    | `bg-muted`          | `text-muted-foreground`      | —                |
| Hover / accent    | `bg-accent`         | `text-accent-foreground`     | —                |
| Destructive       | `bg-destructive`    | `text-destructive-foreground`| —                |
| Card surface      | `bg-card`           | `text-card-foreground`       | —                |
| Popover surface   | `bg-popover`        | `text-popover-foreground`    | —                |
| Form input        | —                   | —                            | `border-input`   |
| Focus ring        | —                   | —                            | `ring-ring`      |
