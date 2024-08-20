import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import BaseStyles from "../assets/styles/styles";
import { CText, CInput, CButton } from "../components/componentExporter";
import { useEffect, useState } from "react";

export default SignInScreen = ({navigation}) => {
  const logIn = () => {
    console.log(login,password);
    navigation.navigate("SignUp")
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.container}>
      <View>
        <CText type="header">Authorization</CText>
        <CText type="subscription">Log in to allow access</CText>
      </View>
      <View style={{ rowGap: 10 }}>
        <CInput model={setLogin}>Login</CInput>
        <CInput model={setPassword}>Password</CInput>
      </View>
      <CButton onClick={logIn}>Log in</CButton>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    rowGap: 20,
    width: 200,
  },
});
