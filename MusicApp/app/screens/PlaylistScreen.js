import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import routes from "../config/routes";
import AppButton from "../components/AppButton";
import BottomSheet from "../components/BottomSheet";
import { sortData } from "../components/home/tabRenders/Songs";
import ListCard1 from "../components/cards/ListCard1";
import ItemSeparatorComponent from "../components/ItemSeparatorComponent";
import { useState } from "react";
import defaultStyles from "../config/styles";
import AppText from "../components/AppText";
import { songs } from "../db/recentlyPlayed";
import Card2 from "../components/cards/Card2";
import MoreActions from "../components/songs/MoreActions";

const PlaylistScreen = ({ navigation }) => {
  const [sortBottomSheetVisible, setSortBottomSheetVisible] = useState(false);
  const [clickedID, setClickedID] = useState(null);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);
  const [showAddBottomSheet, setShowAddBottomSheet] = useState(true);

  const clickedObject = () => {
    return songs.find((item) => item._id === clickedID);
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
          style={{ marginHorizontal: 5 }}
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
          style={{ marginHorizontal: 5 }}
        />
      )
    }
  ];

  const handleOnPress = (actionID, objectID) => {
    if (actionID === "1") {
      navigation.navigate(routes.PLAY_SONG, { _id: objectID });
    } else if (actionID === "2") {
      setClickedID(objectID);
      setMoreActionsBottomSheetVisible(true);
    }
  };

  const HeaderComponent = () => {
    return (
      <TouchableOpacity
        style={styles.addButtonComponent}
        onPress={() => setShowAddBottomSheet(true)}
      >
        <View style={styles.addIconContainer}>
          <MaterialCommunityIcons style={styles.addIcon} name="plus" />
        </View>
        <AppText style={styles.addText}>Add New Playlist</AppText>
      </TouchableOpacity>
    );
  };

  const AddNewPlaylistContent = () => {
    return (
      <View style={{ padding: 16, paddingTop: 0 }}>
        <AppText style={styles.addNewPlaylist.title}>New Playlist</AppText>
        <View style={styles.addNewPlaylist.line} />

        <TextInput value="Top 100 songs" style={styles.addNewPlaylist.input} />
        <View style={styles.addNewPlaylist.line} />
        <View style={styles.addNewPlaylist.btns}>
          <AppButton style={styles.addNewPlaylist.btnLeft} rounded secondary>
            Cancel
          </AppButton>
          <AppButton style={styles.addNewPlaylist.btnRight} rounded>
            Create
          </AppButton>
        </View>
      </View>
    );
  };

  return (
    <Screen
      scrollable={false}
      header={
        <>
          <AppHeader
            RightIconExtra={
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.SEARCH)}
              >
                <Ionicons
                  color={colors.primaryText}
                  size={24}
                  name="search-outline"
                />
              </TouchableOpacity>
            }
            navigation={navigation}
            title={"Favorites"}
          />
        </>
      }
    >
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

        <BottomSheet
          bottomSheetContent={<AddNewPlaylistContent />}
          bottomSheetVisible={showAddBottomSheet}
          setBottomSheetVisible={setShowAddBottomSheet}
        />
        <View
          style={[
            defaultStyles.headingFlex,
            { borderBottomColor: colors.border100, borderBottomWidth: 1 }
          ]}
        >
          <AppText style={defaultStyles.headingFont}>50 Favorites</AppText>
          <TouchableOpacity onPress={() => setSortBottomSheetVisible(true)}>
            <AppText style={defaultStyles.seeAll}>
              Ascending &nbsp;
              <MaterialCommunityIcons name="sort" size={14} />
            </AppText>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 6 }}
            showsVerticalScrollIndicator={false}
            data={songs}
            ListHeaderComponent={<HeaderComponent />}
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
      </View>
    </Screen>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
  addButtonComponent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  addNewPlaylist: {
    btns: {
      display: "flex",
      flexDirection: "row"
    },
    btnLeft: { flex: 1, marginRight: 10 },
    btnRight: { flex: 1, marginLeft: 10 },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      marginBottom: 10,
    },
    input: {
      color: colors.primaryText,
      padding: 10,
      paddingHorizontal: 20,
      fontSize: 15,
      borderRadius: 16,
      marginVertical: 10,
      backgroundColor: colors.background200
    },
    line: {
      borderTopWidth: 1,
      borderTopColor: colors.border100,
      marginVertical: 10,
    }
  },
  addText: {
    fontWeight: "bold",
    fontSize: 18
  },
  addIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    padding: 23,
    marginBottom: 6,
    marginRight: 15,
    backgroundColor: colors.primaryColor,
    borderRadius: 50
  },
  addIcon: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    color: colors.primaryText,
    fontSize: 30
  }
});
