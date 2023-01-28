import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../AppText";

const Card1 = ({ image, title, style, shape = "rounded" }) => {
  const imageShape = {
    rounded: 15,
    circle: 100,
  }

  return (
    <View style={[styles.card, style]}>
      <Image
        style={[styles.image, { borderRadius: imageShape[shape] }]}
        source={image}
      />
      <AppText numberOfLines={2} style={styles.title}>{title}</AppText>
    </View>
  );
};

export default Card1;

const styles = StyleSheet.create({
  card: {
    width: 120
  },
  image: {
    height: 120,
    width: 120
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
  }
});
