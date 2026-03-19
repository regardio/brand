import type React from 'react';
import type { SVGProps } from 'react';

export type CompassSpriteId =
  | 'bridge.stance.contradicts'
  | 'bridge.stance.enables'
  | 'bridge.stance.extends'
  | 'bridge.stance.fulfills'
  | 'bridge.stance.matches'
  | 'bridge.stance.supports'
  | 'facet.element.assets'
  | 'facet.element.means'
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
  | 'layer.bridges.stances'
  | 'layer.facets.elements'
  | 'layer.facets.steps'
  | 'layer.needs.drive'
  | 'layer.needs.leisure'
  | 'need.drive.flexibility'
  | 'need.drive.orientation'
  | 'need.drive.pathways'
  | 'need.drive.possibilities'
  | 'need.drive.strength'
  | 'need.drive.structure'
  | 'need.leisure.breeze'
  | 'need.leisure.calm'
  | 'need.leisure.contemplation'
  | 'need.leisure.distance'
  | 'need.leisure.indulgence'
  | 'need.leisure.inspiration'
  | 'need.leisure.movement'
  | 'need.leisure.nearness'
  | 'need.leisure.nourishment'
  | 'need.leisure.refreshment'
  | 'need.leisure.relaxation'
  | 'need.leisure.relief'
  | 'pursuit.prospect.flourishing'
  | 'pursuit.prospect.pointer';

export const compassSpriteIds: CompassSpriteId[] = [
  'bridge.stance.contradicts',
  'bridge.stance.enables',
  'bridge.stance.extends',
  'bridge.stance.fulfills',
  'bridge.stance.matches',
  'bridge.stance.supports',
  'facet.element.assets',
  'facet.element.means',
  'facet.element.people',
  'facet.element.spaces',
  'facet.element.things',
  'facet.element.times',
  'facet.step.accord.bottom',
  'facet.step.accord.top',
  'facet.step.action.bottom',
  'facet.step.action.top',
  'facet.step.effect.bottom',
  'facet.step.effect.top',
  'facet.step.essence.bottom',
  'facet.step.essence.top',
  'facet.step.impulse.bottom',
  'facet.step.impulse.top',
  'facet.step.signal.bottom',
  'facet.step.signal.top',
  'layer.bridges.stances',
  'layer.facets.elements',
  'layer.facets.steps',
  'layer.needs.drive',
  'layer.needs.leisure',
  'need.drive.flexibility',
  'need.drive.orientation',
  'need.drive.pathways',
  'need.drive.possibilities',
  'need.drive.strength',
  'need.drive.structure',
  'need.leisure.breeze',
  'need.leisure.calm',
  'need.leisure.contemplation',
  'need.leisure.distance',
  'need.leisure.indulgence',
  'need.leisure.inspiration',
  'need.leisure.movement',
  'need.leisure.nearness',
  'need.leisure.nourishment',
  'need.leisure.refreshment',
  'need.leisure.relaxation',
  'need.leisure.relief',
  'pursuit.prospect.flourishing',
  'pursuit.prospect.pointer',
];

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
 * <CompassSprite id="need.drive.possibilities" size={24} />
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
