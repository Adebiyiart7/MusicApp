import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";

const HomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <AppHeader
        RightIconExtra={
          <Ionicons name="search" size={24} color={colors.primaryText} />
        }
        navigation={navigation}
        title={"Music"}
      />
      <AppText>Home</AppText>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
