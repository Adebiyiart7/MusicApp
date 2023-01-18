import { ScrollView, View, StyleSheet } from "react-native";

// LOCAL IMPORTS
import colors from "../config/colors";

const Screen = ({ children, style, scrollable = true }) => {
  if (scrollable) {
    return (
      <ScrollView style={[styles.container, style]}>{children}</ScrollView>
    );
  }

  return <View style={[styles.container, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.background100,
  },
});