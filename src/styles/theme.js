const calcRem = (size) => `${size / 16}rem`;

const colors = {
  black: "#1a1d23",
  blue: "#0f4cd9",
  white: "#ffffff",
  darkgrey: "313439",
  grey: "#484a4f",
  lightgrey: "#ddddde",
};

const fontSizes = {
  small: calcRem(8),
  base: calcRem(16),
  big: calcRem(32),
  bigger: calcRem(40),
  biggest: calcRem(48),
};

const margins = {
  small: calcRem(8),
  base: calcRem(16),
  big: calcRem(32),
  bigger: calcRem(40),
  biggest: calcRem(48),
};

const theme = {
  colors,
  fontSizes,
  margins,
};

export default theme;
