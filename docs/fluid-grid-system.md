# Fluid Grid System

Regardio's fluid grid system combines CSS Grid, container queries, and fluid typography/spacing scales to create responsive layouts that adapt smoothly across all viewport sizes.

## Architecture

The grid system has three layers:

1. **Base grid structure** (`@regardio/brand/styles/grid.css`) - Provides `.u-grid`, `.u-container`, and layout utilities
2. **React components** (`@regardio/react/Grid`) - Type-safe grid components with responsive props
3. **Application customization** - Override grid tokens for project-specific needs

## Quick Start

### Basic Grid

```tsx
import { Grid } from '@regardio/react';

<Grid.Root>
  <Grid.Item span={12} spanMd={6} spanLg={4}>
    Column 1
  </Grid.Item>
  <Grid.Item span={12} spanMd={6} spanLg={4}>
    Column 2
  </Grid.Item>
  <Grid.Item span={12} spanMd={6} spanLg={4}>
    Column 3
  </Grid.Item>
</Grid.Root>
```

### With Container

```tsx
<div className="u-container">
  <Grid.Root flow="dense">
    <Grid.Item span={12} spanLg={8}>Main content</Grid.Item>
    <Grid.Item span={12} spanLg={4}>Sidebar</Grid.Item>
  </Grid.Root>
</div>
```

## Utopia Configuration

Generate fluid scales at [utopia.fyi/grid/calculator](https://utopia.fyi/grid/calculator):

```css
/* Fluid typography */
:root {
  --step-0: clamp(1rem, 0.9107rem + 0.4464vw, 1.625rem);
  --step-1: clamp(1.2rem, 1.0813rem + 0.5938vw, 2.0313rem);
  /* ... more type scales */
}

/* Fluid spacing */
:root {
  --space-s: clamp(1rem, 0.9107rem + 0.4464vw, 1.625rem);
  --space-m: clamp(1.5rem, 1.3661rem + 0.6696vw, 2.4375rem);
  --space-2xs-2xl: clamp(0.5rem, -0.3571rem + 4.2857vw, 6.5rem);
  /* ... more space scales */
}

/* Fluid grid - gutter scales with viewport */
:root {
  --spacing-grid-max: 162.5rem;
  --spacing-grid-gutter: var(--space-2xs-2xl); /* Fluid gutter */
}
```

## CSS Utilities

### Container

```html
<div class="u-container">
  <!-- Content with max-width and fluid padding -->
</div>
```

### Fluid Spacing with Tailwind

Use `fluid-tailwindcss` utilities for responsive spacing:

**Stack (vertical flex):**

```html
<div class="flex flex-col fl-gap-xs/s">Fluid gap from xs to s</div>
<div class="flex flex-col fl-gap-s/m">Fluid gap from s to m</div>
<div class="flex flex-col fl-gap-m/l">Fluid gap from m to l</div>
```

**Cluster (horizontal flex with wrapping):**

```html
<div class="flex flex-wrap fl-gap-2xs/xs">Fluid gap from 2xs to xs</div>
<div class="flex flex-wrap fl-gap-xs/s">Fluid gap from xs to s</div>
<div class="flex flex-wrap fl-gap-s/m">Fluid gap from s to m</div>
```

**Section spacing:**

```html
<section class="fl-py-m/l">Fluid vertical padding from m to l</section>
<section class="fl-py-l/xl">Fluid vertical padding from l to xl</section>
<section class="fl-py-xl/2xl">Fluid vertical padding from xl to 2xl</section>
```

## React Grid Component

### Grid.Root Props

```tsx
interface GridRootProps {
  flow?: 'column' | 'dense' | 'row';  // Default: 'dense'
  align?: 'center' | 'end' | 'start' | 'stretch';
  className?: string;
  classNames?: { root?: string };
}
```

### Grid.Item Props

```tsx
interface GridItemProps {
  // Column span (1-12 or 'full')
  span?: number | 'full';
  spanXs?: number | 'full';  // Container query breakpoint
  spanSm?: number | 'full';
  spanMd?: number | 'full';
  spanLg?: number | 'full';
  spanXl?: number | 'full';

  // Row span
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';

  // Column positioning
  start?: 1-13 | 'auto';
  end?: 1-13 | 'auto';

  className?: string;
  classNames?: { root?: string };
}
```

### Container Query Breakpoints

Grid items use **container queries** (not viewport queries) for responsive behavior:

```tsx
<Grid.Item
  span={12}      // Mobile: full width
  spanSm={6}     // @sm (320px): half width
  spanMd={4}     // @md (512px): third width
  spanLg={3}     // @lg (768px): quarter width
/>
```

Breakpoints (defined in `@regardio/brand/src/styles/tokens.css`):

- `@xs`: 160px
- `@sm`: 320px
- `@md`: 512px
- `@lg`: 768px
- `@xl`: 1024px

## Customization

Applications can override the default grid tokens:

```css
:root {
  /* Custom max-width */
  --spacing-grid-max: 2560px;

  /* Fluid gutter using Utopia space scale */
  --spacing-grid-gutter: var(--space-m-l);
}
```

For complete Utopia integration, define all three scales (type, space, grid) using the [Utopia calculators](https://utopia.fyi).

## Dense Grid Packing

The default `flow="dense"` enables automatic grid packing:

```tsx
<Grid.Root flow="dense">
  <Grid.Item span={8}>Large item</Grid.Item>
  <Grid.Item span={4}>Small item fills gap</Grid.Item>
  <Grid.Item span={6}>Medium item</Grid.Item>
</Grid.Root>
```

This creates a masonry-like layout where smaller items fill gaps left by larger ones.

## Perfect Square Cells

When `--spacing-grid-gutter` is fluid and equals column width at certain viewports, cells become perfect squares automatically:

```tsx
<Grid.Root flow="dense">
  <Grid.Item span={6} spanMd={4} spanLg={3}>
    {/* Automatically square when gutter = column width */}
    <div className="aspect-square">Content</div>
  </Grid.Item>
</Grid.Root>
```

**How it works:**

1. Grid has 12 columns with fluid gutter (e.g., `var(--space-2xs-2xl)`)
2. At certain viewports, gutter width = column width
3. Same gutter value used for row gaps
4. Result: Perfect squares without calculations

**Dense packing:**
The default `flow="dense"` fills gaps automatically, creating masonry-like layouts where smaller items fill spaces left by larger ones.

## Examples

### Responsive Card Grid

```tsx
<div className="u-container">
  <Grid.Root flow="dense">
    {cards.map(card => (
      <Grid.Item
        key={card.id}
        span={12}
        spanSm={6}
        spanMd={4}
        spanLg={3}
      >
        <Card {...card} />
      </Grid.Item>
    ))}
  </Grid.Root>
</div>
```

### Hero + Sidebar Layout

```tsx
<Grid.Root>
  <Grid.Item span={12} spanLg={8}>
    <article className="u-stack-lg">
      <h1>Article Title</h1>
      <p>Content...</p>
    </article>
  </Grid.Item>

  <Grid.Item span={12} spanLg={4}>
    <aside className="u-stack-md">
      <h2>Related</h2>
      <ul>...</ul>
    </aside>
  </Grid.Item>
</Grid.Root>
```

### Fluid Section Spacing

```tsx
<section className="u-container fl-py-16/24">
  <div className="u-stack-lg">
    <h2>Section Title</h2>
    <Grid.Root>
      {/* Grid content */}
    </Grid.Root>
  </div>
</section>
```

## Best Practices

1. **Use container queries** - Grid items respond to container width, not viewport
2. **Use fluid-tailwindcss** - Prefer `fl-gap-*`, `fl-py-*` over fixed spacing
3. **Apply --step-0 to body** - Set base font size on body/container, not html
4. **Link type, space, and grid** - Generate all three scales together at utopia.fyi
5. **Test responsiveness** - Container queries behave differently than media queries

## Typography Setup

Apply fluid typography to body or main container (not html):

```css
body {
  font-size: var(--step-0);
}

/* Or on main container */
#app {
  font-size: var(--step-0);
}
```

Then use Tailwind text utilities with step tokens:

```tsx
<h1 className="text-[length:var(--step-4)]">Heading</h1>
<h2 className="text-[length:var(--step-3)]">Subheading</h2>
<p className="text-[length:var(--step-0)]">Body text</p>
<small className="text-[length:var(--step--1)]">Small text</small>
```

## References

- [Utopia Fluid Type Calculator](https://utopia.fyi/type/calculator)
- [Utopia Fluid Space Calculator](https://utopia.fyi/space/calculator)
- [Utopia Grid Calculator](https://utopia.fyi/grid/calculator)
- [CSS Container Queries (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [fluid-tailwindcss Plugin](https://github.com/nguyenviet02/fluid-tailwindcss)

## Migration from Old Patterns

**Before (custom utilities):**

```html
<div class="u-stack-md">
  <div class="u-cluster-sm">...</div>
</div>
```

**After (fluid-tailwindcss):**

```html
<div class="flex flex-col fl-gap-s/m">
  <div class="flex flex-wrap fl-gap-xs/s">...</div>
</div>
```
