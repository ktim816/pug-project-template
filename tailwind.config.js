import tailwind from "tailwindcss/defaultTheme.js";
import colorStyles from "./utils/color-styles.js";
import fontSizes from "./utils/font-sizes.js";

const {fontFamily, screens} = tailwind;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,pug}"],
  theme: {
    colors: colorStyles,
    fontSize: fontSizes,
    screens: {
      xs: "480px",
      ...screens,
    },
    extend: {
      fontFamily: {
        primary: [...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
