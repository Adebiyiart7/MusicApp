import { StyleSheet, View } from 'react-native'
import React from 'react'

// LOCAL IMPORTS
import colors from '../config/colors';

const ItemSeparatorComponent = ({ style }) => {
  return <View style={[styles.view, style]} />;
};

export default ItemSeparatorComponent

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border100,
  },
});