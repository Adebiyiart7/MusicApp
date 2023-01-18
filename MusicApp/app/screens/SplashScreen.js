import { Image, StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../config/routes";

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate(routes.TAB);
  }, 3000);
  
  return (
    <Screen scrollable={false} style={styles.screen}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <AppText style={styles.text}>Music</AppText>
      {/* <View style={styles.loading}> */}
      <LottieView
        style={styles.loading}
        autoPlay
        loop
        source={require("../assets/animations/loading.json")}
      />
      {/* </View> */}
    </Screen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 60
  },
  loading: {
    position: "absolute",
    top: "35%",
  },
  screen: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    marginLeft: 15,
    fontWeight: "bold",
    color: colors.primaryText
  }
});
