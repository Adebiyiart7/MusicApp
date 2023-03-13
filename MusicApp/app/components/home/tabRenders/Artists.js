import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// LOCAL IMPORTS
import AppText from "../../AppText";
import defaultStyles from "../../../config/styles";
import colors from "../../../config/colors";
import Card2 from "../../cards/Card2";
import { songs } from "../../../db/recentlyPlayed";
import BottomSheet from "../../BottomSheet";
import ListCard1 from "../../cards/ListCard1";
import ItemSeparatorComponent from "../../ItemSeparatorComponent";
import MoreActions from "../../songs/MoreActions";
import routes from "../../../config/routes";
import { sortData } from "./Songs";
import { artists } from "../../../db/artists";

const Artists = () => {
  const [clickedID, setClickedID] = useState(null);
  const [sortBottomSheetVisible, setSortBottomSheetVisible] = useState(false);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);
  const navigation = useNavigation();

  const clickedObject = () => {
    return songs.find((item) => item._id === clickedID);
  };

  const handleOnPress = (actionID, objectID) => {
    if (actionID === "1") {
      navigation.navigate(routes.PLAY_SONG, { _id: objectID });
    } else if (actionID === "2") {
      setClickedID(objectID);
      setMoreActionsBottomSheetVisible(true);
    }
  };

  const actions = [
    {
      _id: "1",
      actions: "play",
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
      _id: "2",
      actions: "more",
      obj: (
        <MaterialCommunityIcons
          name="dots-vertical"
          color={colors.primaryText}
          size={24}
          style={styles.icons}
        />
      )
    }
  ];

  return (
    <View>
      <BottomSheet
        bottomSheetContent={
          <View>
            <FlatList
              data={sortData}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <ListCard1 title={item.title} />}
              ItemSeparatorComponent={<ItemSeparatorComponent />}
            />
          </View>
        }
        bottomSheetVisible={sortBottomSheetVisible}
        setBottomSheetVisible={setSortBottomSheetVisible}
      />
      <BottomSheet
        bottomSheetContent={<MoreActions item={clickedObject()} />}
        bottomSheetVisible={moreActionsBottomSheetVisible}
        setBottomSheetVisible={setMoreActionsBottomSheetVisible}
      />
      <View
        style={[
          defaultStyles.headingFlex,
          { borderBottomColor: colors.border100, borderBottomWidth: 1 }
        ]}
      >
        <AppText style={defaultStyles.headingFont}>18 artists</AppText>
        <TouchableOpacity onPress={() => setSortBottomSheetVisible(true)}>
          <AppText style={defaultStyles.seeAll}>
            Ascending &nbsp;
            <MaterialCommunityIcons name="sort" size={14} />
          </AppText>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={artists}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card2
              rounded
              _id={item._id}
              image={item.avatar}
              title={item.name}
              subTitle={{
                left: `${item.albumCount} albums`,
                right: `${item.songCount} songs`
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Artists;

const styles = StyleSheet.create({
  icons: {
    marginLeft: 14
  }
});
