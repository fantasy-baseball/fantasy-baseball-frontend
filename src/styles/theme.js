const calcRem = (size) => `${size / 16}rem`;

const color = {
  black: "#1a1d23",
  blue: "#0f4cd9",
  white: "#ffffff",
  darkgrey: "#313439",
  grey: "#484a4f",
  lightgrey: "#ddddde",
};

const skeletonColor = {
  background: "#373b3e",
  box: "#3f4346",
  skeleton: "#5f5f5f",
  highlight: "#4a4a4a",
};

const fontSize = {
  small: calcRem(8),
  base: calcRem(16),
  middle: calcRem(24),
  big: calcRem(32),
  bigger: calcRem(40),
  biggest: calcRem(48),
};

const margin = {
  small: calcRem(8),
  base: calcRem(16),
  middle: calcRem(24),
  big: calcRem(32),
  bigger: calcRem(40),
  biggest: calcRem(48),
};

const padding = {
  small: calcRem(8),
  base: calcRem(16),
  middle: calcRem(24),
  big: calcRem(32),
  bigger: calcRem(40),
  biggest: calcRem(48),
};

const theme = {
  color,
  skeletonColor,
  fontSize,
  margin,
  padding,
};

export default theme;
