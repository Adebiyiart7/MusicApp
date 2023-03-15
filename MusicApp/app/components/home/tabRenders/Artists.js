import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// LOCAL IMPORTS
import AppText from "../../AppText";
import defaultStyles from "../../../config/styles";
import colors from "../../../config/colors";
import Card2 from "../../cards/Card2";
import BottomSheet from "../../BottomSheet";
import ListCard1 from "../../cards/ListCard1";
import ItemSeparatorComponent from "../../ItemSeparatorComponent";
import { sortData } from "./Songs";
import { artists } from "../../../db/artists";
import OptionCard from "../../songs/OptionCard";
import routes from "../../../config/routes";

const Artists = () => {
  const [artistToShow, setArtistToShow] = useState("");
  const [sortBottomSheetVisible, setSortBottomSheetVisible] = useState(false);
  const [artistBottomSheetVisible, setArtistBottomSheetVisible] =
    useState(false);
  const navigation = useNavigation();

  const artistOptions = [
    {
      name: "Play",
      icon: (
        <MaterialCommunityIcons
          size={25}
          color={colors.lightText}
          name="play-circle-outline"
        />
      )
    },
    {
      name: "Play Next",
      icon: (
        <MaterialCommunityIcons
          size={25}
          color={colors.lightText}
          name="skip-next-circle-outline"
        />
      )
    },
    {
      name: "Add to Playing Queue",
      icon: (
        <MaterialCommunityIcons
          size={25}
          color={colors.lightText}
          name="clipboard-play-multiple-outline"
        />
      )
    },
    {
      name: "Add to Play List",
      icon: (
        <MaterialCommunityIcons
          size={25}
          color={colors.lightText}
          name="playlist-plus"
        />
      )
    },
    {
      name: "Share",
      icon: (
        <MaterialCommunityIcons
          size={25}
          color={colors.lightText}
          name="share-outline"
        />
      )
    }
  ];

  const Artist = () => {
    const artist = artists.find((item) => item._id === artistToShow);

    if (!artist)
      return (
        <AppText style={styles.gettingArtist}>Error Getting Artist</AppText>
      );

    return (
      <View style={styles.artist}>
        <TouchableOpacity onPress={() => {
          setArtistBottomSheetVisible(false)
          navigation.navigate(routes.ARTIST_DETAILS, {
          _id: artist._id,
        })}}>

        <Card2
          rounded
          _id={artist._id}
          image={artist.avatar}
          title={artist.name}
          subTitle={{
            left: `${artist.albumCount} albums`,
            right: `${artist.songCount} songs`
          }}
          />
          </TouchableOpacity>

        <View style={styles.artistOptions}>
          <FlatList
            data={artistOptions}
            key={(item) => item.name}
            renderItem={({ item }) => <OptionCard item={item} />}
          />
        </View>
      </View>
    );
  };

  return (
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
        bottomSheetContent={<Artist />}
        bottomSheetVisible={artistBottomSheetVisible}
        setBottomSheetVisible={setArtistBottomSheetVisible}
      />
      <View
        style={[
          defaultStyles.headingFlex,
          { borderBottomColor: colors.border100, borderBottomWidth: 1 }
        ]}
      >
        <AppText style={defaultStyles.headingFont}>18 artists</AppText>
        <TouchableOpacity onPress={() => setSortBottomSheetVisible(true)}>
          <AppText style={defaultStyles.seeAll}>
            Ascending &nbsp;
            <MaterialCommunityIcons name="sort" size={14} />
          </AppText>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={artists}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setArtistToShow(item._id);
                setArtistBottomSheetVisible(true);
              }}
            >
              <Card2
                rounded
                _id={item._id}
                image={item.avatar}
                title={item.name}
                subTitle={{
                  left: `${item.albumCount} albums`,
                  right: `${item.songCount} songs`
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Artists;

const styles = StyleSheet.create({
  artist: {
    padding: 16,
    paddingTop: 0
  },
  artistOptions: {
    borderTopColor: colors.border100,
    borderTopWidth: 1,
    paddingTop: 16,
    marginTop: 16,
  },
  icons: {
    marginLeft: 14
  },
  gettingArtist: {
    textAlign: "center",
    color: colors.mediumText,
    marginBottom: 20
  }
});
