/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./informatika/*.{html,js}",
    "./kamp/*.{html,js}",
    "./kamp/**/*.{html,js}",,
    "./kamp2024/**/*.{html,js}",,

  ],
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
