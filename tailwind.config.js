const spacing = require('./config/spacing.js');
const colors = require('./config/colors.js');
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: colors,
    extend: {
      spacing: spacing,
    },
  },
  plugins: [],
}