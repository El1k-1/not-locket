import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import BaseStyles from "../assets/styles/styles";
import { colorPalette } from "../assets/styles/styles";
import { Component } from "react";
import CText from "./CText"; 

export default CButton = (props) => {
  return (
    <TouchableOpacity
      style={style.button}
      borderRadius={10}
      color={colorPalette.colors.purple}
      onPress={props.onClick}
    >
      <CText style={{fontSize:16}}>{props.children}</CText>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: colorPalette.colors.purple,
    borderRadius: 10,
  },
});
