/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",  // Enables dark mode via class
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // Enforcing the dark theme
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};