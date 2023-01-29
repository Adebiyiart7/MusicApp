import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";

// LOCAL IMPORTS
const ListCard1 = ({ title }) => {
  return (
    <View style={styles.listCard}>
      <AppText style={styles.title}>{title}</AppText>
      <TouchableOpacity>
        <MaterialCommunityIcons
          size={24}
          color={colors.primaryColor}
          name={title === "ascending" ? "radiobox-marked" : "radiobox-blank"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ListCard1;

const styles = StyleSheet.create({
  listCard: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 16
  }
});
