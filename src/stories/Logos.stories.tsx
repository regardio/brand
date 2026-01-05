import type { Meta, StoryObj } from '@storybook/react-vite';
import RegardioLogoColor from '../generated/icons/RegardioLogoColor';
import RegardioLogoColorLight from '../generated/icons/RegardioLogoColorLight';
import RegardioLogoMono from '../generated/icons/RegardioLogoMono';
import RegardioLogoMonoLight from '../generated/icons/RegardioLogoMonoLight';

const LogoContainer = ({
  children,
  background,
}: {
  children: React.ReactNode;
  background?: string;
}) => (
  <div
    style={{
      alignItems: 'center',
      background: background || 'transparent',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '32px',
    }}
  >
    {children}
  </div>
);

const LogoGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gap: '24px',
      gridTemplateColumns: 'repeat(2, 1fr)',
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
  title: 'Brand/Logos',
};

export default meta;

export const ColorLogos: StoryObj = {
  render: () => (
    <LogoGrid>
      <LogoContainer background="#ffffff">
        <RegardioLogoColor style={{ height: 'auto', width: 200 }} />
        <span style={{ color: '#666', fontSize: '12px' }}>
          RegardioLogoColor (light background)
        </span>
      </LogoContainer>
      <LogoContainer background="#0f3b50">
        <RegardioLogoColorLight style={{ height: 'auto', width: 200 }} />
        <span style={{ color: '#ccc', fontSize: '12px' }}>
          RegardioLogoColorLight (dark background)
        </span>
      </LogoContainer>
    </LogoGrid>
  ),
};

export const MonoLogos: StoryObj = {
  render: () => (
    <LogoGrid>
      <LogoContainer background="#ffffff">
        <RegardioLogoMono style={{ height: 'auto', width: 200 }} />
        <span style={{ color: '#666', fontSize: '12px' }}>RegardioLogoMono (light background)</span>
      </LogoContainer>
      <LogoContainer background="#0f3b50">
        <RegardioLogoMonoLight style={{ height: 'auto', width: 200 }} />
        <span style={{ color: '#ccc', fontSize: '12px' }}>
          RegardioLogoMonoLight (dark background)
        </span>
      </LogoContainer>
    </LogoGrid>
  ),
};

export const AllLogos: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <LogoGrid>
        <LogoContainer background="#ffffff">
          <RegardioLogoColor style={{ height: 'auto', width: 200 }} />
          <span style={{ color: '#666', fontSize: '12px' }}>RegardioLogoColor</span>
        </LogoContainer>
        <LogoContainer background="#0f3b50">
          <RegardioLogoColorLight style={{ height: 'auto', width: 200 }} />
          <span style={{ color: '#ccc', fontSize: '12px' }}>RegardioLogoColorLight</span>
        </LogoContainer>
        <LogoContainer background="#ffffff">
          <RegardioLogoMono style={{ height: 'auto', width: 200 }} />
          <span style={{ color: '#666', fontSize: '12px' }}>RegardioLogoMono</span>
        </LogoContainer>
        <LogoContainer background="#0f3b50">
          <RegardioLogoMonoLight style={{ height: 'auto', width: 200 }} />
          <span style={{ color: '#ccc', fontSize: '12px' }}>RegardioLogoMonoLight</span>
        </LogoContainer>
      </LogoGrid>
    </div>
  ),
};
