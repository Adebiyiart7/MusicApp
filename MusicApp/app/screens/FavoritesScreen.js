import {
  FlatList,
  StyleSheet,
  Text,
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

const FavoriteScreen = ({ navigation }) => {
  const [sortBottomSheetVisible, setSortBottomSheetVisible] = useState(false);
  const [clickedID, setClickedID] = useState(null);
    const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
useState(false)
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
          style={{marginHorizontal: 5}}
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
          style={{marginHorizontal: 5}}
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
          <View style={styles.buttons}>
            <AppButton style={[styles.button, styles.shuffleButton]} rounded>
              <MaterialCommunityIcons name="shuffle" size={20} />
              Shuffle
            </AppButton>
            <AppButton
              style={[styles.button, styles.playButton]}
              rounded
              secondary
            >
              <MaterialCommunityIcons name="play-circle" size={20} />
              Play
            </AppButton>
          </View>
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

export default FavoriteScreen;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    color: colors.white
  },
  buttons: {
    display: "flex",
    flexDirection: "row"
  },
  playButton: {
    marginLeft: 10
  },
  shuffleButton: {
    marginRight: 10
  }
});
