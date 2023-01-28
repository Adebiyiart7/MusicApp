import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

// LOCAL IMPORTS
const ListCard = ({ title }) => {
  return (
    <View style={styles.listCard}>
      <AppText>{title}</AppText>
      <MaterialCommunityIcons
        size={24}
        color={colors.primaryColor}
        name={title === "ascending" ? "radiobox-marked" : "radiobox-blank"}
      />
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  listCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
