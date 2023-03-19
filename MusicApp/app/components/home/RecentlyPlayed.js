import {  StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// LOCAL IMPORTS
import defaultStyles from "../../config/styles";
import AppText from "../AppText";
import { songs } from "../../db/recentlyPlayed";
import Card1 from "../cards/Card1";
import HorizontalScroll from "../HorizontalScroll";
import routes from "../../config/routes";

const RecentlyPlayed = () => {
  const navigation = useNavigation();

  return (
    <View style={defaultStyles.horizontalScroll}>
      <View style={defaultStyles.headingFlex}>
        <AppText style={defaultStyles.headingFont}>Recently Played</AppText>
        <TouchableOpacity onPress={() => navigation.navigate(routes.RECENTLY_PLAYED)}>
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
