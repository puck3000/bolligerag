const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      maingreen: '#019D96',
      green: '#BEDDE8',
      lightgreen: '#DFEAE9',
      lightgrey: '#E2E5F0',
      lightergrey: '#F2F2F2 ',
      grey: '#586B6E',
      darkgrey: '#333333',
      black: '#000000',
      nearlyblack: '#1D1D1D',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      box: '135px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
