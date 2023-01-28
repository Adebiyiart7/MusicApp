import {  StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../../config/styles";
import AppText from "../AppText";
import { songs } from "../../db/recentlyPlayed";
import Card1 from "../cards/Card1";
import HorizontalScroll from "../HorizontalScroll";

const RecentlyPlayed = () => {
  return (
    <View style={defaultStyles.horizontalScroll}>
      <View style={defaultStyles.headingFlex}>
        <AppText style={defaultStyles.headingFont}>Recently Played</AppText>
        <TouchableOpacity>
          <AppText style={defaultStyles.seeAll}>See All</AppText>
        </TouchableOpacity>
      </View>
      <HorizontalScroll
        data={songs}
        renderer={(item) => <Card1 image={item.image} title={item.title} />}
      />
    </View>
  );
};

export default RecentlyPlayed;

const styles = StyleSheet.create({});
