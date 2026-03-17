import type React from 'react';
import type { SVGProps } from 'react';

export type CompassSpriteId =
  | 'bridges.perspectives.contradicts'
  | 'bridges.perspectives.enables'
  | 'bridges.perspectives.extends'
  | 'bridges.perspectives.fulfills'
  | 'bridges.perspectives.matches'
  | 'bridges.perspectives.supports'
  | 'bridges.perspectives'
  | 'facets.elements.assets'
  | 'facets.elements.means'
  | 'facets.elements.people'
  | 'facets.elements.spaces'
  | 'facets.elements'
  | 'facets.elements.things'
  | 'facets.elements.times'
  | 'facets.steps.accord.bottom'
  | 'facets.steps.accord.top'
  | 'facets.steps.action.bottom'
  | 'facets.steps.action.top'
  | 'facets.steps.effect.bottom'
  | 'facets.steps.effect.top'
  | 'facets.steps.essence.bottom'
  | 'facets.steps.essence.top'
  | 'facets.steps.impulse.bottom'
  | 'facets.steps.impulse.top'
  | 'facets.steps.signal.bottom'
  | 'facets.steps.signal.top'
  | 'facets.steps'
  | 'pursuit.prospect.flourishing'
  | 'zest.leisure.breeze'
  | 'zest.leisure.calm'
  | 'zest.leisure.contemplation'
  | 'zest.leisure.distance'
  | 'zest.leisure.indulgence'
  | 'zest.leisure.inspiration'
  | 'zest.leisure.movement'
  | 'zest.leisure.nearness'
  | 'zest.leisure.nourishment'
  | 'zest.leisure.refreshment'
  | 'zest.leisure.relaxation'
  | 'zest.leisure.relief'
  | 'zest.leisure'
  | 'zest.motivators.flexibility'
  | 'zest.motivators.orientation'
  | 'zest.motivators.pathways'
  | 'zest.motivators.possibilities'
  | 'zest.motivators.strength'
  | 'zest.motivators.structure'
  | 'zest.motivators';

export interface CompassSpriteProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** The sprite ID to render */
  id: CompassSpriteId;
  /** Optional size (width and height) */
  size?: number | string;
}

/**
 * Renders a sprite from the compass-base.svg sprite sheet.
 *
 * Usage:
 * ```tsx
 * <CompassSprite id="facet.step.action.bottom" className="w-8 h-8" />
 * <CompassSprite id="spark.motivator.possibilities" size={24} />
 * ```
 *
 * Note: The compass-base.svg sprite file must be available in your application.
 * For web applications, copy it to your public directory.
 */
export function CompassSprite({
  id,
  size,
  width,
  height,
  ...props
}: CompassSpriteProps): React.JSX.Element {
  const sizeProps = size ? { height: size, width: size } : { height, width };

  return (
    <svg
      {...sizeProps}
      {...props}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#${id}`} />
    </svg>
  );
}

export default CompassSprite;
