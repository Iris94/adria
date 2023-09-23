import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dAdria' : '#1e6ba3',
        'mAdria' : '#4199df',
        'lAdria' : '#6ecef7',
        'oAdria' : '#ffe36c',
        '+dAdria' : '#2e415b',
        'sAdria' : '#313d34',
      }
    },
  },
  plugins: [],
}
export default config
