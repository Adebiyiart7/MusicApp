import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";

const imageSize = 80;

const Card2 = ({ image, title, subTitle, actions, onPress, rounded }) => {
  const { width: screenWidth } = Dimensions.get("screen");

  const titleWidth = () => {
    if (!actions) return screenWidth - (imageSize + 50);

    const iconWidth = 50;
    return screenWidth - (iconWidth * actions.length + imageSize + 32);
  };

  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={[styles.image, { borderRadius: rounded ? 200 : 15 }]}
      />
      <View style={styles.center}>
        <AppText
          numberOfLines={1}
          style={[styles.title, { width: titleWidth() }]}
        >
          {title}
        </AppText>
        <AppText style={[styles.subTitle]} numberOfLines={1}>
          <View style={styles.subTitle}>
            <AppText
              numberOfLines={1}
              style={[styles.subTitleText, { maxWidth: titleWidth() - 50 }]}
            >
              {subTitle.left}
            </AppText>

           {subTitle.right && <AppText style={styles.subTitleText}>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{subTitle.right}
            </AppText>}
          </View>
        </AppText>
      </View>
      {actions && (
        <View style={styles.actions}>
          {actions.map((item) => (
            <TouchableOpacity onPress={() => onPress(item._id)} key={item._id}>
              {item.obj}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    alignItems: "center",
    right: 0,
  },
  card: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  center: {
    marginLeft: 16
  },
  image: {
    height: imageSize,
    width: imageSize
  },
  subTitle: {
    display: "flex",
    flexDirection: "row"
  },
  subTitleText: {
    color: colors.lightText,
    fontSize: 13
  },
  title: {
    fontWeight: "700",
    fontSize: 18
  }
});
