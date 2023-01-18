import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// LOCAL IMPORTS
import routes from "../config/routes";
import SplashScreen from "../screens/SplashScreen";
import WalkThroughScreen from "../screens/WalkThroughScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.SPLASH}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={routes.SPLASH} component={SplashScreen} />
      <Stack.Screen
        name={routes.WALK_THROUGHT}
        component={WalkThroughScreen}
      />
      <Stack.Screen name={routes.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
