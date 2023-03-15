import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { artists } from "../db/artists";
import { songs } from "../db/recentlyPlayed";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import Card2 from "../components/cards/Card2";
import routes from "../config/routes";
import BottomSheet from "../components/BottomSheet";
import MoreActions from "../components/songs/MoreActions";

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
      <Image source={artist.avatar} style={styles.avatar} />
      <View style={styles.primaryDetails}>
        <AppText style={styles.artistName}>{artist.name}</AppText>
        <AppText style={styles.numOfArtistAlbumAndSongs}>
          {artist.albumCount} Albums &nbsp; |&nbsp; {artist.songCount} &nbsp;
          Songs &nbsp; |&nbsp; 05:35:55 mins
        </AppText>
      </View>
      <View style={styles.buttons}>
        <AppButton
          rounded
          style={[styles.button, styles.shuffleButton]}
          textStyle={styles.buttonTextStyles}
        >
          <MaterialCommunityIcons name="shuffle" size={20} />
          &nbsp; &nbsp;Shuffle
        </AppButton>
        <AppButton
          rounded
          style={[styles.button, styles.playButton]}
          textStyle={styles.buttonTextStyles}
        >
          <MaterialCommunityIcons
            name="play-circle"
            size={20}
            color={colors.primaryColor}
          />
          &nbsp; &nbsp;Play
        </AppButton>
      </View>
      <View style={styles.songs}>
        <View style={styles.header}>
          <AppText style={styles.listTitle}>Songs</AppText>
          <TouchableOpacity>
            <AppText style={defaultStyles.seeAll}>See All</AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.songList}>
          {songs.map((item) => (
            <View key={item._id}>
              <Card2
                image={item.image}
                title={item.title}
                subTitle={{ left: item.artist.name }}
                actions={actions}
                onPress={(actionID) => handleOnPress(actionID, item._id)}
              />
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
};

export default ArtistDetailsScreen;

const styles = StyleSheet.create({
  avatar: {
    height: 250,
    width: 250,
    alignSelf: "center",
    borderRadius: 30
  },
  artistName: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  button: {
    flex: 1
  },
  buttons: {
    display: "flex",
    flexDirection: "row"
  },
  buttonTextStyles: {
    color: colors.primaryText
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  numOfArtistAlbumAndSongs: {
    color: colors.lightText,
    textAlign: "center",
    marginVertical: 5
  },
  playButton: {
    marginLeft: 5,
    backgroundColor: colors.border100
  },
  primaryDetails: {
    marginTop: 16
  },
  songs: {
    borderTopColor: colors.border100,
    borderTopWidth: 1,
    paddingTop: 16,
    marginTop: 16
  },
  shuffleButton: {
    marginRight: 10
  }
});
