import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";

// LOCAL IMPORTS
import AppText from "../../AppText";
import BottomSheet from "../../BottomSheet";
import ListCard1 from "../../cards/ListCard1";
import ItemSeparatorComponent from "../../ItemSeparatorComponent";
import defaultStyles from "../../../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { sortData } from "./Songs";
import colors from "../../../config/colors";
import folders from "../../../db/folrders";
import Card2 from "../../cards/Card2";

const Folders = () => {
  const [sortBottomSheetVisible, setSortBottomSheetVisible] = useState(false);

  
  const actions = [
    {
      _id: "1",
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
      <View
        style={[
          defaultStyles.headingFlex,
          { borderBottomColor: colors.border100, borderBottomWidth: 1 }
        ]}
      >
        <AppText style={defaultStyles.headingFont}>8 folders</AppText>
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
          data={folders}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card2
              _id={item._id}
              Icon={
                <MaterialCommunityIcons
                  name="folder"
                  color={colors.primaryColor}
                  size={60}
                />
              }
              title={item.title}
              subTitle={{
                left: item.numOfSongs
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

export default Folders;

const styles = StyleSheet.create({});
