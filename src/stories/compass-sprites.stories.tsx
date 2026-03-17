import type { Meta, StoryObj } from '@storybook/react-vite';
import { CompassSprite, type CompassSpriteId } from '../generated/sprites/compass-sprite';
import { CompassSpriteProvider } from '../generated/sprites/compass-sprite-provider';

const spriteIds: CompassSpriteId[] = [
  'zest.leisure.breeze',
  'zest.leisure.calm',
  'zest.leisure.contemplation',
  'zest.leisure.distance',
  'zest.leisure.indulgence',
  'zest.leisure.inspiration',
  'zest.leisure.movement',
  'zest.leisure.nearness',
  'zest.leisure.nourishment',
  'zest.leisure.refreshment',
  'zest.leisure.relaxation',
  'zest.leisure.relief',
  'zest.motivators.flexibility',
  'zest.motivators.orientation',
  'zest.motivators.pathways',
  'zest.motivators.possibilities',
  'zest.motivators.strength',
  'zest.motivators.structure',
  'zest.leisure',
  'zest.motivators',
  'facets.elements.means',
  'facets.elements.assets',
  'facets.elements.people',
  'facets.elements.spaces',
  'facets.elements.things',
  'facets.elements.times',
  'facets.steps.accord.bottom',
  'facets.steps.accord.top',
  'facets.steps.action.bottom',
  'facets.steps.action.top',
  'facets.steps.effect.bottom',
  'facets.steps.effect.top',
  'facets.steps.essence.bottom',
  'facets.steps.essence.top',
  'facets.steps.impulse.bottom',
  'facets.steps.impulse.top',
  'facets.steps.signal.bottom',
  'facets.steps.signal.top',
  'facets.elements',
  'facets.steps',
  'bridges.perspectives.contradicts',
  'bridges.perspectives.enables',
  'bridges.perspectives.extends',
  'bridges.perspectives.fulfills',
  'bridges.perspectives.matches',
  'bridges.perspectives.supports',
  'bridges.perspectives',
  'pursuit.prospect.flourishing',
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

export const LeisureZest: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('zest.leisure.'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const MotivatorZest: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('zest.motivators.'))
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
        .filter((id) => id.startsWith('facets.elements.'))
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
        .filter((id) => id.startsWith('facets.steps.'))
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
        .filter((id) => id.startsWith('bridges.perspectives.'))
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
