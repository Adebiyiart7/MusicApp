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

const ScrollableTabs = ({ data, state, dispatch, isChips }) => {
  const activeStyle = () => {
    if (isChips) {
      return {
        item: {
          borderWidth: 2,
          borderRadius: 20,
          borderColor: colors.primaryColor,
          borderRadius: 20,
          backgroundColor: colors.primaryColor
        },
        text: {
          color: colors.primaryText,
          fontWeight: "500"
        }
      };
    }

    return {
      item: {
        borderBottomWidth: 3,
        borderBottomColor: colors.primaryColor
      },
      text: {
        color: colors.primaryColor,
        fontWeight: "500"
      }
    };
  };

  return (
    <View style={styles.tabs}>
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
              state.active === item.name ? activeStyle().item : {}
            ]}
            key={index}
            onPress={() =>
              dispatch({ type: "activeScrollableTab", payload: item.name })
            }
          >
            <AppText
              style={[
                styles.text,
                state.active === item.name ? activeStyle().text : {}
              ]}
            >
              {item.name}
            </AppText>
          </TouchableOpacity>
        )}
      />
      {!isChips && <View style={styles.line} />}
    </View>
  );
};

export default ScrollableTabs;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.primaryColor,
    marginRight: 14,
  },
  line: {
    position: "absolute",
    width: "100%",
    bottom: 1,
    zIndex: -1,
    borderTopColor: colors.border100,
    borderTopWidth: 1,
    paddingBottom: -10
  },
  list: {},
  tabs: {
    position: "relative"
  },
  text: {
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.lightText
  }
});
