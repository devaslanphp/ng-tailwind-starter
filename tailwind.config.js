/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        danger: colors.red,
        primary: colors.blue,
        success: colors.green,
        warning: colors.yellow,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}
