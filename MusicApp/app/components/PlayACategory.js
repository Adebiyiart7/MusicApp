import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import AppText from "../components/AppText";
import Card2 from "../components/cards/Card2";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "../config/routes";

const PlayACategory = ({
  image,
  title,
  subTitleLeft,
  subTitleRight,
  listTitle,
  listObj,
  actions,
  navigation,
  setClickedID,
  setMoreActionsBottomSheetVisible
}) => {
  const handleOnPress = (actionID, objectID) => {
    if (actionID === "1") {
      navigation.navigate(routes.PLAY_SONG, { _id: objectID });
    } else if (actionID === "2") {
      setClickedID(objectID);
      setMoreActionsBottomSheetVisible(true);
    }
  };

  return (
    <View>
      {image && <Image source={image} style={styles.image} />}
      <View style={styles.primaryDetails}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>
          {subTitleLeft} Albums &nbsp; |&nbsp; {subTitleRight} &nbsp; Songs
          &nbsp; |&nbsp; 05:35:55 mins
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
          <AppText style={styles.listTitle}>{listTitle}</AppText>
          <TouchableOpacity>
            <AppText style={defaultStyles.seeAll}>See All</AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.songList}>
          {listObj.map((item) => (
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
    </View>
  );
};

export default PlayACategory;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    alignSelf: "center",
    borderRadius: 30
  },
  title: {
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
  subTitle: {
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
