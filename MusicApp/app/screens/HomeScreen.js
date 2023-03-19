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
import Suggested from "../components/home/tabRenders/Suggested";
import Songs from "../components/home/tabRenders/Songs";
import Artists from "../components/home/tabRenders/Artists";
import Albums from "../components/home/tabRenders/Albums";
import Favorites from "../components/home/tabRenders/Favorites";
import Folders from "../components/home/tabRenders/Folders";
import routes from "../config/routes";

const tabData = [
  { _id: "1", name: "suggested" },
  { _id: "2", name: "songs" },
  { _id: "3", name: "artists" },
  { _id: "4", name: "albums" },
  { _id: "5", name: "favorites" },
  { _id: "6", name: "folders" }
];

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducers.scrollableTabs, {
    active: "suggested"
  });

  const Render = () => {
    if (state.active === "suggested") {
      return <Suggested />;
    }

    if (state.active === "songs") {
      return <Songs />;
    }

    if (state.active === "artists") {
      return <Artists />;
    }

    if (state.active === "albums") {
      return <Albums />;
    }

    if (state.active === "favorites") {
      return <Favorites />;
    }

    if (state.active === "folders") {
      return <Folders />;
    }
  };

  return (
    <Screen
      scrollable={false}
      header={
        <>
          <AppHeader
            RightIconExtra={
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.SEARCH)}
              >
                <Ionicons
                  color={colors.primaryText}
                  size={24}
                  name="search-outline"
                />
              </TouchableOpacity>
            }
            navigation={navigation}
            title={"Music"}
          />
          <ScrollableTabs data={tabData} state={state} dispatch={dispatch} />
        </>
      }
    >
      <Render />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
