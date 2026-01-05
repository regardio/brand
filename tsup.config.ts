import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/generated/icons/*.tsx', 'src/generated/sprites/*.tsx'],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  format: ['esm'],
  minify: false,
  outDir: 'dist/generated',
  sourcemap: false,
  splitting: false,
  treeshake: true,
});
