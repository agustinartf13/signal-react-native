import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";
import { StatusBar } from "expo-status-bar" 
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2c6bed'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: '#fff',

}

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="light" backgroundColor="#2c6bed"/>
     <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
