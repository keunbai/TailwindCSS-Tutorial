/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
      }
    },
  },
  plugins: [],
}

