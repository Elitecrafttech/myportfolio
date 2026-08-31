/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "Segoe UI", "sans-serif"],
        display: ["Syne", '"IBM Plex Sans"', "sans-serif"],
      },
      colors: {
        accent: "#FACA22",
        ink: "#0D0F1B",
      },
    },
  },
  plugins: [],
}
