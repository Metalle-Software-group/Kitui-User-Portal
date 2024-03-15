import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				'commentCardTextColor': 'var(--commentCardTextColor)',
				'settingsClearBarColor': 'var(--settingsClearBarColor)',
				'settingsIconColor': 'var(--settingsIconColor)',
				'boxBorder-color': 'var(--boxBorder-color)',
				'search-iconColor': 'var(--search-iconColor)',
				'settingsClearColor': 'var(--settingsClearColor)',
				'brown-border': 'var(--brown-border)',
				'brown-text': 'var(--brown-text)',
				'mainGreen': 'var(--mainGreen)',
				'bodyText': 'var(--bodyText)',
				'bodyBg': 'var(--bodyBg)',
				'textTitle': 'var(--text-title)',
				'foundationGreen': 'var(--foundation-green)',
				'foundationGreen2': 'var(--foundation-green2)',
				'tag-color': 'var(--tag-color)',
				'main-Green': 'var(--main-Green)',
				'light-Purple': 'var(--light-Purple)',
				'login-screen-text-color': 'var(--login-screen-text-color)',
				'footer-btnColor': 'var(--footer-btnColor)',
				'inputTextColor': 'var(--inputTextColor)',
				'filter-stroke-color': 'var(--filter-stroke-color)',
				'dev-accent': 'var(--accent-color)',
				'title-text-color': 'var(--title-text-color)',
				'gray-body-text': 'var(--gray-body-text)',
				'footer-color': 'var(--footer-color)',
				'border': 'hsl(var(--border))',
				'input': 'hsl(var(--input))',
				'ring': 'hsl(var(--ring))',
				'background': 'hsl(var(--background))',
				'foreground': 'hsl(var(--foreground))',
				'primary': {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				'secondary': {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				'destructive': {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				'muted': {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				'accent': {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				'popover': {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				'card': {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			boxShadow: {
				searchShadow: '0px 2px 4px -1px #1A38601A,0px 3px 12px -1px #1C375A29',
				btnBoxShadow: '0px 1px 2px 0px #1018280D',
				headerShadow:
					'0px 3px 18px -2px #1A38601A,0px 12px 48px -6px #1C375A29',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
