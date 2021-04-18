const selectColor = (props) => {
  switch (props.color) {
    case "white":
      return props.theme.colors.white;
    case "black":
      return props.theme.colors.black;
    default:
      return props.theme.colors.black;
  }
};

const stylesUtils = {
  selectColor,
};

export default stylesUtils;
