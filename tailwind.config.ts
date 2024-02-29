import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'darkestnight': '#0d0d0d',
        'eclipse': '#131313',
        'dusk': '#232222',
        'night': '#232222',
        'mist': '#C59F1A;',
        'day': '#ffffff',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}
export default config
