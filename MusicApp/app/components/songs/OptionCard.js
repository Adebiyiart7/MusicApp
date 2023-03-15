import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../config/colors";

const OptionCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.icon}>{item.icon}</View>
      <AppText style={styles.name}>{item.name}</AppText>
    </TouchableOpacity>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  icon: {
    marginRight: 10
  },
  name: {
    color: colors.lightText,
    fontSize: 15
  }
});
