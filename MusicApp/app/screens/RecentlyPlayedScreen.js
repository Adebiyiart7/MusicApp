import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import { songs } from "../db/recentlyPlayed";
import BottomSheet from "../components/BottomSheet";
import MoreActions from "../components/songs/MoreActions";
import { FlatList, View } from "react-native";
import Card2 from "../components/cards/Card2";
import routes from "../config/routes";

const RecentlyPlayedScreen = ({ navigation }) => {
  const [clickedID, setClickedID] = useState(null);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);

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
          style={{ marginLeft: 14 }}
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
          style={{ marginLeft: 14 }}
        />
      )
    }
  ];

  return (
    <Screen scrollable={false}>
      <BottomSheet
        bottomSheetContent={<MoreActions item={clickedObject()} />}
        bottomSheetVisible={moreActionsBottomSheetVisible}
        setBottomSheetVisible={setMoreActionsBottomSheetVisible}
      />
      <AppHeader
        hasGoBack
        title={"Recently Played"}
        navigation={navigation}
        RightIcon={
          <Ionicons
            color={colors.primaryText}
            size={24}
            name="search-outline"
          />
        }
        RightIconExtra={
          <MaterialCommunityIcons
            color={colors.primaryText}
            size={24}
            name="dots-horizontal-circle-outline"
          />
        }
      />
      <View>
        <FlatList
          data={songs}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card2
              image={item.image}
              title={item.title}
              subTitle={{ left: item.artist.name }}
              actions={actions}
              onPress={(actionID) => handleOnPress(actionID, item._id)}
            />
          )}
        />
      </View>
    </Screen>
  );
};

export default RecentlyPlayedScreen;
