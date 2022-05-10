import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Channel, ChannelProps } from '../types'
import ChannelHeader from '../components/ChannelHeader'

import React from 'react'
import AudioItem from '../components/AudioItem'
import audioList from '../hooks/audioList'

const audio = [
  {
    id: '1',
    title: 'ROD BRANSGROVE ON THE ASHES AND THE COUNTY GAME',
    urls: {
      high_mp3: "https://audioboom.com/posts/8014063-rod-bransgrove-on-the-ashes-and-the-county-game.mp3",
      wave_img: "https://images.theabcdn.com/i/w/9079032",
    },
  },
  {
    id: '2',
    title: 'EMILY WINDSOR ON UPCOMING WOMENS ASHES SERIES',
    urls: {
      high_mp3: "https://audioboom.com/posts/8010745-emily-windsor-on-upcoming-womens-ashes-series.mp3",
      wave_img: "https://images.theabcdn.com/i/w/9075324",
    },
  },
  {
    id: '3',
    title: 'LUCY NIGHTINGALE ON HATTRICK FOR EASTLEIGH LFC',
    urls: {
      high_mp3: "https://audioboom.com/posts/7980252-lucy-nightingale-on-hattrick-for-eastleigh-lfc.mp3",
      wave_img: "https://images.theabcdn.com/i/w/9042560",
    },
  }
]

const ChannelDetail = (props:any) => {
  const { channel } = props.route.params

  return (
    <View style={styles.container}>
      <ChannelHeader channel={channel} />
      <Text style={styles.title}>Audio List</Text>
      <FlatList
        data={audioList(channel.id)}
        renderItem={({ item }) => <AudioItem audio={item} />}
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
    marginTop: 20,
    margin: 10
  }
});

export default ChannelDetail