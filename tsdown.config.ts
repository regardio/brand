import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/generated/icons/*.tsx', 'src/generated/sprites/*.tsx'],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  format: 'esm',
  outDir: 'dist/generated',
  sourcemap: false,
  treeshake: true,
});
