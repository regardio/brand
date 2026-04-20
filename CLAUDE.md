---

title: "@regardio/brand — Claude Context"
type: guide
status: published
summary: Entry point for Claude when working on Regardio brand assets and design system
locale: en-US
---

# @regardio/brand — Claude Context

## What This Is

Regardio's brand assets and design-system primitives: logos, icons, colors, typography, grid systems. SVG assets are processed through SVGO and SVGR for React consumption.

## Authority

This package is the **source of truth** for anything visual that represents Regardio. When a channel or the instrument app needs a logo, colour token, spacing unit, or grid rule, it must come from here — not be redefined.

Design system documentation lives in [`docs/`](./docs):

- [fluid-grid-system.md](./docs/fluid-grid-system.md)
- [grid-system.md](./docs/grid-system.md)
- [styling-architecture.md](./docs/styling-architecture.md)

## Downstream Consumers

- [`../tailwind`](../tailwind) — consumes brand tokens for Tailwind utilities
- `ensemble/instrument` and `channels/*` — consume brand assets via `@regardio/brand`

## Standards

Universal standards apply: [`../dev/CLAUDE.md`](../dev/CLAUDE.md). Writing voice for any visible copy in this package: [`../dev/docs/en/standards/writing.md`](../dev/docs/en/standards/writing.md).

Changes to exported assets or tokens are visible across every Regardio surface — treat them as brand-level decisions, not package-local ones.
