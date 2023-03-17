import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// LOCAL IMPORTS
import AppText from "../../AppText";
import defaultStyles from "../../../config/styles";
import colors from "../../../config/colors";
import BottomSheet from "../../BottomSheet";
import ListCard1 from "../../cards/ListCard1";
import ItemSeparatorComponent from "../../ItemSeparatorComponent";
import { sortData } from "./Songs";
import albums from "../../../db/albums";
import Card3 from "../../cards/Card3";

const Albums = () => {
  const [sortBottomSheetVisible, setSortBottomSheetVisible] = useState(false);
  useState(false);
  const navigation = useNavigation();

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
        <AppText style={defaultStyles.headingFont}>50 Albums</AppText>
        <TouchableOpacity onPress={() => setSortBottomSheetVisible(true)}>
          <AppText style={defaultStyles.seeAll}>
            Ascending &nbsp;
            <MaterialCommunityIcons name="sort" size={14} />
          </AppText>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={albums}
          columnWrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card3
              title={item.title}
              image={item.image}
              subTitle={`${item.artist}  |  ${item.year}`}
              subTitle2={`${item.numberOfSongs} songs`}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Albums;

const styles = StyleSheet.create({
  list: {
    marginTop: 8,
    marginBottom: 120
  }
});
