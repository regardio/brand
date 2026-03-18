# Regardio Styling Architecture

This document describes the harmonized styling architecture across all Regardio packages.

## Package Responsibilities

### `@regardio/brand` - Design System (Design Decisions)

**Purpose**: Owns all Regardio brand design decisions and branded components

**Contains**:

- OKLCH color scales (all brand colors)
- Semantic design tokens (colors, breakpoints, containers)
- Fluid typography system (Georama Variable font)
- Base styles (borders, focus, selection, line-heights)
- Grid layout system (container and grid utilities)
- Surface effects and shadows
- Dark mode definitions
- Branded components (Button, etc.) with Regardio visual identity

**Exports**:

```css
@import "@regardio/brand/styles";                /* Complete design system */
@import "@regardio/brand/styles/colors.css";     /* OKLCH colors only */
@import "@regardio/brand/styles/tokens.css";     /* Design tokens */
@import "@regardio/brand/styles/typography.css"; /* Typography system */
@import "@regardio/brand/styles/base.css";       /* Base styles */
@import "@regardio/brand/styles/grid.css";       /* Grid layout system */
```

```tsx
import { Button } from '@regardio/brand/button';  /* Branded button component */
```

**Branded Components**:
Components that represent Regardio's visual identity (flat blue, no border, ample padding, Georama bold font). These should be used consistently across all Regardio applications.

**Dependencies**:

- `@fontsource-variable/georama` - Brand typography
- `@regardio/react` - Base component primitives
- `@regardio/tailwind` - Utility functions

### `@regardio/tailwind` - Utilities (No Design Decisions)

**Purpose**: Reusable tools and utilities for Tailwind CSS projects

**Contains**:

- Tailwind CSS core
- Standard Tailwind plugins (`@tailwindcss/typography`, `fluid-tailwindcss`, `tw-animate-css`)
- CSS reset
- Animation utilities
- Utility functions (`tv`, `cn`, `twMerge`)

**Does NOT contain**:

- Colors
- Fonts
- Breakpoints
- Semantic tokens
- Base styles (borders, focus, selection)
- Grid layout system

**Exports**:

```css
@import "@regardio/tailwind/styles";              /* All utilities */
@import "@regardio/tailwind/styles/plugins.css";  /* Tailwind core + plugins */
@import "@regardio/tailwind/styles/reset.css";    /* CSS reset */
@import "@regardio/tailwind/styles/animations.css"; /* Animations */
```

```ts
import { tv, cn, twMerge } from '@regardio/tailwind/utils';
```

**Dependencies**:

- `@tailwindcss/typography` - Typography plugin
- `tailwind-variants` - Component variant system
- `fluid-tailwindcss` - Fluid spacing utilities
- `tailwind-merge` - Class merging
- `tw-animate-css` - Animation utilities

### `@regardio/react` - Component Library

**Purpose**: Reusable React components

**Styling approach**:

- Uses `tailwind-variants` (`tv()`) for all component styling
- Imports base utilities from `@regardio/tailwind`
- No custom CSS classes in components

**Example**:

```tsx
import { tv } from '@regardio/tailwind/utils';

const button = tv({
  base: ['inline-flex', 'items-center', 'justify-center'],
  variants: {
    variant: {
      primary: ['bg-primary', 'text-primary-foreground', 'hover:bg-primary-hover'],
      secondary: ['bg-secondary', 'text-secondary-foreground', 'hover:bg-secondary-hover'],
    },
  },
});
```

### Applications (e.g., `ensemble/instrument`)

**Purpose**: End-user applications

**Import order**:

1. Tailwind CSS core + plugins
2. Regardio design system (`@regardio/brand`)
3. Tailwind utilities (`@regardio/tailwind`)
4. Application-specific customizations

**Example**:

```css
/* 1. Tailwind CSS core + plugins (typography, fluid-tailwindcss, tw-animate-css) */
@import "@regardio/tailwind/styles/plugins.css";

/* 2. Regardio design system (colors, tokens, typography, base, grid) */
@import "@regardio/brand/styles";

/* 3. Tailwind utilities (reset, animations) */
@import "@regardio/tailwind/styles/reset.css";
@import "@regardio/tailwind/styles/animations.css";

/* 4. App-specific styles */
@import "./app-specific.css";
```

## Design Tokens (from `@regardio/brand`)

### Breakpoints

```css
--breakpoint-xs: 480px;
--breakpoint-sm: 768px;
--breakpoint-md: 1024px;
--breakpoint-lg: 1280px;
--breakpoint-xl: 1600px;
--breakpoint-2xl: 1920px;
```

### Container Queries

```css
--container-xs: 160px;
--container-sm: 320px;
--container-md: 512px;
--container-lg: 768px;
--container-xl: 1024px;
--container-2xl: 1280px;
--container-3xl: 1600px;
--container-4xl: 1920px;
--container-5xl: 2304px;
--container-6xl: 2560px;
```

### Semantic Colors

```css
/* Light mode (default) */
--color-foreground
--color-muted-foreground
--color-background
--color-background-muted
--color-background-subtle
--color-border
--color-border-muted
--color-ring
--color-primary
--color-primary-foreground
--color-primary-hover
--color-secondary
--color-secondary-foreground
--color-secondary-hover
--color-accent
--color-accent-foreground
--color-accent-hover
--color-muted
--color-destructive
--color-destructive-foreground
--color-destructive-hover

/* Surface effects */
--surface
--surface-strong
--surface-subtle
--inset-glint

/* Shadows */
--shadow-sm
--shadow-md
--shadow-lg
--shadow-xl
```

**Dark mode**: Add `.dark` class to root element - all tokens automatically adjust.

## Fluid Typography (from `@regardio/brand`)

Typography scales automatically between 320px and 2560px viewports.

**Font**: Georama Variable (sans-serif)

**Fluid font sizes**:

```css
--font-size-xs: clamp(0.75rem, 0.7455rem + 0.0196vw, 0.84rem);
--font-size-sm: clamp(0.875rem, 0.8696rem + 0.0234vw, 0.98rem);
--font-size-base: clamp(1rem, 0.9937rem + 0.0272vw, 1.125rem);
--font-size-lg: clamp(1.125rem, 1.1179rem + 0.0308vw, 1.266rem);
--font-size-xl: clamp(1.25rem, 1.242rem + 0.0348vw, 1.406rem);
--font-size-2xl: clamp(1.5rem, 1.4902rem + 0.0424vw, 1.688rem);
--font-size-3xl: clamp(1.875rem, 1.8627rem + 0.0533vw, 2.109rem);
--font-size-4xl: clamp(2.25rem, 2.2353rem + 0.0641vw, 2.531rem);
--font-size-5xl: clamp(3rem, 2.9804rem + 0.0848vw, 3.375rem);
/* ... up to 9xl */
```

**Root font size** (makes all rem values fluid):

```css
html {
  font-size: clamp(16px, 14.429px + 0.4911vw, 27px);
}
```

## Fluid Spacing with `fluid-tailwindcss`

Use the `fl-` prefix for fluid spacing utilities:

```tsx
{/* Fluid padding from 1rem to 2rem */}
<div className="fl-p-4/8">

{/* Fluid gap from 0.5rem to 1rem */}
<div className="flex flex-col fl-gap-2/4">

{/* Fluid margin from 4rem to 6rem */}
<section className="fl-my-16/24">
```

## Component Styling with `tailwind-variants`

All components use `tv()` from `@regardio/tailwind/utils`:

```tsx
import { tv } from '@regardio/tailwind/utils';

const card = tv({
  base: ['rounded-lg', 'border', 'p-4'],
  variants: {
    variant: {
      default: ['bg-background', 'border-border'],
      elevated: ['bg-background-muted', 'shadow-lg'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const Card = ({ variant, className, ...props }) => (
  <div className={card({ variant, className })} {...props} />
);
```

## Best Practices

### ✅ Use Semantic Tokens

```tsx
<div className="bg-background text-foreground border-border">
```

### ✅ Use tailwind-variants for Components

```tsx
const button = tv({
  base: 'rounded-lg',
  variants: { variant: { primary: 'bg-primary' } },
});
```

### ✅ Use Fluid Spacing

```tsx
<section className="fl-py-16/24 fl-px-4/8">
```

### ❌ Avoid Hardcoded Colors

```tsx
<div className="bg-gray-50 text-gray-950">
```

### ❌ Avoid Inline className Strings

```tsx
<div className="rounded-lg border bg-background border-border">
```

## Package Dependencies

**For applications using Regardio design system**:

```json
{
  "dependencies": {
    "@regardio/brand": "workspace:*",
    "@regardio/tailwind": "workspace:*",
    "@regardio/react": "workspace:*",
    "tailwindcss": "^4.2.0"
  }
}
```

**Notes**:

- `tailwindcss` is required as a peer dependency
- `@tailwindcss/typography`, `fluid-tailwindcss`, and `tw-animate-css` are bundled in `@regardio/tailwind`
- Use `workspace:*` for monorepo development, published versions for external projects

## Summary

- **`@regardio/brand`** = Design decisions (colors, fonts, tokens, typography)
- **`@regardio/tailwind`** = Utilities only (reset, grid, animations, tools)
- **`@regardio/react`** = Components using `tv()` from tailwind-variants
- **Applications** = Import brand design + tailwind utilities + app customizations
