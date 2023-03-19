import React, { useReducer, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { useWindowDimensions } from "react-native";

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
import ScrollableTabs from "../components/ScrollableTabs";
import { tabData } from "./HomeScreen";
import reducers from "../reducers";

const SearchScreen = ({ navigation, route }) => {
  const [clickedID, setClickedID] = useState(null);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);
  
  const [state, dispatch] = useReducer(reducers.scrollableTabs, {
    active: "suggested"
  });

  const dimensions = useWindowDimensions();

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
        Obj={
          <TextInput
            style={[styles.input, { width: dimensions.width - 100 }]}
            name="search"
          />
        }
      />
      <ScrollableTabs data={tabData} state={state} dispatch={dispatch} />
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.background100,
    color: colors.primaryText,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: 10,
    fontSize: 15,
  }
});
