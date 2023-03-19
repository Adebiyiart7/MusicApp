import React, { useReducer, useState } from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
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
import reducers from "../reducers";
import defaultStyles from "../config/styles";

 const tabData = [
  { _id: "2", name: "songs" },
  { _id: "3", name: "artists" },
  { _id: "4", name: "albums" },
  { _id: "5", name: "favorites" },
  { _id: "6", name: "folders" }
];

const SearchScreen = ({ navigation, route }) => {
  const [clickedID, setClickedID] = useState(null);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);

  const [state, dispatch] = useReducer(reducers.scrollableTabs, {
    active: "songs"
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
          <View>
            <Ionicons
              name="search-outline"
              color={colors.lightText}
              size={20}
              style={styles.searchIcon}
            />
            <TextInput
              style={[styles.input, { width: dimensions.width - 100 }]}
              name="search"
            />
            <TouchableOpacity style={styles.cancelInput}>
              <Feather name="x" color={colors.primaryColor} size={18} />
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollableTabs isChips data={tabData} state={state} dispatch={dispatch} />
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  cancelInput: {
    color: colors.primaryColor,
    zIndex: defaultStyles.zIndex,
    position: "absolute",
    right: 16,
    top: 13,
    fontSize: 18
  },
  input: {
    backgroundColor: colors.background200,
    color: colors.primaryText,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 10,
    marginLeft: 10,
    fontSize: 15
  },
  searchIcon: {
    position: "absolute",
    left: 25,
    top: 11,
    zIndex: defaultStyles.zIndex
  }
});
