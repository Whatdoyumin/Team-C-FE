import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import airbnbConfig from 'eslint-config-airbnb';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  airbnbConfig,
  prettierConfig,
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
