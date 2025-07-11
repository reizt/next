import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tailwindcss from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import local from './eslint-local.js';

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  globalIgnores([
    '**/node_modules',
    '**/tmp',
    '**/.next',
    '**/.turbo',
    '**/.wrangler',
    '**/.vercel',
    '**/*.js',
    '**/*.mjs',
    '**/*.cjs',
  ]),
  {
    files: ['./**/*.{ts,tsx}'],
    plugins: {
      tailwindcss,
      local,
    },
    rules: {
      'no-empty-pattern': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/no-custom-classname': ['warn', { whitelist: ['uil', 'uil-.*'] }],
      'local/no-restricted-import': 'error',
    },
  },
]);
