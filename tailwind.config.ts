import type { Config } from 'tailwindcss'

import { COLORS } from './src/constants/color.constants'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: COLORS,
      padding: {
        layout: '1.4rem'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '333ms'
      }
    }
  },
  plugins: []
}
export default config
