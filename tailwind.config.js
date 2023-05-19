const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: "#FF00AC",
      light: "#f2f2f2",
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
};
