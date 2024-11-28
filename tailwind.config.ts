import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/color.constants'

export default {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
	],
	theme: {
		extend: {
			colors: COLORS,
		},
	},
	plugins: [],
} satisfies Config
