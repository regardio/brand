import type { Meta, StoryObj } from '@storybook/react-vite';
import { CompassSprite, type CompassSpriteId } from '../generated/sprites/compass-sprite';
import { CompassSpriteProvider } from '../generated/sprites/compass-sprite-provider';

const spriteIds: CompassSpriteId[] = [
  'spark.leisure.breeze',
  'spark.leisure.calm',
  'spark.leisure.contemplation',
  'spark.leisure.distance',
  'spark.leisure.indulgence',
  'spark.leisure.inspiration',
  'spark.leisure.movement',
  'spark.leisure.nearness',
  'spark.leisure.nourishment',
  'spark.leisure.refreshment',
  'spark.leisure.relaxation',
  'spark.leisure.relief',
  'spark.motivator.flexibility',
  'spark.motivator.orientation',
  'spark.motivator.pathways',
  'spark.motivator.possibilities',
  'spark.motivator.strength',
  'spark.motivator.structure',
  'sparks.leisure',
  'sparks.motivators',
  'facet.element.means',
  'facet.element.notions',
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
  'facets.elements',
  'facets.steps',
  'bridge.perspective.contradicts',
  'bridge.perspective.enables',
  'bridge.perspective.extends',
  'bridge.perspective.fulfills',
  'bridge.perspective.matches',
  'bridge.perspective.supports',
  'bridges.perspectives',
  'prospect.pointer',
  'pursuits.flourishing',
];

const SpriteGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      padding: '24px',
    }}
  >
    {children}
  </div>
);

const SpriteCard = ({ id, size = 80 }: { id: CompassSpriteId; size?: number }) => (
  <div
    style={{
      alignItems: 'center',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      padding: '12px',
    }}
  >
    <CompassSprite
      height={size}
      id={id}
      width={size}
    />
    <span
      style={{
        color: '#666',
        fontSize: '10px',
        textAlign: 'center',
        wordBreak: 'break-word',
      }}
    >
      {id}
    </span>
  </div>
);

const meta: Meta = {
  decorators: [
    (Story: React.ComponentType) => (
      <>
        <CompassSpriteProvider />
        <Story />
      </>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Brand/Compass Sprites',
};

export default meta;

export const LeisureSparks: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('spark.leisure.'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const MotivatorSparks: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('spark.motivator.'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const FacetElements: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('facet.element.'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const FacetSteps: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('facet.step.'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const BridgePerspectives: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('bridge.perspective.'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const AllSprites: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds.map((id) => (
        <SpriteCard
          id={id}
          key={id}
        />
      ))}
    </SpriteGrid>
  ),
};
