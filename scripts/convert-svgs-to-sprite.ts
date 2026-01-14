import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { optimize } from 'svgo';
import { tailwindFillsAndStrokesPlugin } from './svgo-plugin-tailwind-fills-and-strokes';

interface GeneratorOptions {
  inputDir: string;
  outputPath: string;
}

const svgRegex = /\.svg$/;

async function convertSvgsToSprite({
  inputDir,
  outputPath,
}: GeneratorOptions): Promise<string[] | undefined> {
  // Recursively find all SVG files
  async function findSvgFiles(dir: string, baseDir: string = dir): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await findSvgFiles(fullPath, baseDir)));
      } else if (entry.isFile() && entry.name.endsWith('.svg')) {
        // Get relative path from base directory using path.relative
        const relativePath = relative(baseDir, fullPath);
        files.push(relativePath);
      }
    }

    return files;
  }

  const files = await findSvgFiles(inputDir);

  if (files.length === 0) {
    console.log(`No SVG files found in ${inputDir}`);
    return;
  }

  const spriteNames = files.map((file) => file.replace(svgRegex, ''));

  // Generate sprite file (always overwrite)
  const symbols = await Promise.all(
    files.map(async (file) => {
      const input = await readFile(join(inputDir, file), 'utf-8');

      const optimized = optimize(input, {
        plugins: [
          'preset-default',
          {
            fn: tailwindFillsAndStrokesPlugin,
            name: 'tailwindFillsAndStrokes',
          },
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

  await writeFile(outputPath, spriteContent, 'utf-8');

  console.log(`Generated ${files.length} sprites in ${outputPath}`);
  return spriteNames;
}

// Run generator if called directly (ES module check)
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);

if (isMainModule) {
  const [, , inputDir, outputPath] = process.argv;

  if (!inputDir || !outputPath) {
    console.error('Usage: node convert-svgs-to-sprite.ts <inputDir> <outputPath>');
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
