import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// LOCAL IMPORTS
import routes from "../config/routes";
import SplashScreen from "../screens/SplashScreen";
import WalkThroughScreen from "../screens/WalkThroughScreen";
import TabNavigator from "./TabNavigator";
import PlaySongScreen from "../screens/PlaySongScreen";
import ArtistDetailsScreen from "../screens/ArtistDetailsScreen";
import FolderDetailsScreen from "../screens/FolderDetailsScreen";

const Stack = createStackNavigator();

const cardStyleInterpolator = ({ current: { progress } }) => ({
  cardStyle: {
    opacity: progress,
    transform: [
      {
        translateX: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
          extrapolate: "clamp"
        })
      }
    ]
  }
});

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
        options={{
          cardStyleInterpolator: cardStyleInterpolator
        }}
      />
      <Stack.Screen
        name={routes.PLAY_SONG}
        component={PlaySongScreen}
        options={{
          cardStyleInterpolator: cardStyleInterpolator
        }}
      />
      <Stack.Screen
        name={routes.ARTIST_DETAILS}
        component={ArtistDetailsScreen}
        options={{
          cardStyleInterpolator: cardStyleInterpolator
        }}
      />
      <Stack.Screen
        name={routes.FOLDER_DETAILS}
        component={FolderDetailsScreen}
        options={{
          cardStyleInterpolator: cardStyleInterpolator
        }}
      />
      <Stack.Screen name={routes.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
