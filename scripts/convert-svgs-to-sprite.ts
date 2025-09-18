import { mkdir } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import { optimize } from 'svgo';
import { tailwindFillsAndStrokesPlugin } from './svgo-plugin-tailwind-fills-and-strokes.cjs';

interface GeneratorOptions {
  inputDir: string;
  outputPath: string;
}

const svgRegex = /\.svg$/;

async function convertSvgsToSprite({ inputDir, outputPath }: GeneratorOptions) {
  const files: string[] = [];
  for await (const file of new Bun.Glob('**/*.svg').scan({ cwd: inputDir })) {
    files.push(file);
  }

  if (files.length === 0) {
    console.log(`No SVG files found in ${inputDir}`);
    return;
  }

  const spriteNames = files.map((file) => file.replace(svgRegex, ''));

  // Generate sprite file (always overwrite)
  const symbols = await Promise.all(
    files.map(async (file) => {
      const input = await Bun.file(`${inputDir}/${file}`).text();

      // Process with SVGO using the Tailwind fills and strokes plugin
      const optimized = optimize(input, {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // Keep viewBox for proper scaling
                removeViewBox: false,
              },
            },
          },
          // Use the existing Tailwind fills and strokes plugin
          tailwindFillsAndStrokesPlugin,
        ],
      });

      const { document } = parseHTML(optimized.data);

      const svg = document.querySelector('svg');
      if (!svg) throw new Error(`No SVG element found in ${file}`);

      // Create a new symbol element
      const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
      symbol.id = file.replace(svgRegex, '');

      // Copy attributes except those we want to exclude
      const excludeAttrs = new Set(['xmlns', 'xmlns:xlink', 'version', 'width', 'height']);

      // Cast attributes to proper type and iterate
      const attributes = Array.from(svg.attributes);
      for (const attr of attributes) {
        if (!excludeAttrs.has(attr.name)) {
          symbol.setAttribute(attr.name, attr.value);
        }
      }

      // Copy the inner content by cloning child nodes
      while (svg.firstChild) {
        const child = svg.firstChild;
        svg.removeChild(child);
        symbol.appendChild(child);
      }

      return symbol.outerHTML.trim();
    }),
  );

  const spriteContent = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">',
    '<defs>',
    ...symbols,
    '</defs>',
    '</svg>',
    '',
  ].join('\n');

  await Bun.write(outputPath, spriteContent);

  console.log(`Generated ${files.length} sprites in ${outputPath}`);
  return spriteNames;
}

// Run generator if called directly
if (import.meta.main) {
  const [inputDir, outputPath] = process.argv.slice(2);

  if (!inputDir || !outputPath) {
    console.error('Usage: bun run convert-svgs-to-sprite.ts <inputDir> <outputPath>');
    process.exit(1);
  }

  // Ensure paths are absolute
  const cwd = process.cwd();
  const absoluteInputDir = inputDir.startsWith('/') ? inputDir : `${cwd}/${inputDir}`;
  const absoluteOutputPath = outputPath.startsWith('/') ? outputPath : `${cwd}/${outputPath}`;

  // Create output directory if it doesn't exist
  const outputDir = absoluteOutputPath.substring(0, absoluteOutputPath.lastIndexOf('/'));
  await mkdir(outputDir, { recursive: true }).catch(() => {});

  await convertSvgsToSprite({
    inputDir: absoluteInputDir,
    outputPath: absoluteOutputPath,
  });
}

export default convertSvgsToSprite;
