import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { set } from "react-native-reanimated";
import { ILSignal } from "../assets";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={ILSignal} style={{ width: 200, height: 200 }} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} title="Login" onPress={SignIn} />
      <Button containerStyle={styles.button} type="outline" title="Register" onPress={() => navigation.navigate('Register')} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
},
  inputContainer: {
      width: 300,
  },
  button: {
      width: 200,
      marginTop: 10
  }
});
