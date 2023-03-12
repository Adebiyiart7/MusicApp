import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../AppText";

const OptionCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>{item.icon}</View>
      <AppText style={styles.name}>{item.name}</AppText>
    </View>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  card: {

  },
  icon: {

  },
  name: {
    
  }
});
