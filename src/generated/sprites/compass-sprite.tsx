import type React from 'react';
import type { SVGProps } from 'react';

export type CompassSpriteId =
  | 'bridge-view-contradicts'
  | 'bridge-view-enables'
  | 'bridge-view-extends'
  | 'bridge-view-fulfills'
  | 'bridge-view-matches'
  | 'bridge-view-supports'
  | 'bridges-views'
  | 'facet-element-means'
  | 'facet-element-memories'
  | 'facet-element-people'
  | 'facet-element-spaces'
  | 'facet-element-things'
  | 'facet-element-times'
  | 'facet-step-accord-bottom'
  | 'facet-step-accord-top'
  | 'facet-step-action-bottom'
  | 'facet-step-action-top'
  | 'facet-step-effect-bottom'
  | 'facet-step-effect-top'
  | 'facet-step-essence-bottom'
  | 'facet-step-essence-top'
  | 'facet-step-impulse-bottom'
  | 'facet-step-impulse-top'
  | 'facet-step-signal-bottom'
  | 'facet-step-signal-top'
  | 'facets-elements'
  | 'facets-steps'
  | 'pursuit-foundation-flourishing'
  | 'pursuit-foundation-pointer'
  | 'source-drive-flexibility'
  | 'source-drive-orientation'
  | 'source-drive-pathways'
  | 'source-drive-possibilities'
  | 'source-drive-strength'
  | 'source-drive-structure'
  | 'source-leisure-breeze'
  | 'source-leisure-calm'
  | 'source-leisure-contemplation'
  | 'source-leisure-distance'
  | 'source-leisure-indulgence'
  | 'source-leisure-inspiration'
  | 'source-leisure-movement'
  | 'source-leisure-nearness'
  | 'source-leisure-nourishment'
  | 'source-leisure-refreshment'
  | 'source-leisure-relaxation'
  | 'source-leisure-relief'
  | 'sources-drive'
  | 'sources-leisure';

export const compassSpriteIds: CompassSpriteId[] = [
  'bridge-view-contradicts',
  'bridge-view-enables',
  'bridge-view-extends',
  'bridge-view-fulfills',
  'bridge-view-matches',
  'bridge-view-supports',
  'bridges-views',
  'facet-element-means',
  'facet-element-memories',
  'facet-element-people',
  'facet-element-spaces',
  'facet-element-things',
  'facet-element-times',
  'facet-step-accord-bottom',
  'facet-step-accord-top',
  'facet-step-action-bottom',
  'facet-step-action-top',
  'facet-step-effect-bottom',
  'facet-step-effect-top',
  'facet-step-essence-bottom',
  'facet-step-essence-top',
  'facet-step-impulse-bottom',
  'facet-step-impulse-top',
  'facet-step-signal-bottom',
  'facet-step-signal-top',
  'facets-elements',
  'facets-steps',
  'pursuit-foundation-flourishing',
  'pursuit-foundation-pointer',
  'source-drive-flexibility',
  'source-drive-orientation',
  'source-drive-pathways',
  'source-drive-possibilities',
  'source-drive-strength',
  'source-drive-structure',
  'source-leisure-breeze',
  'source-leisure-calm',
  'source-leisure-contemplation',
  'source-leisure-distance',
  'source-leisure-indulgence',
  'source-leisure-inspiration',
  'source-leisure-movement',
  'source-leisure-nearness',
  'source-leisure-nourishment',
  'source-leisure-refreshment',
  'source-leisure-relaxation',
  'source-leisure-relief',
  'sources-drive',
  'sources-leisure',
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
 * <CompassSprite id="facet-step-action-bottom" className="w-8 h-8" />
 * <CompassSprite id="source-drive-possibilities" size={24} />
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
