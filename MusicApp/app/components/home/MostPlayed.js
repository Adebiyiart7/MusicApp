import {  StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../../config/styles";
import AppText from "../AppText";
import { songs } from "../../db/recentlyPlayed";
import Card1 from "../cards/Card1";
import HorizontalScroll from "../HorizontalScroll";

const MostPlayed = () => {
  return (
    <View style={defaultStyles.horizontalScroll}>
      <View style={defaultStyles.headingFlex}>
        <AppText style={defaultStyles.headingFont}>Most Played</AppText>
        <TouchableOpacity>
          <AppText style={defaultStyles.seeAll}>See All</AppText>
        </TouchableOpacity>
      </View>
      <HorizontalScroll
        data={songs.slice(3, 20)}
        renderer={(item) => <Card1 image={item.image} title={item.title} />}
      />
    </View>
  );
};

export default MostPlayed;

const styles = StyleSheet.create({});
