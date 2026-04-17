import type { Meta, StoryObj } from '@storybook/react-vite';

const ColorSwatch = ({ name, shades }: { name: string; shades: number[] }) => (
  <div className="mb-8">
    <h3 className="text-lg font-bold mb-2 capitalize">{name}</h3>
    <div className="grid grid-cols-11 gap-2">
      {shades.map((shade) => (
        <div
          className="text-center"
          key={shade}
        >
          <div
            className={'h-16 rounded border border-gray-200'}
            style={{ backgroundColor: `var(--color-${name}-${shade})` }}
          />
          <div className="text-xs mt-1">{shade}</div>
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Regardio Brand/Design System/Colors',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorPalette: Story = {
  render: () => {
    const colors = [
      'coral',
      'orange',
      'yellow',
      'olive',
      'lime',
      'green',
      'teal',
      'aqua',
      'blue',
      'violet',
      'plum',
      'red',
      'gray',
    ];
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Regardio OKLCH Color Palette</h2>
        {colors.map((color) => (
          <ColorSwatch
            key={color}
            name={color}
            shades={shades}
          />
        ))}
      </div>
    );
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Semantic Color Tokens</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-32 font-semibold">Primary</div>
          <div className="h-12 w-32 rounded bg-primary" />
          <div className="h-12 w-32 rounded bg-primary-hover" />
          <div className="text-sm text-muted-foreground">Flat blue, Regardio brand color</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 font-semibold">Secondary</div>
          <div className="h-12 w-32 rounded bg-secondary" />
          <div className="h-12 w-32 rounded bg-secondary-hover" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 font-semibold">Accent</div>
          <div className="h-12 w-32 rounded bg-accent" />
          <div className="h-12 w-32 rounded bg-accent-hover" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 font-semibold">Destructive</div>
          <div className="h-12 w-32 rounded bg-destructive" />
          <div className="h-12 w-32 rounded bg-destructive-hover" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 font-semibold">Background</div>
          <div className="h-12 w-32 rounded bg-background border border-border" />
          <div className="h-12 w-32 rounded bg-background-muted border border-border" />
          <div className="h-12 w-32 rounded bg-background-subtle border border-border" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 font-semibold">Foreground</div>
          <div className="h-12 w-32 rounded bg-foreground" />
          <div className="h-12 w-32 rounded bg-muted-foreground" />
        </div>
      </div>
    </div>
  ),
};
