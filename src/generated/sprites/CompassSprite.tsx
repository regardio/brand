import type { SVGProps } from 'react';

export type CompassSpriteId =
  | 'facet.step.impulse.bottom'
  | 'spark.motivator.possibilities'
  | 'facet.step.essence.top'
  | 'bridge.perspective.supports'
  | 'bridge.perspective.fulfills'
  | 'facet.step.action.bottom'
  | 'facet.step.action.top'
  | 'spark.leisure.relaxation'
  | 'bridge.perspective.extends'
  | 'spark.leisure.nourishment'
  | 'spark.leisure.nearness'
  | 'facet.step.effect.bottom'
  | 'facet.step.signal.bottom'
  | 'facet.element.spaces'
  | 'prospect.pointer'
  | 'spark.motivator.flexibility'
  | 'spark.leisure.movement'
  | 'facet.step.accord.bottom'
  | 'spark.motivator.pathways'
  | 'bridge.perspective.enables'
  | 'spark.motivator.strength'
  | 'facets.elements'
  | 'spark.leisure.breeze'
  | 'facet.step.accord.top'
  | 'spark.leisure.refreshment'
  | 'facet.step.impulse.top'
  | 'facet.step.essence.bottom'
  | 'spark.leisure.distance'
  | 'spark.leisure.inspiration'
  | 'spark.leisure.contemplation'
  | 'spark.motivator.structure'
  | 'spark.leisure.calm'
  | 'pursuits.flourishing'
  | 'spark.leisure.indulgence'
  | 'facet.element.times'
  | 'facet.element.people'
  | 'spark.leisure.relief'
  | 'facet.step.effect.top'
  | 'facet.step.signal.top'
  | 'bridge.perspective.matches'
  | 'facets.steps'
  | 'facet.element.means'
  | 'sparks.motivators'
  | 'bridges.perspectives'
  | 'sparks.leisure'
  | 'facet.element.notions'
  | 'bridge.perspective.contradicts'
  | 'facet.element.things'
  | 'spark.motivator.orientation';

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
export function CompassSprite({ id, size, width, height, ...props }: CompassSpriteProps) {
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
