import type React from 'react';
import type { SVGProps } from 'react';

export type CompassSpriteId =
  | 'bridge.perspective.contradicts'
  | 'bridge.perspective.enables'
  | 'bridge.perspective.extends'
  | 'bridge.perspective.fulfills'
  | 'bridge.perspective.matches'
  | 'bridge.perspective.supports'
  | 'bridges.perspectives'
  | 'facet.element.means'
  | 'facet.element.notions'
  | 'facet.element.people'
  | 'facet.element.spaces'
  | 'facet.element.things'
  | 'facet.element.times'
  | 'facet.step.accord.bottom'
  | 'facet.step.accord.top'
  | 'facet.step.action.bottom'
  | 'facet.step.action.top'
  | 'facet.step.effect.bottom'
  | 'facet.step.effect.top'
  | 'facet.step.essence.bottom'
  | 'facet.step.essence.top'
  | 'facet.step.impulse.bottom'
  | 'facet.step.impulse.top'
  | 'facet.step.signal.bottom'
  | 'facet.step.signal.top'
  | 'facets.elements'
  | 'facets.steps'
  | 'prospect.pointer'
  | 'pursuits.flourishing'
  | 'spark.leisure.breeze'
  | 'spark.leisure.calm'
  | 'spark.leisure.contemplation'
  | 'spark.leisure.distance'
  | 'spark.leisure.indulgence'
  | 'spark.leisure.inspiration'
  | 'spark.leisure.movement'
  | 'spark.leisure.nearness'
  | 'spark.leisure.nourishment'
  | 'spark.leisure.refreshment'
  | 'spark.leisure.relaxation'
  | 'spark.leisure.relief'
  | 'spark.motivator.flexibility'
  | 'spark.motivator.orientation'
  | 'spark.motivator.pathways'
  | 'spark.motivator.possibilities'
  | 'spark.motivator.strength'
  | 'spark.motivator.structure'
  | 'sparks.leisure'
  | 'sparks.motivators';

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
