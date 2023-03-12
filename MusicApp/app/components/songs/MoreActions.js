import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Card2 from "../cards/Card2";
import colors from "../../config/colors";
import AppText from "../AppText";
import OptionCard from "./OptionCard";

const MoreActions = ({ item }) => {
  const handleOnPress = () => {};

  const actions = [
    {
      _id: "1",
      actions: "favorite",
      obj: (
        <Ionicons
          name="heart-outline"
          color={colors.primaryText}
          size={30}
          style={styles.icons}
        />
      )
    }
  ];

  const options = [
    {
      _id: "1",
      name: "Play Next",
      icon: <MaterialCommunityIcons name="account" />
    },
    { _id: "2", name: "Add to Playing Queue", icon: "" },
    { _id: "3", name: "Add to Play List", icon: "" },
    { _id: "4", name: "Go to Album", icon: "" },
    { _id: "5", name: "Go to Artist", icon: "" },
    { _id: "6", name: "Details", icon: "" },
    { _id: "7", name: "Set as Ringtone", icon: "" },
    { _id: "8", name: "Add to Blacklist", icon: "" },
    { _id: "9", name: "Share", icon: "" },
    { _id: "10", name: "Delete from Device", icon: "" }
  ];

  return (
    <View style={styles.container}>
      <Card2
        image={item.image}
        title={item.title}
        subTitle={{
          left: item.artist.name,
          right: `${item.duration} mins`
        }}
        actions={actions}
        onPress={(actionID) => handleOnPress(actionID, item._id)}
      />
      <View style={styles.options}>
        <FlatList
          data={options}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View key={item._id}>
              <OptionCard item={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default MoreActions;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0
  },
  icons: {
    marginLeft: 14
  },
  options: {
    borderTopWidth: 1,
    borderTopColor: colors.border100
  }
});
