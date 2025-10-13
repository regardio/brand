#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SPRITE_FILE_PATH = './src/generated/sprites/compass-base.svg';
const OUTPUT_DIR = './src/generated/sprites';

interface SpriteInfo {
  id: string;
  viewBox: string;
}

function extractSpritesFromSVG(svgContent: string): SpriteInfo[] {
  const sprites: SpriteInfo[] = [];
  const seenIds = new Set<string>();

  // Use a simpler approach to parse symbols
  const symbolMatches = svgContent.matchAll(/<symbol[^>]*>/g);

  for (const symbolMatch of symbolMatches) {
    const symbolTag = symbolMatch[0];

    // Extract viewBox
    const viewBoxMatch = symbolTag.match(/viewBox="([^"]*)"/)?.[1];

    // Extract id
    const idMatch = symbolTag.match(/id="([^"]*)"/)?.[1];

    // Ensure both viewBox and id are defined and valid
    if (
      viewBoxMatch &&
      idMatch &&
      !seenIds.has(idMatch) &&
      idMatch.length > 1 &&
      idMatch.includes('.')
    ) {
      sprites.push({ id: idMatch, viewBox: viewBoxMatch });
      seenIds.add(idMatch);
    }
  }

  return sprites;
}

function generateSpriteComponent(sprites: SpriteInfo[]): string {
  const spriteIds = sprites.map((s) => `"${s.id}"`).join(' | ');

  return `import type { SVGProps } from "react";

export type CompassSpriteId = ${spriteIds};

export interface CompassSpriteProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** The sprite ID to render */
  id: CompassSpriteId;
  /** Optional size (width and height) */
  size?: number | string;
}

/**
 * Renders a sprite from the compass-base.svg sprite sheet.
 *
 * Usage:
 * \`\`\`tsx
 * <CompassSprite id="facet.step.action.bottom" className="w-8 h-8" />
 * <CompassSprite id="spark.motivator.possibilities" size={24} />
 * \`\`\`
 *
 * Note: The compass-base.svg sprite file must be available in your application.
 * For web applications, copy it to your public directory.
 */
export function CompassSprite({ id, size, width, height, ...props }: CompassSpriteProps) {
  const sizeProps = size
    ? { width: size, height: size }
    : { width, height };

  return (
    <svg
      {...sizeProps}
      {...props}
      aria-hidden="true"
      focusable="false"
    >
      <use href={\`#\${id}\`} />
    </svg>
  );
}

export default CompassSprite;
`;
}

function generateSpriteProvider(svgContent: string): string {
  // Extract the defs content (everything between <defs> and </defs>)
  const defsMatch = svgContent.match(/<defs>([\s\S]*?)<\/defs>/);
  const defsContent =
    defsMatch?.[1] ??
    svgContent
      .replace(/<\?xml[^>]*>/, '')
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>/, '') ??
    '';

  // Escape backticks and dollar signs for template literal
  const escapedContent = defsContent
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
    .replace(/class=/g, 'className=');

  return `/**
 * CompassSpriteProvider component that embeds the compass sprite definitions directly.
 * This should be included once in your application root.
 */
export function CompassSpriteProvider() {
  return (
    <svg
      aria-hidden="true"
      className="hidden"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>${escapedContent}</defs>
    </svg>
  );
}
`;
}

function main() {
  try {
    // Read the sprite file
    const svgContent = readFileSync(SPRITE_FILE_PATH, 'utf-8');

    // Extract sprite information
    const sprites = extractSpritesFromSVG(svgContent);

    if (sprites.length === 0) {
      throw new Error('No sprites found in the SVG file');
    }

    console.log(`Found ${sprites.length} sprites:`);
    sprites.forEach((sprite) => {
      console.log(`  - ${sprite.id}`);
    });

    // Generate the component file
    const componentCode = generateSpriteComponent(sprites);
    writeFileSync(join(OUTPUT_DIR, 'CompassSprite.tsx'), componentCode);

    // Generate the sprite provider file
    const providerCode = generateSpriteProvider(svgContent);
    writeFileSync(join(OUTPUT_DIR, 'CompassSpriteProvider.tsx'), providerCode);

    console.log('✅ Generated compass sprite components successfully!');
    console.log(`   - ${OUTPUT_DIR}/CompassSprite.tsx`);
    console.log(`   - ${OUTPUT_DIR}/CompassSpriteProvider.tsx`);
  } catch (error) {
    console.error('❌ Error generating compass sprite components:', error);
    process.exit(1);
  }
}

if (import.meta.main) {
  main();
}
