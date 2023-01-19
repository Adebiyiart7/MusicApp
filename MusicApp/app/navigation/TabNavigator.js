import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// LOCAL IMPORTS
import routes from "../config/routes";
import HomeScreen from "../screens/HomeScreen";
import tabBarIcon from "./tabBarIcon";
import FavoritesScreen from "../screens/FavoritesScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import SettingsScreen from "../screens/SettingsScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => tabBarIcon(route, focused),
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          height: 57,
          backgroundColor: colors.background100,
          borderTopColor: colors.border100,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          fontSize: 11
        },
        tabBarActiveTintColor: colors.primaryColor,
        tabBarIconStyle: {
          marginTop: 8
        }
      })}
    >
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.FAVORITES}
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.PLAYLIST}
        component={PlaylistScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.SETTINGS}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
