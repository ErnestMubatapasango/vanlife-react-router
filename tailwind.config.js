/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'pattern': "url('./pattern.png')",
      'hero-bg': "url('./assets/hero-bg.png')"
    },
    // screens: {
    //   xs: "450px",
    // },
  },
  plugins: [],
}