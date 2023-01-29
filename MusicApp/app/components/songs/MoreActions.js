import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

// LOCAL IMPORTS
import Card2 from '../cards/Card2';
import colors from '../../config/colors';

const MoreActions = ({ item }) => {
  
  const handleOnPress = () => {

  }
  
  const actions = [
    {
      _id: "1",
      actions: "favorite",
      obj: (
        <Ionicons
          name="heart-outline"
          color={colors.primaryText}
          size={30}
          style={styles.icons}
        />
      )
    },

  ];
  return (
    <View style={styles.container}>
      <Card2
        image={item.image}
        title={item.title}
        subTitle={{
          left: item.artist.name,
          right: `${item.duration} mins`
        }}
        actions={actions}
        onPress={(actionID) => handleOnPress(actionID, item._id)}
      />
    </View>
  );
}

export default MoreActions


const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
  },
  icons: {
    marginLeft: 14
  }
});
