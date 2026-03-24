import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CompassSprite,
  type CompassSpriteId,
  compassSpriteIds,
} from '../generated/sprites/compass-sprite';
import { CompassSpriteProvider } from '../generated/sprites/compass-sprite-provider';

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

export const SourceLeisure: StoryObj = {
  render: () => (
    <SpriteGrid>
      {compassSpriteIds
        .filter((id) => id.startsWith('source-leisure-'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const SourceDrive: StoryObj = {
  render: () => (
    <SpriteGrid>
      {compassSpriteIds
        .filter((id) => id.startsWith('source-drive-'))
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
      {compassSpriteIds
        .filter((id) => id.startsWith('facet-element-'))
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
      {compassSpriteIds
        .filter((id) => id.startsWith('facet-step-'))
        .map((id) => (
          <SpriteCard
            id={id}
            key={id}
          />
        ))}
    </SpriteGrid>
  ),
};

export const BridgeViews: StoryObj = {
  render: () => (
    <SpriteGrid>
      {compassSpriteIds
        .filter((id) => id.startsWith('bridge-view-'))
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
      {compassSpriteIds.map((id) => (
        <SpriteCard
          id={id}
          key={id}
        />
      ))}
    </SpriteGrid>
  ),
};
