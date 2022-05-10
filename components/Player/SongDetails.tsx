import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SongDetails(props:any) {
    const {artistName, songName} = props
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{artistName}</Text>
      <Text style={styles.text}>{songName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});