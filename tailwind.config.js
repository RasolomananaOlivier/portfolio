const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
  theme: {
    fontSize: {
      "3xl-sm": ["2.5rem", "55px"],
      "3xl": ["4.5rem", "80px"],
    },
    backgroundColor: {
      primary: "#FF00AC",
      light: "#f2f2f2",
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
};
