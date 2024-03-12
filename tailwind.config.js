/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Pages/Checkout/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  // Add the following lines for the @tailwind components directive
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
