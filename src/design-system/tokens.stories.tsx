import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Regardio Brand/Design System/Tokens',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Shadows: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Elevation Shadows</h2>

      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="h-32 rounded-lg bg-background-muted shadow-sm flex items-center justify-center">
            shadow-sm
          </div>
        </div>
        <div>
          <div className="h-32 rounded-lg bg-background-muted shadow-md flex items-center justify-center">
            shadow-md
          </div>
        </div>
        <div>
          <div className="h-32 rounded-lg bg-background-muted shadow-lg flex items-center justify-center">
            shadow-lg
          </div>
        </div>
        <div>
          <div className="h-32 rounded-lg bg-background-muted shadow-xl flex items-center justify-center">
            shadow-xl
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Surfaces: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Surface Effects (Glass)</h2>

      <div
        className="relative h-64 rounded-lg overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <div className="absolute inset-0 p-8 space-y-4">
          <div
            className="p-6 rounded-lg"
            style={{ background: 'var(--surface-subtle)' }}
          >
            <div className="font-semibold">surface-subtle</div>
            <div className="text-sm">Subtle glass effect</div>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{ background: 'var(--surface)' }}
          >
            <div className="font-semibold">surface</div>
            <div className="text-sm">Default glass effect</div>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{ background: 'var(--surface-strong)' }}
          >
            <div className="font-semibold">surface-strong</div>
            <div className="text-sm">Strong glass effect</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Breakpoints: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Breakpoints</h2>

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">xs</div>
          <div className="text-muted-foreground">480px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">sm</div>
          <div className="text-muted-foreground">768px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">md</div>
          <div className="text-muted-foreground">1024px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">lg</div>
          <div className="text-muted-foreground">1280px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">xl</div>
          <div className="text-muted-foreground">1600px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">2xl</div>
          <div className="text-muted-foreground">1920px</div>
        </div>
      </div>
    </div>
  ),
};

export const Containers: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Container Queries</h2>

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">xs</div>
          <div className="text-muted-foreground">160px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">sm</div>
          <div className="text-muted-foreground">320px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">md</div>
          <div className="text-muted-foreground">512px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">lg</div>
          <div className="text-muted-foreground">768px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">xl</div>
          <div className="text-muted-foreground">1024px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">2xl</div>
          <div className="text-muted-foreground">1280px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">3xl</div>
          <div className="text-muted-foreground">1600px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">4xl</div>
          <div className="text-muted-foreground">1920px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">5xl</div>
          <div className="text-muted-foreground">2304px</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 font-semibold">6xl</div>
          <div className="text-muted-foreground">2560px</div>
        </div>
      </div>
    </div>
  ),
};
