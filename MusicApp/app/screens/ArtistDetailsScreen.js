import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// LOCAL IMPORTS
import Screen from '../components/Screen'
import AppHeader from '../components/AppHeader'
import colors from '../config/colors';
import AppText from '../components/AppText';

const ArtistDetailsScreen = ({navigation, route}) => {
  return (
    <Screen>
      <AppHeader
        hasGoBack
        navigation={navigation}
        RightIcon={
          <Ionicons
            color={colors.primaryText}
            size={24}
            name="search-outline"
          />
        }
        RightIconExtra={
          <MaterialCommunityIcons
            color={colors.primaryText}
            size={24}
            name="dots-horizontal-circle-outline"
          />
        }
      />
      <AppText>ArtistDetailsScreen {route.params._id}</AppText>
    </Screen>
  );
}

export default ArtistDetailsScreen

const styles = StyleSheet.create({})