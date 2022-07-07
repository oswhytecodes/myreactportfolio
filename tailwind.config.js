/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Merriweather", "serif"],
    },
    colors: {
      greenFC: "#526749",
      brownFC: "#D68A56",
      pinkFC: "#F9B3AB",
      orangeFC: "#ECAC5B",
      greyFC: "#C9C6C9",
      whiteFC: "#FAF8F4",
    },
    extend: {},
  },
  plugins: [],
};
