import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import defaultStyles from '../../config/styles';
import AppText from '../AppText';

const RecentlyPlayed = () => {
  return (
    <View style={styles.played}>
      <View style={defaultStyles.headingFlex}>
        <AppText style={defaultStyles.headingFont}>Recently Played</AppText>
        <TouchableOpacity>
          <AppText style={defaultStyles.seeAll}>See All</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RecentlyPlayed

const styles = StyleSheet.create({})