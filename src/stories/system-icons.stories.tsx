import type { Meta, StoryObj } from '@storybook/react-vite';
import RegardioSystemBridgesIcon from '../generated/icons/regardio-system-bridges-icon';
import RegardioSystemCirclesIcon from '../generated/icons/regardio-system-circles-icon';
import RegardioSystemFacetsIcon from '../generated/icons/regardio-system-facets-icon';
import RegardioSystemIcon from '../generated/icons/regardio-system-icon';
import RegardioSystemNeedsIcon from '../generated/icons/regardio-system-needs-icon';
import RegardioSystemPlansIcon from '../generated/icons/regardio-system-plans-icon';
import RegardioSystemPursuitsIcon from '../generated/icons/regardio-system-pursuits-icon';

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
  title: 'Brand/System Icons',
};

export default meta;

export const AllSystemIcons: StoryObj = {
  render: () => (
    <IconGrid>
      <IconCard name="SystemIcon">
        <RegardioSystemIcon />
      </IconCard>
      <IconCard name="NeedsIcon">
        <RegardioSystemNeedsIcon />
      </IconCard>
      <IconCard name="PursuitsIcon">
        <RegardioSystemPursuitsIcon />
      </IconCard>
      <IconCard name="CirclesIcon">
        <RegardioSystemCirclesIcon />
      </IconCard>
      <IconCard name="FacetsIcon">
        <RegardioSystemFacetsIcon />
      </IconCard>
      <IconCard name="PlansIcon">
        <RegardioSystemPlansIcon />
      </IconCard>
      <IconCard name="BridgesIcon">
        <RegardioSystemBridgesIcon />
      </IconCard>
    </IconGrid>
  ),
};

export const SystemIconSizes: StoryObj = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h3 style={{ marginBottom: '16px' }}>System Icon at different sizes</h3>
      <div style={{ alignItems: 'center', display: 'flex', gap: '24px' }}>
        <RegardioSystemIcon style={{ fontSize: '24px' }} />
        <RegardioSystemIcon style={{ fontSize: '32px' }} />
        <RegardioSystemIcon style={{ fontSize: '48px' }} />
        <RegardioSystemIcon style={{ fontSize: '64px' }} />
        <RegardioSystemIcon style={{ fontSize: '96px' }} />
      </div>
    </div>
  ),
};
