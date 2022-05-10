import React from 'react';
import {Image, View, Dimensions} from 'react-native';

export default function AlbumArt(props:any) {
    const { url } = props
  return (
    <View style={{margin: 20}}>
      <Image
        resizeMode="contain"
        source={{uri: url}}
        style={{width: 300, height: 300, borderRadius: 20}}
      />
    </View>
  );
}