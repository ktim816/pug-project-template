import tailwindcss from "tailwindcss/defaultTheme.js";

const {screens} = tailwindcss;

window.globalOptions = {
  mql: {
    md: window.matchMedia(`(min-width: ${screens.md})`),
  },
};
