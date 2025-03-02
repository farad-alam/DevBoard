/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
