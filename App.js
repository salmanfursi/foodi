 

import { StyleSheet, Text, View } from "react-native";
import React from "react";
 import "./global.css";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
