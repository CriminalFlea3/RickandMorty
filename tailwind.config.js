const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: theme => ({
        'planet': "url('img/header.jpg')",
        'first': "url('img/first.jpg')",
        'second': "url('img/second.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
