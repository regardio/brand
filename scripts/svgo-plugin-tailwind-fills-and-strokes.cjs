const fs = require('node:fs');
const path = require('node:path');

// Load color mappings
const colorMapRgbToTailwind = JSON.parse(
  fs.readFileSync(path.join(__dirname, './data/svg-color-mapping-rgb-tailwind.json'), 'utf8'),
);

let colorMapCmykToTailwind = {};
try {
  colorMapCmykToTailwind = JSON.parse(
    fs.readFileSync(path.join(__dirname, './data/svg-color-mapping-cmyk-tailwind.json'), 'utf8'),
  );
} catch {
  // CMYK mapping file doesn't exist yet, use empty object
  console.warn('CMYK color mapping file not found, using empty mapping');
}

const colorMap = {
  ...colorMapRgbToTailwind,
  ...colorMapCmykToTailwind,
};

function addTailwindClass(node, newClass) {
  const currentClass = node.attributes.class || '';
  const classes = new Set(currentClass.split(' ').filter(Boolean));
  classes.add(newClass);
  node.attributes.class = Array.from(classes).join(' ');
}

function convertColorToTailwindClass(color, prefix) {
  if (!color || color === 'none' || color === 'transparent') {
    return null;
  }

  // Special case: convert #252323 to currentColor for mono icons
  if (color.toLowerCase() === '#252323') {
    return 'currentColor';
  }

  const normalizedColor = color.toLowerCase();
  const colorName = colorMap[normalizedColor];
  return colorName ? `${prefix}-${colorName}` : null;
}

const tailwindFillsAndStrokesPlugin = {
  active: true,
  fn: () => {
    return {
      element: {
        enter: (node) => {
          // Handle fill attribute
          const fill = node.attributes?.fill;
          if (fill) {
            const fillClass = convertColorToTailwindClass(fill, 'fill');
            if (fillClass) {
              if (fillClass === 'currentColor') {
                // Set fill attribute directly to currentColor
                node.attributes.fill = 'currentColor';
              } else {
                // Use Tailwind class
                delete node.attributes.fill;
                addTailwindClass(node, fillClass);
              }
            }
          }

          // Handle stroke attribute
          const stroke = node.attributes?.stroke;
          if (stroke) {
            const strokeClass = convertColorToTailwindClass(stroke, 'stroke');
            if (strokeClass) {
              if (strokeClass === 'currentColor') {
                // Set stroke attribute directly to currentColor
                node.attributes.stroke = 'currentColor';
              } else {
                // Use Tailwind class
                delete node.attributes.stroke;
                addTailwindClass(node, strokeClass);
              }
            }
          }
        },
      },
    };
  },
  name: 'tailwindFillsAndStrokes',
  type: 'visitor',
};

module.exports = { tailwindFillsAndStrokesPlugin };
