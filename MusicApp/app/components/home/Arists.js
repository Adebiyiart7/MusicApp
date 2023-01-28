import {  StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../../config/styles";
import AppText from "../AppText";
import { artists } from "../../db/artists";
import Card1 from "../cards/Card1";
import HorizontalScroll from "../HorizontalScroll";

const Artists = () => {
  return (
    <View style={defaultStyles.horizontalScroll}>
      <View style={defaultStyles.headingFlex}>
        <AppText style={defaultStyles.headingFont}>Artists</AppText>
        <TouchableOpacity>
          <AppText style={defaultStyles.seeAll}>See All</AppText>
        </TouchableOpacity>
      </View>
      <HorizontalScroll
        data={artists}
        renderer={(item) => (
          <Card1 shape="circle" image={item.avatar} title={item.name} />
        )}
      />
    </View>
  );
};

export default Artists;

const styles = StyleSheet.create({});
