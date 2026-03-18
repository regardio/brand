# Grid System

Regardio's standard container and grid layout system.

## Overview

The grid system provides a 12-column responsive layout with container utilities. It uses CSS custom properties defined in `tokens.css` for consistent spacing across applications.

## Utilities

### `.u-container`

Max-width container with horizontal padding and centered alignment.

```tsx
<div className="u-container">
  <h1>Centered content with max-width</h1>
</div>
```

**Properties:**

- `max-width: var(--spacing-grid-max)` - Maximum container width (1200px)
- `padding-inline: var(--spacing-grid-gutter)` - Horizontal padding (1.5rem)
- `margin-inline: auto` - Centered alignment

### `.u-grid`

12-column CSS Grid with container queries for responsive layouts.

```tsx
<div className="u-grid">
  <div className="u-grid-half">Column 1</div>
  <div className="u-grid-half">Column 2</div>
</div>
```

**Properties:**

- 12 equal columns
- Gap between items: `var(--spacing-grid-gutter)`
- Container queries enabled for nested responsive behavior

### Grid Item Utilities

- **`.u-grid-full`** - Spans all 12 columns (full width)
- **`.u-grid-half`** - Spans 6 columns (half width)
- **`.u-grid-third`** - Spans 4 columns (third width)
- **`.u-grid-quarter`** - Spans 3 columns (quarter width)

## Configuration

Grid dimensions are defined in `tokens.css`:

```css
:root {
  --spacing-grid-max: 1200px;
  --spacing-grid-gutter: 1.5rem;
}
```

Override these values in your application for custom grid dimensions.

## Examples

### Basic Layout

```tsx
<div className="u-container">
  <div className="u-grid">
    <div className="u-grid-full">
      <header>Full-width header</header>
    </div>
    <div className="u-grid-half">
      <main>Main content</main>
    </div>
    <div className="u-grid-half">
      <aside>Sidebar</aside>
    </div>
  </div>
</div>
```

### Three-Column Layout

```tsx
<div className="u-grid">
  <div className="u-grid-third">Column 1</div>
  <div className="u-grid-third">Column 2</div>
  <div className="u-grid-third">Column 3</div>
</div>
```

### Mixed Column Widths

```tsx
<div className="u-grid">
  <div className="u-grid-quarter">Sidebar</div>
  <div className="u-grid-half">Main content</div>
  <div className="u-grid-quarter">Aside</div>
</div>
```

## Responsive Behavior

The grid system uses container queries, allowing nested grids to respond to their container's width rather than the viewport. This enables more flexible, component-based responsive design.

```tsx
<div className="u-container">
  <div className="u-grid">
    <div className="u-grid-half">
      {/* This nested grid responds to its parent's width */}
      <div className="u-grid">
        <div className="u-grid-half">Nested 1</div>
        <div className="u-grid-half">Nested 2</div>
      </div>
    </div>
  </div>
</div>
```
