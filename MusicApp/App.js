import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";


// LOCAL IMPORTS
import AppNavigator from "./app/navigation/AppNavigator";
import colors, { theme } from "./app/config/colors";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.background100}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />
      <AppNavigator />
    </NavigationContainer>
  );
}


/**
 *  PUBLISH APK: eas build -p android --profile preview
 * 
 * 
 * 
 * 
 * {
  "name": "musicapp",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start --dev-client",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web"
  },
  "dependencies": {
        "@expo/vector-icons": "^13.0.0",
    "@react-navigation/bottom-tabs": "^6.5.3",
    "@react-navigation/drawer": "^6.5.7",
    "@react-navigation/elements": "^1.3.13",
    "@react-navigation/material-bottom-tabs": "^6.2.11",
    "@react-navigation/material-top-tabs": "^6.5.2",
    "@react-navigation/native": "^6.1.2",
    "@react-navigation/native-stack": "^6.9.8",
    "@react-navigation/stack": "^6.3.11",
    "expo": "^47.0.13",
    "expo-constants": "^14.0.2",
    "expo-status-bar": "^1.4.2",
    "formik": "^2.2.9",
    "lottie-react-native": "^5.1.4",
    "react": "^18.1.0",
    "react-native": "^0.70.6",
    "react-native-gesture-handler": "^2.9.0",
    "react-native-linear-gradient": "^2.6.2",
    "react-native-reanimated": "^2.9.1",
    "react-native-safe-area-context": "^4.5.0",
    "react-native-screens": "^3.19.0",
    "yup": "^0.32.11"
  },
  "devDependencies": {
    "@babel/core": "^7.20.12"
  },
  "private": true
}



 */