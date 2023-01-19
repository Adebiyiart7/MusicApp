import { StyleSheet, Platform, View, ImageBackground, Dimensions } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-reanimated-carousel";

// LOCAL IMPORTS
import Screen from "../components/Screen";

const WalkThroughScreen = () => {
  const [activeImage, setActiveImage] = useState(0);
  // const screenWidth  = Dimensions.get("screen").width;
  // const screenHeight  = Dimensions.get("screen").height;

  const walk_through_images = [
    { image: require("../assets/images/walk_through1.png") },
    { image: require("../assets/images/walk_through2.png") },
    { image: require("../assets/images/walk_through3.png") }
  ];

  return (
    <ImageBackground
    // style={[styles.image, { width: screenWidth, height: 675 }]}
    // source={walk_through_images[activeImage].image}
    ></ImageBackground>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({
  image: {
    marginTop: 20
  }
});
