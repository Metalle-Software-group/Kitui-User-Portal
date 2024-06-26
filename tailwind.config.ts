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
				'new-applicant-text-color': 'var(--new-applicant-text-color)',
				'new-applicant-color': 'var(--new-applicant-color)',
				'green-text': 'var(--green-text)',
				'hover-bg-color-btn': 'var(--hover-bg-color-btn)',
				'job-awarded-text-color': 'var(--job-awarded-text-color)',
				'job-awarded-bg-color': 'var(--job-awarded-bg-color)',
				'job-closed-text-color': 'var(--job-closed-text-color)',
				'job-closed-bg-color': 'var(--job-closed-bg-color)',

				'commentCardTextColor': 'var(--commentCardTextColor)',
				'commentOutlinerColor': 'var(--commentOutlinerColor)',
				'chooseFileIconBgColor': 'var(--chooseFileIconBgColor)',
				'settingsClearBarColor': 'var(--settingsClearBarColor)',
				'contract-border-color': 'var(--contract-border-color)',
				'jobTypeBorderColor': 'var(--jobTypeBorderColor)',
				'contract-text-color': 'var(--contract-text-color)',
				'chooseFileTextColor': 'var(--chooseFileTextColor)',
				'applicant-colorText': 'var(--applicant-colorText)',
				'attachment-border': 'var(--attachment-border)',
				'settingsIconColor': 'var(--settingsIconColor)',
				'settingsClearColor': 'var(--settingsClearColor)',
				'chooseFileBgColor': 'var(--chooseFileBgColor)',
				'checkMarkColor': 'var(--checkMarkColor)',
				'crossMarkColor': 'var(--crossMarkColor)',
				'filtertTagColor': 'var(--filtertTagColor)',
				'checkboxColor1': 'var(--checkboxColor1)',
				'gray-border': 'var(--gray-border)',
				'dividerColor': 'var(--dividerColor)',
				'dots-color': 'var(--dots-color)',
				'deep-purple': 'var(--deep-purple)',
				'search-iconColor': 'var(--search-iconColor)',
				'boxBorder-color': 'var(--boxBorder-color)',
				'applicant-colorbg': 'var(--applicant-colorbg)',
				'commentsColor': 'var(--commentsColor)',
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
				'jobApplicationBtnColor': 'var(--jobApplicationBtnColor)',
				'searchIconColor': 'var(--searchIconColor)',
				'login-screen-text-color': 'var(--login-screen-text-color)',
				'filter-stroke-color': 'var(--filter-stroke-color)',
				'downloadBtnColor': 'var(--downloadBtnColor)',
				'footer-btnColor': 'var(--footer-btnColor)',
				'socialsColor': 'var(--socialsColor)',
				'inputTextColor': 'var(--inputTextColor)',
				'dev-accent': 'var(--accent-color)',
				'title-text-color': 'var(--title-text-color)',
				'checkboxColor': 'var(--checkboxColor)',
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
				searchShadow:
					'0px 2px 4px -1px var(--dividerColor), 0px 3px 12px -1px var(--checkboxColor)',
				btnBoxShadow: '0px 1px 2px 0px #1018280D',
				page404Shadow:
					'0px 2px 6px -1px var(--checkboxColor),0px 8px 24px -4px var(--checkboxColor)',
				headerShadow:
					'0px 3px 18px -2px var(--dividerColor), 0px 12px 48px -6px var(--checkboxColor)',
				tableBoxShadow: '0px 1px 2px 0px #1018280F,0px 1px 3px 0px #1018281A',
				applicationFormBoxShadow:
					'0px 2px 6px -1px var(--dividerColor),0px 8px 24px -4px var(--checkboxColor)',
				profileBoxShadow:
					'0px 2px 6px -1px var(--dividerColor),0px 8px 24px -4px var(--checkboxColor)',
			},
			backgroundImage: {
				'radial-gradient':
					'radial-gradient(37.81% 40.57% at 77.99% 41.39%, rgba(249, 249, 249, 0.8) 0%, rgba(251, 251, 251, 0.8) 100%)',
				'newsCardBgImage': `url('/images/others/news-bg.svg')`,
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

			screens: {
				// 'sm': '640px',
				// 'md': '768px',
				// 'lg': '1024px',
				// 'xl': '1280px',
				'2xl': '1440px',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
