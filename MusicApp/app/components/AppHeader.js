import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppHeader = ({
  title,
  navigation,
  RightIcon,
  RightIconExtra,
  hasGoBack,
  Obj
}) => {
  const screenWidth = Dimensions.get("screen").width;

  return (
    <View style={styles.container}>
      {hasGoBack && (
        <TouchableOpacity style={styles.left}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            style={styles.arrow}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        {!hasGoBack && (
          <Image
            source={require("../assets/images/logo-outline.png")}
            style={{ height: 30, width: 30 }}
          />
        )}
        {!Obj && (
          <AppText
            numberOfLines={1}
            style={[styles.title, { width: screenWidth - 138 }]}
          >
            {title}
          </AppText>
        )}
        {Obj && Obj}
      </View>
      {RightIcon && (
        <TouchableOpacity style={styles.right}>{RightIcon}</TouchableOpacity>
      )}
      {RightIconExtra && (
        <TouchableOpacity style={{ ...styles.right, ...styles.rightExtra }}>
          {RightIconExtra}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  arrow: {
    color: defaultStyles.colors.primaryText,
    backgroundColor: defaultStyles.colors.background100,
    padding: 10,
    borderRadius: 50
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    minHeight: 70
  },
  left: {},
  right: {
    position: "absolute",
    right: 40,
    color: defaultStyles.colors.primaryText,
    backgroundColor: defaultStyles.colors.background100,
    padding: 10,
    borderRadius: 50
  },
  rightExtra: {
    right: 0
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  }
});
