const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: '#E5E7EB',
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: '#A7F3D0',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}