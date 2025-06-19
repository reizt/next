import js from '@eslint/js';
import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default [
  {
    ignores: ['**/tmp/**', '**/.next/**', '**/storybook-static/**'],
  },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    plugins: {
      tailwindcss,
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
