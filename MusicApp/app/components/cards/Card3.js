import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card3 = ({ title, image, subTitle, subTitle2 }) => {
  const dimension = useWindowDimensions();

  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={[
          styles.image,
          { height: dimension.width / 2 - 32, width: dimension.width / 2 - 24 }
        ]}
      />
      <View style={styles.details}>
        <View style={styles.titleContainer}>
          <AppText
            numberOfLines={1}
            style={[styles.title, { width: dimension.width / 2 - 50 }]}
          >
            {title}
          </AppText>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              color={colors.primaryText}
              size={18}
            />
          </TouchableOpacity>
        </View>
        <AppText
          numberOfLines={1}
          style={[styles.subTitle, { width: dimension.width / 2 - 32 }]}
        >
          {subTitle}
        </AppText>
        <AppText
          numberOfLines={1}
          style={[styles.subTitle, { width: dimension.width / 2 - 32 }]}
        >
          {subTitle2}
        </AppText>
      </View>
    </View>
  );
};

export default Card3;

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    margin: 8
  },
  details: {
    marginTop: 12
  },
  image: {
    borderRadius: 16
  },
  subTitle: {
    color: colors.lightText,
    marginTop: 5
  },
  subTitle2: {
    color: colors.lightText
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
