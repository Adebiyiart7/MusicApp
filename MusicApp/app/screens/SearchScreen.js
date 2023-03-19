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
import routes from "../config/routes";
import { TouchableOpacity } from "react-native";

const SearchScreen = ({ navigation, route }) => {
  const [clickedID, setClickedID] = useState(null);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);

  const clickedObject = () => {
    return songs.find((item) => item._id === clickedID);
  };

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

      />

    </Screen>
  );
};

export default SearchScreen;
