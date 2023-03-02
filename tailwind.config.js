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
      "3xl-sm": ["3rem", "60px"],
      "3xl": ["4.5rem", "80px"],
    },
    backgroundColor: {
      primary: "#FF00AC",
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
};
