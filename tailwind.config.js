/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1740px',
        '4xl': '1971px',
        '5xl': '2201px',
        '6xl': '2432px',
        '7xl': '2662px',
        '8xl': '2892px',
        '9xl': '3123px',
        '10xl': '3353px',
        '11xl': '3584px',
        '12xl': '3840px',
      },
      fontFamily: {
        primary: ['var(--roboto-font)', ...fontFamily.sans],
        display: ['var(--bebas-font)', ...fontFamily.serif],
        theme: ['var(--nycd-font)', ...fontFamily.serif],
      },
      minHeight: {
        '1/2': '50vh',
        '3/4': '75vh',
        '3/5': '60vh',
      },
      maxHeight: {
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',

        '1/2v': '50vh',
      },
      spacing: {
        '34': '8.5rem',
        '58': '15.5rem',
        '92': '22rem',
      },
      colors: {
        'sand': '#F3EBDC',
        'sand-light': '#F9F4E9',
        'sand-dark': '#261D0D',
        'dirt': '#242423',
        'gold': '#B79B5E',
        'jungle': '#192423',
        'almost-black': '#091517',
      },
      backgroundImage: {
        'deep-sea': "linear-gradient(0deg, var(--tw-gradient-stops)), url(../../public/deep-sea.jpg)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'top-3px': 'center top, center top 3px',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      dropShadow: {
        opaque: ['0 0px 13px rgb(0 0 0)', '0 -5px 5px rgb(0 0 0)'],
      },
      animation: {
        'fade': 'fadein 0.5s normal forwards ease-in-out',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
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
