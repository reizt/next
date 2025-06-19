import js from '@eslint/js';
import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import { localPlugin } from './eslint-local.js';

export default [
  {
    ignores: ['**/tmp/**', '**/.next/**', '**/storybook-static/**'],
  },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    plugins: {
      tailwindcss,
      local: localPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'local/no-restricted-import': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: [],
        },
      ],
    },
  },
];
