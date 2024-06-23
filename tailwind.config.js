import tailwind from "tailwindcss/defaultTheme.js";
import colorStyles from "./utils/color-styles.js";
import fontSizes from "./utils/font-sizes.js";

const {fontFamily, screens, transitionDuration} = tailwind;

const heightExtend = {
  svh: ["100vh", "100svh"],
  lvh: ["100vh", "100lvh"],
  dvh: ["100vh", "100dvh"],
};

const widthExtend = {
  svw: ["100vw", "100svw"],
  lvw: ["100vw", "100lvw"],
  dvw: ["100vw", "100dvw"],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,pug}"],
  theme: {
    colors: colorStyles,
    fontSize: fontSizes,
    screens: {
      xs: "480px",
      ...screens,
      "3xl": "1920px",
    },
    transitionDuration: {
      ...transitionDuration,
      DEFAULT: "150ms",
    },
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      height: heightExtend,
      minHeight: heightExtend,
      maxHeight: heightExtend,
      width: widthExtend,
      minWidth: widthExtend,
      maxWidth: widthExtend,
    },
  },
  plugins: [],
};
