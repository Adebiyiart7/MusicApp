import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";

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

  const handleLogout = () => {
};

  return (
    <Screen
      scrollable={false}
      header={
        <>
          <AppHeader
            RightIconExtra={
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.SEARCH)}
              >
                <Ionicons
                  color={colors.primaryText}
                  size={24}
                  name="search-outline"
                />
              </TouchableOpacity>
            }
            navigation={navigation}
            title={"Settings"}
          />
        </>
      }
    >
      <View style={styles.user}>
        <View>
  
          <TouchableOpacity>
            <FontAwesome
              name="pencil-square"
              size={30}
              style={styles.editPhoto}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menu}>
        <MenuItem title={"My Booking"} leftIcon="calendar-month" />
        <MenuItem title={"Payments"} leftIcon="cash" />
        <ItemSeparatorComponent style={{ marginVertical: 10 }} />
        <MenuItem
          title={"Profile"}
          leftIcon="account-outline"
        />
        <MenuItem title={"Notification"} leftIcon="bell-outline" />
        <MenuItem title={"Security"} leftIcon="shield-check-outline" />
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
        <MenuItem title={"Help Center"} leftIcon="exclamation-thick" />
        <MenuItem
          title={"Invite Friends"}
          leftIcon="account-supervisor-outline"
        />
        <MenuItem
          isLogout
          showRightIcon={false}
          title={"Logout"}
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
  avatar: {
    borderRadius: 200,
    height: 150,
    width: 150
  },
  editPhoto: {
    position: "absolute",
    color: colors.primaryColor,
    right: 0,
    bottom: 10
  },
  fullname: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
    maxWidth: 280,
    paddingBottom: 20
  },
  menu: {},
  user: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: colors.border200,
    borderBottomWidth: 1
  }
});
