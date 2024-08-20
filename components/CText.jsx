import { StyleSheet, Text } from "react-native";
import BaseStyles from "../assets/styles/styles";
import { colorPalette } from "../assets/styles/styles";

export default CText = (props) => {
  const componentStyle = {
    default: style.default,
    header: style.header,
    subscription: style.subsciption,
  };

  return (
    <Text
      style={
        props.type ? { ...componentStyle[props.type],...props.style } :
         { ...style.default, ...props.style }
      }
    >
      {props.children}
    </Text>
  );
};

const style = StyleSheet.create({
  default: {
    color: colorPalette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    font: require("../assets/fonts/Roboto-Regular.ttf"),
  },
  header: {
    color: colorPalette.text.primary,
    fontSize: 24,
    fontWeight: 600,
    font: require("../assets/fonts/Roboto-Regular.ttf"),
  },
  subsciption: {
    color: colorPalette.text.secondary,
    fontSize: 16,
    fontWeight: 300,
    font: require("../assets/fonts/Roboto-Regular.ttf"),
  },
});
