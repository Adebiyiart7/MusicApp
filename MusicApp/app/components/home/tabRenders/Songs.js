import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "../../AppText";
import defaultStyles from "../../../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import Card2 from "../../cards/Card2";
import { songs } from "../../../db/recentlyPlayed";

const Songs = () => {
  const actions = [
    {
      _id: "0",
      obj: (
        <MaterialCommunityIcons
          name="play-circle"
          color={colors.primaryColor}
          size={30}
          style={styles.icons}
        />
      )
    },
    {
      _id: "1",
      obj: (
        <MaterialCommunityIcons
          name="dots-vertical"
          color={colors.primaryText}
          size={24}
          style={styles.icons}
        />
      )
    },
  ];

  const { width: screenWidth } = Dimensions.get("screen");

  return (
    <View>
      <View
        style={[
          defaultStyles.headingFlex,
          { borderBottomColor: colors.border100, borderBottomWidth: 1 }
        ]}
      >
        <AppText style={defaultStyles.headingFont}>700 songs</AppText>
        <TouchableOpacity>
          <AppText style={defaultStyles.seeAll}>
            Ascending &nbsp;
            <MaterialCommunityIcons name="sort" size={14} />
          </AppText>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={songs}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card2
              image={item.image}
              title={item.title}
              subTitle={{
                left: item.artist.name,
                right: `${item.duration} mins`
              }}
              actions={actions}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  icons: {
    marginLeft: 14
  }
});
