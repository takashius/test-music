import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Channel } from "../../types"
import style from './style'

export type ChannelProps = {
  channel: Channel,
}

const index = (props: ChannelProps) => {
  const { channel } = props;
  return (
    <View style={style.container}>
      <Image source={{ uri: channel.urls.logo_image.original }} style={style.image} />
      <Text style={style.name}>{channel.title}</Text>
    </View>
  )
}

export default index