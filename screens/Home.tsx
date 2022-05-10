import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Channel } from "../types"
import axios from 'axios'

import React, { useState, useEffect } from 'react'
import ChannelMin from '../components/ChannelMin'
import channelList from '../hooks/channelList'

const channels = [
  {
    id: '1',
    title: 'test',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
    urls: {
      logo_image: {
        original: "https://images.theabcdn.com/i/2612686"
      },
    } 
  }, {
    id: '2',
    title: 'test 2',
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    artistsHeadline: 'Post Malone, Drake, Eminem',
    urls: {
      logo_image: {
        original: "https://images.theabcdn.com/i/34101563"
      },
    } 
  },
  {
    id: '3',
    title: 'test 3',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
    artistsHeadline: 'Journey, Escape, Avicii',
    urls: {
      logo_image: {
        original: "https://images.theabcdn.com/i/4870275"
      },
    } 
  },
]

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Channels</Text>
      <FlatList
        data={channelList()}
        renderItem={({ item }) => <ChannelMin channel={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  }
});

export default Home