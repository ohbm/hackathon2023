/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        '1/2v': '50vh',
      },
      colors: {
        'sand': '#F3EBDC',
        'sand-light': '#F9F4E9',
        'sand-dark': '#261D0D',
        'almost-black': '#091517',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(
            theme('bgGradientDeg', {}),
            {
                10: '10deg',
                15: '15deg',
                20: '20deg',
                25: '25deg',
                30: '30deg',
                45: '45deg',
                60: '60deg',
                90: '90deg',
                120: '120deg',
                135: '135deg',
                160: '160deg',
            }
          )
        }
      )
    })
  ],
}
