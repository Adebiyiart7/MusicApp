import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useReducer } from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import ScrollableTabs from "../components/ScrollableTabs";
import reducers from "../reducers";
import defaultStyles from "../config/styles";

const tabData = [
  { _id: "1", name: "suggested" },
  { _id: "2", name: "songs" },
  { _id: "3", name: "artists" },
  { _id: "4", name: "albums" },
  { _id: "5", name: "favorites" }
];

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducers.scrollableTabs, {
    active: "suggested"
  });

  return (
    <Screen>
      <AppHeader
        RightIconExtra={
          <Ionicons name="search" size={24} color={colors.primaryText} />
        }
        navigation={navigation}
        title={"Music"}
      />
      <ScrollableTabs data={tabData} state={state} dispatch={dispatch} />
      <View style={defaultStyles.headingFlex}>
        <AppText style={defaultStyles.headingFont}>Recently Played</AppText>
        <TouchableOpacity><AppText style={defaultStyles.seeAll}>See All</AppText></TouchableOpacity>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
