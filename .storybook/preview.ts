import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

// eslint-disable-next-line local/no-restricted-import
import '../src/app/globals.css';
import './storybook.css';

export default {
	decorators: [
		withThemeByDataAttribute({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
			attributeName: 'data-mode',
		}),
	],
	parameters: {
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		nextjs: {
			appDirectory: true,
		},
	},
} as Preview;
