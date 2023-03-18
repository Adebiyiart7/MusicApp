import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// LOCAL IMPORTS
import AppText from "../../AppText";
import defaultStyles from "../../../config/styles";
import colors from "../../../config/colors";
import Card2 from "../../cards/Card2";
import { songs } from "../../../db/recentlyPlayed";
import BottomSheet from "../../BottomSheet";
import ListCard1 from "../../cards/ListCard1";
import ItemSeparatorComponent from "../../ItemSeparatorComponent";
import MoreActions from "../../songs/MoreActions";
import routes from "../../../config/routes";

export const sortData = [
  {
    _id: "1",
    title: "ascending"
  },
  {
    _id: "2",
    title: "descending"
  },
  {
    _id: "3",
    title: "artist"
  },
  {
    _id: "4",
    title: "album"
  },
  {
    _id: "5",
    title: "year"
  },
  {
    _id: "6",
    title: "date added"
  },
  {
    _id: "7",
    title: "date modified"
  },
  {
    _id: "8",
    title: "composer"
  }
];

const Songs = () => {
  const [clickedID, setClickedID] = useState(null);
  const [sortBottomSheetVisible, setSortBottomSheetVisible] = useState(false);
  const [moreActionsBottomSheetVisible, setMoreActionsBottomSheetVisible] =
    useState(false);

  const navigation = useNavigation();

  const clickedObject = () => {
    return songs.find((item) => item._id === clickedID);
  };

  const handleOnPress = (actionID, objectID) => {
    setClickedID(objectID);
    setMoreActionsBottomSheetVisible(true);
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
          style={styles.icons}
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
          style={styles.icons}
        />
      )
    }
  ];

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
        <AppText style={defaultStyles.headingFont}>700 songs</AppText>
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
          data={songs}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card2
              _id={item._id}
              image={item.image}
              title={item.title}
              subTitle={{
                left: item.artist.name,
                right: `${item.duration} mins`
              }}
              actions={actions}
              onPress={(actionID) => handleOnPress(actionID, item._id)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  icons: {
    marginLeft: 14
  }
});
