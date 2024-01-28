/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-bg-light': '#FAFAFA',
				'primary-bg-dark': '#2c2c2c',
				'secondary-bg': '#ecc94b',
				'primary-white-light': '#fff',
				'primary-text-color-light': '#737373',
				'dark-grey-color-light': '#333',
				'dark-border-color': '#737373',
				'profile-image-bg': '#eeeeee',
				'primary-border-color': '#442C2E',
				'primary-button-bg': '#633CFF',
				'transparent': 'transparent',
				'none': 'none',
				'active-nav-bg': '#efebff',
				'light-Purple': '#EFEBFF',
				'light-Grey': '#FAFAFA',
				'purple': '#633CFF',
				'red':'#FF3939'
			},
		},
	},
	plugins: [],
};
