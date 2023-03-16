import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'

// LOCAL IMPORTS
import AppText from '../AppText'

const Card3 = ({title}) => {
  const dimension = useWindowDimensions();
  
  return (
    <View>
      <AppText>{title}</AppText>
    </View>
  )
}

export default Card3

const styles = StyleSheet.create({})