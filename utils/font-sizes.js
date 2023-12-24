import {pxToRem} from "./helpers.js";

export default {
  "2xs": [
    pxToRem(8),
    {
      fontWeight: 400,
      lineHeight: pxToRem(10),
    },
  ],
  xs: [
    pxToRem(12),
    {
      fontWeight: 400,
      lineHeight: pxToRem(16),
    },
  ],
  sm: [
    pxToRem(16),
    {
      fontWeight: 400,
      lineHeight: pxToRem(21),
    },
  ],
  base: [
    pxToRem(16),
    {
      fontWeight: 400,
      lineHeight: pxToRem(16),
    },
  ],
  md: [
    pxToRem(20),
    {
      fontWeight: 400,
      lineHeight: pxToRem(24),
    },
  ],
  lg: [
    pxToRem(24),
    {
      fontWeight: 400,
      lineHeight: pxToRem(28),
    },
  ],
  xl: [
    pxToRem(27),
    {
      fontWeight: 500,
      lineHeight: pxToRem(27),
    },
  ],
  "2xl": [
    pxToRem(32),
    {
      fontWeight: 400,
      lineHeight: pxToRem(28),
    },
  ],
};
