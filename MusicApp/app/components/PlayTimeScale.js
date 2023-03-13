import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const PlayTimeScale = ({ duration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scaleTrack}>
        <View style={styles.scale} />
      </View>
      <View style={styles.time}>
        <AppText style={styles.currentTime}>
          0{(duration * 0.7).toFixed(2)}
        </AppText>
        <AppText style={styles.duration}>{duration}</AppText>
      </View>
    </View>
  );
};

export default PlayTimeScale;

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },

  scale: {
    backgroundColor: colors.primaryColor,
    height: 7,
    width: "70%",
    borderRadius: 5
  },
  scaleTrack: {
    height: 7,
    backgroundColor: colors.border100,
    width: "100%",
    borderRadius: 5
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});
