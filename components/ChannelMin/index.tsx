import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ChannelProps } from '../../types'
import style from './style'
import { useNavigation } from '@react-navigation/native'

const index = (props: ChannelProps) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('ChannelDetail', {channel: props.channel})
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        <Image source={{ uri: props.channel.urls.logo_image.original }} style={style.image} />
        <View style={style.rightContainer}>
          <Text style={style.text}>{props.channel.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default index