const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};
import type React from 'react';

${variables.interfaces};

const ${variables.componentName} = (${variables.props}): React.JSX.Element => (
  ${variables.jsx}
);

${variables.exports};
`;
};

module.exports = {
  filenameCase: 'kebab',
  index: false,
  jsxRuntime: 'automatic',
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  template,
  titleProp: true,
  typescript: true,
};
