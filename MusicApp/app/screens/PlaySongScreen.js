import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { songs } from "../../app/db/recentlyPlayed";
import PlayTimeScale from "../components/PlayTimeScale";
import BottomSheet from "../components/BottomSheet";

const PlaySongScreen = ({ navigation, route }) => {
  const [bottomSheetVisibleLyrics, setBottomSheetVisibleLyrics] =
    useState(false);

  const BottomSheetContentLyrics = () => {
    return (
      <View style={styles.lyrics}>
        <AppText numberOfLines={1} style={styles.lyricsTitle}>
          {song.title}
        </AppText>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.lyricsParagraphView}>
          <AppText style={styles.lyricsParagraph}>
            Verse 1: Imagine there's no heaven It's easy if you try No hell
            below us Above us, only sky Imagine all the people Living for
            today... Ah...
          </AppText>
          <AppText style={styles.lyricsParagraph}>
            Verse 2: Imagine there's no countries It isn't hard to do Nothing to
            kill or die for And no religion, too Imagine all the people Living
            life in peace... You...
          </AppText>
          <AppText style={styles.lyricsParagraph}>
            Chorus: You may say I'm a dreamer But I'm not the only one I hope
            someday you'll join us And the world will be as one
          </AppText>
          <AppText style={styles.lyricsParagraph}>
            Verse 3: Imagine no possessions I wonder if you can No need for
            greed or hunger A brotherhood of man Imagine all the people Sharing
            all the world... You...
          </AppText>
          <AppText style={styles.lyricsParagraph}>
            Chorus: You may say I'm a dreamer But I'm not the only one I hope
            someday you'll join us And the world will live as one.{" "}
          </AppText>
        </ScrollView>
      </View>
    );
  };

  const song = songs.find((song) => song._id === route.params._id);

  return (
    <Screen>
      <AppHeader
        hasGoBack
        navigation={navigation}
        RightIconExtra={
          <MaterialCommunityIcons
            color={colors.primaryText}
            size={24}
            name="dots-horizontal-circle-outline"
          />
        }
      />
      <View style={styles.top}>
        <Image source={song.image} style={styles.image} />
        <AppText numberOfLines={1} style={styles.artistName}>
          {song.artist.name}
        </AppText>
        <AppText numberOfLines={1} style={styles.title}>
          {song.title}
        </AppText>
      </View>
      <View style={styles.controls}>
        <PlayTimeScale duration={song.duration} />
        <View style={styles.majorControls}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="skip-previous"
              size={30}
              color={colors.primaryText}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="rewind-10"
              size={30}
              color={colors.primaryText}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="play-circle"
              size={66}
              color={colors.primaryColor}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="fast-forward-10"
              size={30}
              color={colors.primaryText}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="skip-next"
              size={30}
              color={colors.primaryText}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.moreControls}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="speedometer"
              size={26}
              color={colors.primaryText}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="timer-outline"
              size={26}
              color={colors.primaryText}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cast"
              size={26}
              color={colors.primaryText}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={26}
              color={colors.primaryText}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.lyricsButton}
          onPress={() => setBottomSheetVisibleLyrics(!bottomSheetVisibleLyrics)}
        >
          <MaterialCommunityIcons
            name="chevron-up"
            size={20}
            color={colors.primaryText}
          />
          <AppText>Lyrics</AppText>
        </TouchableOpacity>
      </View>
      <BottomSheet
        bottomSheetContent={<BottomSheetContentLyrics />}
        bottomSheetVisible={bottomSheetVisibleLyrics}
        setBottomSheetVisible={setBottomSheetVisibleLyrics}
      />
    </Screen>
  );
};

export default PlaySongScreen;

const styles = StyleSheet.create({
  artistName: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20
  },
  controls: {
    alignItems: "center",
    paddingVertical: 18,
    width: "100%"
  },
  image: {
    height: 270,
    width: "100%",
    borderRadius: 25
  },
  lyrics: {
    padding: 16
  },
  lyricsParagraph: {
    marginTop: 16,
    fontSize: 16,
    color: colors.lightText
  },
  lyricsButton: {
    alignItems: "center",
    marginTop: 20
  },
  lyricsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  
  lyricsParagraphView: {
    maxHeight: 300
  },
  majorControls: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    marginTop: 10
  },
  moreControls: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    marginTop: 16
  },
  title: {
    fontSize: 16,
    marginVertical: 10
  },
  top: {
    borderBottomColor: colors.border100,
    borderBottomWidth: 1,
    alignItems: "center"
  }
});
