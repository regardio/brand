#!/usr/bin/env tsx

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ICONS_DIR = './src/generated/icons';
const SPRITES_DIR = './src/generated/sprites';

function addReturnTypeToIconFile(filePath: string): void {
  let content = readFileSync(filePath, 'utf-8');

  const constMatch = content.match(/^const (Svg\w+) = \(/m);
  if (!constMatch) return;

  content = content.replace(
    /^(const \w+ = \([^)]*\): SVGProps<SVGSVGElement> & SVGRProps\))/m,
    '$1: React.JSX.Element',
  );

  if (!content.includes("import type { SVGProps } from 'react';")) {
    content = content.replace(
      /^import type { SVGProps } from 'react';/m,
      "import type React from 'react';\nimport type { SVGProps } from 'react';",
    );
  } else {
    content = `import type React from 'react';\n${content}`;
  }

  writeFileSync(filePath, content);
}

function addReturnTypeToSpriteFiles(): void {
  const spriteFilePath = join(SPRITES_DIR, 'compass-sprite.tsx');
  let content = readFileSync(spriteFilePath, 'utf-8');

  content = content.replace(
    /^export function CompassSprite\(([^)]+)\) \{$/m,
    'export function CompassSprite($1): React.JSX.Element {',
  );

  if (!content.includes("import type React from 'react';")) {
    content = content.replace(
      /^import type { SVGProps } from 'react';/m,
      "import type React from 'react';\nimport type { SVGProps } from 'react';",
    );
  }

  writeFileSync(spriteFilePath, content);

  const providerFilePath = join(SPRITES_DIR, 'compass-sprite-provider.tsx');
  let providerContent = readFileSync(providerFilePath, 'utf-8');

  providerContent = `import type React from 'react';\n\n${providerContent}`;

  providerContent = providerContent.replace(
    /^export function CompassSpriteProvider\(\) \{$/m,
    'export function CompassSpriteProvider(): React.JSX.Element {',
  );

  writeFileSync(providerFilePath, providerContent);
}

function processDirectory(dirPath: string): void {
  const files = readdirSync(dirPath);

  for (const file of files) {
    const filePath = join(dirPath, file);
    const stat = statSync(filePath);

    if (stat.isFile() && file.endsWith('.tsx')) {
      addReturnTypeToIconFile(filePath);
    }
  }
}

function main() {
  try {
    console.log('Adding explicit return types to generated files...');

    processDirectory(ICONS_DIR);
    console.log(`✅ Processed icon files in ${ICONS_DIR}`);

    addReturnTypeToSpriteFiles();
    console.log(`✅ Processed sprite files in ${SPRITES_DIR}`);

    console.log('✅ All return types added successfully!');
  } catch (error) {
    console.error('❌ Error adding return types:', error);
    process.exit(1);
  }
}

if (import.meta.main) {
  main();
}
