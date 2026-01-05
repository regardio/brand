import type { Meta, StoryObj } from '@storybook/react-vite';

const ColorSwatch = ({ name, cssVar }: { name: string; cssVar: string }) => (
  <div
    style={{
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        background: `var(${cssVar})`,
        height: '80px',
      }}
    />
    <div style={{ padding: '12px' }}>
      <div style={{ fontSize: '14px', fontWeight: 600 }}>{name}</div>
      <div style={{ color: '#666', fontFamily: 'monospace', fontSize: '12px' }}>{cssVar}</div>
    </div>
  </div>
);

const ColorGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      padding: '24px',
    }}
  >
    {children}
  </div>
);

const meta: Meta = {
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Brand/Colors',
};

export default meta;

export const PrimaryColors: StoryObj = {
  render: () => (
    <ColorGrid>
      <ColorSwatch
        cssVar="--color-primary"
        name="Primary"
      />
      <ColorSwatch
        cssVar="--color-primary-light"
        name="Primary Light"
      />
      <ColorSwatch
        cssVar="--color-primary-dark"
        name="Primary Dark"
      />
    </ColorGrid>
  ),
};

export const SecondaryColors: StoryObj = {
  render: () => (
    <ColorGrid>
      <ColorSwatch
        cssVar="--color-secondary"
        name="Secondary"
      />
      <ColorSwatch
        cssVar="--color-secondary-light"
        name="Secondary Light"
      />
      <ColorSwatch
        cssVar="--color-secondary-dark"
        name="Secondary Dark"
      />
    </ColorGrid>
  ),
};

export const NeutralColors: StoryObj = {
  render: () => (
    <ColorGrid>
      <ColorSwatch
        cssVar="--color-white"
        name="White"
      />
      <ColorSwatch
        cssVar="--color-gray-100"
        name="Gray 100"
      />
      <ColorSwatch
        cssVar="--color-gray-200"
        name="Gray 200"
      />
      <ColorSwatch
        cssVar="--color-gray-300"
        name="Gray 300"
      />
      <ColorSwatch
        cssVar="--color-gray-400"
        name="Gray 400"
      />
      <ColorSwatch
        cssVar="--color-gray-500"
        name="Gray 500"
      />
      <ColorSwatch
        cssVar="--color-gray-600"
        name="Gray 600"
      />
      <ColorSwatch
        cssVar="--color-gray-700"
        name="Gray 700"
      />
      <ColorSwatch
        cssVar="--color-gray-800"
        name="Gray 800"
      />
      <ColorSwatch
        cssVar="--color-gray-900"
        name="Gray 900"
      />
      <ColorSwatch
        cssVar="--color-black"
        name="Black"
      />
    </ColorGrid>
  ),
};
