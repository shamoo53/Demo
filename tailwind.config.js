/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Set Inter as your custom font
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: ['light']
  }
}
