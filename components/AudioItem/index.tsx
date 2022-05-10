import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Audio } from '../../types'
import style from './style'
import { useNavigation } from '@react-navigation/native'

export type AudioProps = {
  audio: Audio,
}

const index = (props: AudioProps) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('PlayerScreen', {audioDetail: props.audio})
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        <Image source={{ uri: props.audio.urls.wave_img }} style={style.image} />
        <View style={style.rightContainer}>
          <Text style={style.text}>{props.audio.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default index