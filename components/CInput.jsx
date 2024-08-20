import { StyleSheet, TextInput, View, Text } from "react-native";
import BaseStyles from "../assets/styles/styles";
import { colorPalette } from "../assets/styles/styles";
import { useState } from "react";

export default CText = (props) => {
  const [focus, setFocus] = useState(colorPalette.container.border);

  return (
    <View style={{ ...style.inputcontainer, borderColor: focus }}>
      <TextInput
        style={style.default}
        onFocus={() => {
          setFocus(colorPalette.container.focused);
        }}
        onBlur={() => {
          setFocus(colorPalette.container.border);
        }}
        onChangeText={(value) => {
          props.model(value);
        }}
        placeholder={props.children}
        placeholderTextColor={colorPalette.text.secondary}
        cursorColor={colorPalette.colors.purple}
      ></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  default: {
    color: colorPalette.text.primary,
    fontSize: 16,
    font: require("../assets/fonts/Roboto-Regular.ttf"),
  },
  subsciption: {
    color: colorPalette.text.secondary,
    fontSize: 14,
    font: require("../assets/fonts/Roboto-Regular.ttf"),
  },
  inputcontainer: {
    padding: 8,
    borderRadius: 10,
    borderColor: colorPalette.container.border,
    borderWidth: 1,
  },
});
