import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

// LOCAL IMPORTS
import RecentlyPlayed from '../RecentlyPlayed';
import Artists from '../Arists';
import MostPlayed from '../MostPlayed';

const Suggested = () => {
  return (
    <ScrollView>
      <RecentlyPlayed />
      <Artists />
      <MostPlayed />
    </ScrollView>
  );
}

export default Suggested

const styles = StyleSheet.create({})