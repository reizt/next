import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import tailwindcss from 'eslint-plugin-tailwindcss';
import { localPlugin } from './eslint-local.js';

/** @type {import('eslint').Linter.Config} */
export default [
	{
		name: 'ts+tsx',
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			typescript,
			local: localPlugin,
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			'no-shadow': 'error',
			'local/no-restricted-import': 'error',
			'typescript/no-unnecessary-condition': 'error',
		},
	},
	{
		name: 'tsx',
		files: ['**/*.tsx'],
		plugins: {
			react,
			tailwindcss,
		},
		rules: {
			...tailwindcss.configs.recommended.rules,
			'react/self-closing-comp': 'error',
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
