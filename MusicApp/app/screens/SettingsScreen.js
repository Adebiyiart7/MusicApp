import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../config/routes";
import MenuItem from "../components/MenuItem";
import AppText from "../components/AppText";
import ItemSeparatorComponent from "../components/ItemSeparatorComponent";
import AppHeader from "../components/AppHeader";

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const dimensions = useWindowDimensions();
  const handleLogout = () => {
};

  return (
    <Screen
      header={
        <>
          <AppHeader
            RightIconExtra={
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.SEARCH)}
              >
                <MaterialCommunityIcons
                  color={colors.primaryText}
                  size={24}
                  name="dots-horizontal-circle-outline"
                />
              </TouchableOpacity>
            }
            navigation={navigation}
            title={"Settings"}
          />
        </>
      }
    >
      <View style={styles.menu}>
        <Image
          resizeMode="contain"
          style={[styles.image, { width: dimensions.width - 32 }]}
          source={require("../assets/images/premium-image.png")}
        />
        <ItemSeparatorComponent style={{ marginVertical: 10 }} />
        <MenuItem title={"Backup"} leftIcon="book-arrow-up-outline" />
        <MenuItem title={"Notification"} leftIcon="bell-outline" />
        <MenuItem
          title={"Language"}
          subTitle={"English (US)"}
          leftIcon="dots-triangle"
        />
        <MenuItem
          title={"Dark Mode"}
          leftIcon="eye-outline"
          RightIcon={
            isDarkMode ? (
              <Fontisto
                name="toggle-on"
                size={30}
                color={colors.primaryColor}
                onPress={() => setIsDarkMode(!isDarkMode)}
              />
            ) : (
              <Fontisto
                name="toggle-off"
                size={30}
                color={colors.lightText}
                onPress={() => setIsDarkMode(!isDarkMode)}
              />
            )
          }
        />
        <MenuItem title={"Share App"} leftIcon="share-outline" />
        <MenuItem title={"Change Log"} leftIcon="file-outline" />

        <MenuItem title={"Privacy Policy"} leftIcon="security" />
        <MenuItem title={"FAQ"} leftIcon="information-outline" />
        <MenuItem
          isLogout
          showRightIcon={false}
          title={"Quit"}
          leftIcon="logout"
          onPress={() => {
            handleLogout();
          }}
        />
      </View>
    </Screen>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  image: {
    marginVertical: -20
  }
});
