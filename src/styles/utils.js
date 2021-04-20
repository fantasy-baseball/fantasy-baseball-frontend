const selectColor = (props) => {
  switch (props.color) {
    case "white":
      return props.theme.color.white;
    case "black":
      return props.theme.color.black;
    case "blue":
      return props.theme.color.blue;
    default:
      return props.theme.color.black;
  }
};

const stylesUtil = {
  selectColor,
};

export default stylesUtil;
