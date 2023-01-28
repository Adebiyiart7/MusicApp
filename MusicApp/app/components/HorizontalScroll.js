import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

const HorizontalScroll = ({data, renderer }) => {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => renderer(item)}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={<View style={{ marginRight: 12 }} />}
    />
  );
}

export default HorizontalScroll

const styles = StyleSheet.create({})