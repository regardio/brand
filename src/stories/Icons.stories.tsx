import type { Meta, StoryObj } from '@storybook/react-vite';
import RegardioCompassIcon from '../generated/icons/regardio-compass-icon';
import RegardioEnsembleIconColor from '../generated/icons/regardio-ensemble-icon-color';
import RegardioEnsembleIconColorFull from '../generated/icons/regardio-ensemble-icon-color-full';
import RegardioEnsembleIconMono from '../generated/icons/regardio-ensemble-icon-mono';
import RegardioIconColor from '../generated/icons/regardio-icon-color';
import RegardioIconColorFull from '../generated/icons/regardio-icon-color-full';
import RegardioIconMono from '../generated/icons/regardio-icon-mono';

const IconGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gap: '24px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      padding: '24px',
    }}
  >
    {children}
  </div>
);

const IconCard = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <div
    style={{
      alignItems: 'center',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '16px',
    }}
  >
    <div style={{ fontSize: '64px', lineHeight: 1 }}>{children}</div>
    <span style={{ color: '#666', fontSize: '12px', textAlign: 'center' }}>{name}</span>
  </div>
);

const meta: Meta = {
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Brand/Icons',
};

export default meta;

export const RegardioIcons: StoryObj = {
  render: () => (
    <IconGrid>
      <IconCard name="RegardioIconColor">
        <RegardioIconColor />
      </IconCard>
      <IconCard name="RegardioIconColorFull">
        <RegardioIconColorFull />
      </IconCard>
      <IconCard name="RegardioIconMono">
        <RegardioIconMono />
      </IconCard>
    </IconGrid>
  ),
};

export const EnsembleIcons: StoryObj = {
  render: () => (
    <IconGrid>
      <IconCard name="EnsembleIconColor">
        <RegardioEnsembleIconColor />
      </IconCard>
      <IconCard name="EnsembleIconColorFull">
        <RegardioEnsembleIconColorFull />
      </IconCard>
      <IconCard name="EnsembleIconMono">
        <RegardioEnsembleIconMono />
      </IconCard>
    </IconGrid>
  ),
};

export const CompassIcon: StoryObj = {
  render: () => (
    <IconGrid>
      <IconCard name="CompassIcon">
        <RegardioCompassIcon />
      </IconCard>
    </IconGrid>
  ),
};

export const AllIcons: StoryObj = {
  render: () => (
    <IconGrid>
      <IconCard name="RegardioIconColor">
        <RegardioIconColor />
      </IconCard>
      <IconCard name="RegardioIconColorFull">
        <RegardioIconColorFull />
      </IconCard>
      <IconCard name="RegardioIconMono">
        <RegardioIconMono />
      </IconCard>
      <IconCard name="EnsembleIconColor">
        <RegardioEnsembleIconColor />
      </IconCard>
      <IconCard name="EnsembleIconColorFull">
        <RegardioEnsembleIconColorFull />
      </IconCard>
      <IconCard name="EnsembleIconMono">
        <RegardioEnsembleIconMono />
      </IconCard>
      <IconCard name="CompassIcon">
        <RegardioCompassIcon />
      </IconCard>
    </IconGrid>
  ),
};
