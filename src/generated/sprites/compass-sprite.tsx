import type React from 'react';
import type { SVGProps } from 'react';

export type CompassSpriteId =
  | 'bridges.stances.contradicts'
  | 'bridges.stances.enables'
  | 'bridges.stances.extends'
  | 'bridges.stances.fulfills'
  | 'bridges.stances.matches'
  | 'bridges.stances.supports'
  | 'facets.elements.assets'
  | 'facets.elements.means'
  | 'facets.elements.people'
  | 'facets.elements.spaces'
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
  | 'needs.drive.flexibility'
  | 'needs.drive.orientation'
  | 'needs.drive.pathways'
  | 'needs.drive.possibilities'
  | 'needs.drive.strength'
  | 'needs.drive.structure'
  | 'needs.leisure.breeze'
  | 'needs.leisure.calm'
  | 'needs.leisure.contemplation'
  | 'needs.leisure.distance'
  | 'needs.leisure.indulgence'
  | 'needs.leisure.inspiration'
  | 'needs.leisure.movement'
  | 'needs.leisure.nearness'
  | 'needs.leisure.nourishment'
  | 'needs.leisure.refreshment'
  | 'needs.leisure.relaxation'
  | 'needs.leisure.relief'
  | 'pursuits.prospects.flourishing'
  | 'pursuits.prospects.pointer'
  | 'regard.bridges.stances'
  | 'regard.facets.elements'
  | 'regard.facets.steps'
  | 'regard.needs.drive'
  | 'regard.needs.leisure';

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
