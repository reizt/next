import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const valuesToString = <T extends Record<string, number>>(values: T): Record<string, string> => {
	const result: Record<string, string> = {} as Record<string, string>;
	for (const key in values) {
		result[key] = String(values[key]);
	}
	return result;
};

const toMap = <K extends string | number, V>(keys: K[], toValue: (key: K) => V): Record<K, V> => {
	const map: Record<K, V> = {} as Record<K, V>;
	for (const key of keys) {
		map[key] = toValue(key);
	}
	return map;
};

const to30 = '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30';
const to50 = '32 34 36 38 40 42 44 46 48 50';
const to100 = '52 56 60 64 68 72 76 80 84 88 92 96 100';
const to200 = '110 120 130 140 150 160 170 180 190 200';
const over200 = '220 240 260 280 300 320 360 390 420 450 480 560 640 720 800 1000 1200';

const remMap = (...values: string[]) => {
	return toMap(
		values.flatMap((v) => v.split(' ')),
		(value) => `${Number(value) / 10}rem`,
	);
};

const config: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		fontSize: remMap(to30, to50),
		lineHeight: remMap(to30, to50, to100),
		spacing: remMap(to30, to50, to100, to200, over200),
		borderRadius: { ...remMap(to30, to50), full: '100%' },
		letterSpacing: toMap([50], (av) => `${av / 1000}em`),
		borderWidth: remMap('1 2 3 4'),
		colors: {
			foreground: 'rgba(var(--c-foreground) / <alpha-value>)',
			background: 'rgba(var(--c-background) / <alpha-value>)',
			gray: toMap(['f3', 'ee', 'd1', 'cc', 'aa', '99', '77', '55'], (c) => `rgba(var(--c-gray-${c}) / <alpha-value>)`),
			transparent: 'transparent',
			primary: '#dff000',
			white: '#ffffff',
			black: '#000000',
			red: '#ff0000',
			blue: '#0a84ff',
			green: '#00db00',
		},
		content: {
			empty: '""',
		},
		transitionDuration: {
			mouse: '150ms',
		},
		zIndex: valuesToString({
			'-1': -1,
			0: 0,
			1: 1,
			floating: 10,
			tooltip: 15,
			dialog: 20,
		}),
		extend: {
			opacity: {
				hover: '0.6',
			},
			keyframes: {
				'loading-blink': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' },
				},
				'loading-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'loading-blink': 'loading-blink 1s infinite',
				'loading-spin': 'loading-spin 1s infinite ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'v-apart': (value) => ({
						display: 'flex',
						flexDirection: 'column',
						rowGap: value,
					}),
					'h-apart': (value) => ({
						display: 'flex',
						flexDirection: 'row',
						columnGap: value,
					}),
				},
				{ values: theme('spacing') },
			);
		}),
	],
};

export default config;
