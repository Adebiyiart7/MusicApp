import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import { artists } from "../db/artists";
import { songs } from "../db/recentlyPlayed";
import routes from "../config/routes";
import BottomSheet from "../components/BottomSheet";
import MoreActions from "../components/songs/MoreActions";
import PlayACategory from "../components/PlayACategory";

const ArtistDetailsScreen = ({ navigation, route }) => {
  const [clickedID, setClickedID] = useState(null);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);

  const clickedObject = () => {
    return songs.find((item) => item._id === clickedID);
  };

  const artist = artists.find((item) => item._id === route.params._id);

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
    <Screen>
      <BottomSheet
        bottomSheetContent={<MoreActions item={clickedObject()} />}
        bottomSheetVisible={moreActionsBottomSheetVisible}
        setBottomSheetVisible={setMoreActionsBottomSheetVisible}
      />
      <AppHeader
        hasGoBack
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
      <PlayACategory
        image={artist.avatar}
        title={artist.name}
        subTitleRight={artist.songCount}
        subTitleLeft={artist.albumCount}
        listTitle={"Songs"}
        listObj={songs}
      />
    </Screen>
  );
};

export default ArtistDetailsScreen;
