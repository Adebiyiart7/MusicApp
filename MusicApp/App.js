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
