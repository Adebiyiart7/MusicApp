import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const ScrollableTabs = ({ data, state, dispatch }) => {
  
  const activeStyle = {
    item: {
      borderBottomWidth: 3,
      borderBottomColor: colors.primaryColor,
    },
    text: {
      color: colors.primaryColor,
      fontWeight: "500"
    }
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.item,
              state.active === item.name ? activeStyle.item : {}
            ]}
            key={index}
            onPress={() =>
              dispatch({type: "activeScrollableTab", payload: item.name})
            }
          >
            <AppText
              style={[
                styles.text,
                state.active === item.name ? activeStyle.text : {}
              ]}
            >
              {item.name}
            </AppText>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ScrollableTabs;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.lightText
  },
  list: {}
});
