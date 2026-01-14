const {
  tailwindFillsAndStrokesPlugin,
} = require('./scripts/svgo-plugin-tailwind-fills-and-strokes.cjs');

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
          removeUselessDefs: false,
        },
      },
    },
    {
      fn: tailwindFillsAndStrokesPlugin,
      name: 'tailwindFillsAndStrokes',
    },
  ],
};
