import type { Meta, StoryObj } from '@storybook/react-vite';
import { CompassSprite, type CompassSpriteId } from '../generated/sprites/compass-sprite';
import { CompassSpriteProvider } from '../generated/sprites/compass-sprite-provider';

const spriteIds: CompassSpriteId[] = [
  'bridges.stances.contradicts',
  'bridges.stances.enables',
  'bridges.stances.extends',
  'bridges.stances.fulfills',
  'bridges.stances.matches',
  'bridges.stances.supports',
  'facets.elements.assets',
  'facets.elements.means',
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
  'needs.drive.flexibility',
  'needs.drive.orientation',
  'needs.drive.pathways',
  'needs.drive.possibilities',
  'needs.drive.strength',
  'needs.drive.structure',
  'needs.leisure.breeze',
  'needs.leisure.calm',
  'needs.leisure.contemplation',
  'needs.leisure.distance',
  'needs.leisure.indulgence',
  'needs.leisure.inspiration',
  'needs.leisure.movement',
  'needs.leisure.nearness',
  'needs.leisure.nourishment',
  'needs.leisure.refreshment',
  'needs.leisure.relaxation',
  'needs.leisure.relief',
  'pursuits.prospects.flourishing',
  'pursuits.prospects.pointer',
  'regard.bridges.stances',
  'regard.facets.elements',
  'regard.facets.steps',
  'regard.needs.drive',
  'regard.needs.leisure',
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

export const LeisureNeeds: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('needs.leisure.'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const DriveNeeds: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('needs.drive.'))
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

export const BridgeStances: StoryObj = {
  render: () => (
    <SpriteGrid>
      {spriteIds
        .filter((id) => id.startsWith('bridges.stances.'))
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
