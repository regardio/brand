# Regardio Brand

> **Design system and branding for the Regardio ecosystem**

Regardio Brand provides the visual identity, design tokens, and brand guidelines
for all Regardio applications. It ensures consistent visual language and user
experience across the entire toolkit while supporting customization for
different deployment contexts.

## What is Regardio Brand?

Regardio Brand delivers comprehensive design system including:

- **Design Tokens** - Colors, typography, spacing, and visual constants
- **Brand Guidelines** - Logo usage, voice, tone, and visual identity standards
- **Asset Library** - Icons, illustrations, and branded graphics
- **Component Specifications** - Design specifications for UI components
- **Theme Variants** - Light/dark modes and accessibility considerations
- **Brand Extensions** - Guidelines for custom implementations and
white-labeling

This package serves as the foundation for visual consistency across all
Ensemble applications and enables organizations to maintain brand coherence
while using Ensemble tools.

## Getting Started

### Installation

```bash
npm install @regardio/brand
# or
bun add @regardio/brand
```

## Included Assets

The SVG assets live in `src/svg/` and are organized into:

- `icons/` — Wordmarks, product marks, and system icons for the Regardio brand
and the Regardio System
- `compass-base/` — System primitives and compositions (facets, steps, sparks,
bridges, pointers) used across product UI and documentation

Below are a few representative examples. Files are served directly from this
package and can be embedded as inline SVGs or referenced via your bundler.

### Brand Logos

<!-- markdownlint-disable MD033 -->
<p style="background:#f1eded">
  <img alt="Regardio Logo Color"
  src="./src/svg/icons/regardio-logo-color.svg" width="120" />
  <img alt="Regardio Logo Mono"
  src="./src/svg/icons/regardio-logo-mono.svg" width="120" />

</p>
<!-- markdownlint-enable MD033 -->

### Brand Icons

<!-- markdownlint-disable MD033 -->
<p style="background:#0f3b50">
  <img alt="Regardio Ensemble Icon Color"
  src="./src/svg/icons/regardio-ensemble-icon-color.svg" width="120" />
  <img alt="Regardio Ensemble Icon Mono"
  src="./src/svg/icons/regardio-ensemble-icon-mono.svg" width="120" />
  <img alt="Regardio Compass Icon"
  src="./src/svg/icons/regardio-compass-icon.svg" width="120" />
  <img alt="Regardio System Icon"
  src="./src/svg/icons/regardio-system-icon.svg" width="120" />
</p>
<!-- markdownlint-enable MD033 -->

### System Icons

<!-- markdownlint-disable MD033 -->
<p>
  <img alt="Regardio System Spark Icon"
  src="./src/svg/icons/regardio-system-spark-icon.svg" width="96" />
  <img alt="Regardio System Pursuit Icon"
  src="./src/svg/icons/regardio-system-pursuit-icon.svg" width="96" />
  <img alt="Regardio System Circle Icon"
  src="./src/svg/icons/regardio-system-circle-icon.svg" width="96" />
  <img alt="Regardio System Facet Icon"
  src="./src/svg/icons/regardio-system-facet-icon.svg" width="96" />
  <img alt="Regardio System Plan Icon"
  src="./src/svg/icons/regardio-system-plan-icon.svg" width="96" />
  <img alt="Regardio System Bridge Icon"
  src="./src/svg/icons/regardio-system-bridge-icon.svg" width="96" />
</p>
<!-- markdownlint-enable MD033 -->

### Compass Card

<!-- markdownlint-disable MD033 -->
<p>
  <img alt="Sparks: Leisure – Calm"
  src="./src/svg/compass-base/spark.leisure.calm.svg" width="105" />
  <img alt="Sparks: Motivator – Strength"
  src="./src/svg/compass-base/spark.motivator.strength.svg" width="148" />
  <img alt="Facets: Element – Spaces"
  src="./src/svg/compass-base/facet.element.spaces.svg" width="105" />
  <img alt="Facets: Step – Signal"
  src="./src/svg/compass-base/facet.step.signal.bottom.svg" width="105" />
  <img alt="Bridges: Perspective – Fulfills"
  src="./src/svg/compass-base/bridge.perspective.fulfills.svg" width="148" />
  <img alt="Prospects: Pointer"
  src="./src/svg/compass-base/prospect.pointer.svg" width="105" />
</p>
<!-- markdownlint-enable MD033 -->

## License

**Creative Commons Attribution-ShareAlike 4.0 International** (CC BY-SA 4.0):
Regardio Brand assets and guidelines are freely available for use and adaptation.

---

*Part of the [Regardio Ensemble](https://regard.io/ensemble) toolkit for
collective well-being.*
