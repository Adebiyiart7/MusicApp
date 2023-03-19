import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import { songs } from "../db/recentlyPlayed";
import BottomSheet from "../components/BottomSheet";
import MoreActions from "../components/songs/MoreActions";
import PlayACategory from "../components/PlayACategory";
import folders from "../db/folrders";

const ArtistDetailsScreen = ({ navigation, route }) => {
  const [clickedID, setClickedID] = useState(null);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);

  const clickedObject = () => {
    return songs.find((item) => item._id === clickedID);
  };

  const folder = folders.find((item) => item._id === route.params._id);

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
        Icon={
          <MaterialCommunityIcons
            name="folder"
            size={200}
            color={colors.primaryColor}
          />
        }
        title={folder.title}
        subTitleRight={`${folder.numOfSongs} Folders`}
        subTitleLeft={folder.totalTimeOfSongs}
        listTitle={"Songs"}
        listObj={songs}
        actions={actions}
        navigation={navigation}
        setClickedID={setClickedID}
        setMoreActionsBottomSheetVisible={setMoreActionsBottomSheetVisible}
      />
    </Screen>
  );
};

export default ArtistDetailsScreen;
