const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./svg/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      black: "#000",
      transparent: "transparent",
      white: "#FFF",
      accent: {
        10: "#5C98DE",
        20: "#EFF5FC",
        30: "#EEB111",
        40: "#6A7283",
        50: "#8487A3",
        60: "#EDEDED",
        70: "#002D62",
        80: "#3B90FB",
        90: "#17142F",
        100: "#C81107",
      },
    },
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("clump", "@supports (font-size: clamp(1rem,2vw,3rem))");
    }),
  ],
};
