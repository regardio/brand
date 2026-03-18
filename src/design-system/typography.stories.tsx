import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Regardio Brand/Design System/Typography',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontFamily: Story = {
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Regardio Typography</h2>

      <div>
        <h3 className="text-lg font-semibold mb-2">Georama Variable (Sans)</h3>
        <p className="text-base">The quick brown fox jumps over the lazy dog. 0123456789</p>
        <p className="text-base font-bold">
          The quick brown fox jumps over the lazy dog. 0123456789
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Monospace</h3>
        <p className="font-mono text-base">
          The quick brown fox jumps over the lazy dog. 0123456789
        </p>
      </div>
    </div>
  ),
};

export const FluidFontSizes: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Fluid Font Scale (320px - 2560px)</h2>

      <div className="space-y-2">
        <div className="text-xs">text-xs: The quick brown fox</div>
        <div className="text-sm">text-sm: The quick brown fox</div>
        <div className="text-base">text-base: The quick brown fox</div>
        <div className="text-lg">text-lg: The quick brown fox</div>
        <div className="text-xl">text-xl: The quick brown fox</div>
        <div className="text-2xl">text-2xl: The quick brown fox</div>
        <div className="text-3xl">text-3xl: The quick brown fox</div>
        <div className="text-4xl">text-4xl: The quick brown fox</div>
        <div className="text-5xl">text-5xl: The quick brown fox</div>
        <div className="text-6xl">text-6xl: The quick brown fox</div>
        <div className="text-7xl">text-7xl: The quick brown fox</div>
        <div className="text-8xl">text-8xl: The quick brown fox</div>
        <div className="text-9xl">text-9xl: The quick brown fox</div>
      </div>
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <h1>Heading 1: Regardio Design System</h1>
      <h2>Heading 2: Regardio Design System</h2>
      <h3>Heading 3: Regardio Design System</h3>
      <h4>Heading 4: Regardio Design System</h4>
      <h5>Heading 5: Regardio Design System</h5>
      <h6>Heading 6: Regardio Design System</h6>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="p-8 space-y-2">
      <h2 className="text-2xl font-bold mb-6">Font Weights</h2>

      <p className="font-normal">font-normal: The quick brown fox jumps over the lazy dog</p>
      <p className="font-medium">font-medium: The quick brown fox jumps over the lazy dog</p>
      <p className="font-semibold">font-semibold: The quick brown fox jumps over the lazy dog</p>
      <p className="font-bold">
        font-bold: The quick brown fox jumps over the lazy dog (Regardio branded)
      </p>
    </div>
  ),
};
