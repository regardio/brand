import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin, XastElement } from 'svgo';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ColorMap {
  [key: string]: string;
}

// Load color mappings
const colorMapRgbToTailwind = JSON.parse(
  readFileSync(join(__dirname, './data/svg-color-mapping-rgb-tailwind.json'), 'utf8'),
) as ColorMap;

let colorMapCmykToTailwind: ColorMap = {};
try {
  colorMapCmykToTailwind = JSON.parse(
    readFileSync(join(__dirname, './data/svg-color-mapping-cmyk-tailwind.json'), 'utf8'),
  ) as ColorMap;
} catch {
  console.warn('CMYK color mapping file not found, using empty mapping');
}

const colorMap: ColorMap = {
  ...colorMapRgbToTailwind,
  ...colorMapCmykToTailwind,
};

function addTailwindClass(node: XastElement, newClass: string): void {
  const currentClass = node.attributes.class || '';
  const classes = new Set(currentClass.split(' ').filter(Boolean));
  classes.add(newClass);
  node.attributes.class = Array.from(classes).join(' ');
}

function convertColorToTailwindClass(color: string, prefix: string): string | null {
  if (!color || color === 'none' || color === 'transparent') {
    return null;
  }

  if (color.toLowerCase() === '#252323') {
    return 'currentColor';
  }

  const normalizedColor = color.toLowerCase();
  const colorName = colorMap[normalizedColor];
  return colorName ? `${prefix}-${colorName}` : null;
}

export const tailwindFillsAndStrokesPlugin: Plugin<void> = () => {
  return {
    element: {
      enter: (node: XastElement) => {
        const fill = node.attributes.fill;
        if (fill) {
          const fillClass = convertColorToTailwindClass(fill, 'fill');
          if (fillClass) {
            if (fillClass === 'currentColor') {
              node.attributes.fill = 'currentColor';
            } else {
              delete node.attributes.fill;
              addTailwindClass(node, fillClass);
            }
          }
        }

        const stroke = node.attributes.stroke;
        if (stroke) {
          const strokeClass = convertColorToTailwindClass(stroke, 'stroke');
          if (strokeClass) {
            if (strokeClass === 'currentColor') {
              node.attributes.stroke = 'currentColor';
            } else {
              delete node.attributes.stroke;
              addTailwindClass(node, strokeClass);
            }
          }
        }
      },
    },
  };
};
