import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import AppText from "../../AppText";
import defaultStyles from "../../../config/styles";
import colors from "../../../config/colors";
import Card2 from "../../cards/Card2";
import { songs } from "../../../db/recentlyPlayed";
import BottomSheet from "../../BottomSheet";
import ListCard from "../../cards/ListCard";

const Songs = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(true);

  const actions = [
    {
      _id: "0",
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
      _id: "1",
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

  const sortData = [
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
      title: "date added"
    },
    {
      _id: "6",
      title: "date modified"
    },
    {
      _id: "7",
      title: "composer"
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
              renderItem={({ item }) => <ListCard title={item.title} />}
            />
          </View>
        }
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      <View
        style={[
          defaultStyles.headingFlex,
          { borderBottomColor: colors.border100, borderBottomWidth: 1 }
        ]}
      >
        <AppText style={defaultStyles.headingFont}>700 songs</AppText>
        <TouchableOpacity onPress={() => setBottomSheetVisible(true)}>
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
              image={item.image}
              title={item.title}
              subTitle={{
                left: item.artist.name,
                right: `${item.duration} mins`
              }}
              actions={actions}
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
