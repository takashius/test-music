import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Audio, AVPlaybackStatus } from 'expo-av'

import AlbumArt from '../components/Player/AlbumArt'
import Control from '../components/Player/Control'
import SongDetails from '../components/Player/SongDetails'
import { Sound } from 'expo-av/build/Audio'

const PlayerScreen = (props: any) => {
  const { audioDetail } = props.route.params
  const [pause, setPause] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState<Sound>();
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus>();
  const [song, setSong] = useState<string>('');

  useEffect(() => {
    if (playbackObject === undefined) {
      setPlaybackObject(new Audio.Sound());
      setSong(audioDetail.urls.high_mp3);
    }

    return () => {
      dismountAudio();
    }
  }, []);

  const dismountAudio = async () => {
    if (playbackObject !== undefined){
      const status = await playbackObject.unloadAsync()
    }
  }

  const handleAudioPlayPause = async () => {
    try {
      if (playbackObject !== undefined && playbackStatus === undefined) {
        const status = await playbackObject.loadAsync(
          { uri: song },
          { shouldPlay: true }
        );
        setIsPlaying(true);
        return setPlaybackStatus(status);
      }
    } catch (e) {
      console.log(e);
    }

    try {
      // It will resume our audio
      if (!isPlaying && playbackObject !== undefined) {
        const status = await playbackObject.playAsync();
        setIsPlaying(true);
        return setPlaybackStatus(status);
      }
    } catch (e) {
      console.log('resume', e)
    }
  }

  function onPlay() {
    handleAudioPlayPause();
    setPause(false);
  }

  async function onPause() {
    try {
      // It will pause our audio
      if (isPlaying && playbackObject !== undefined) {
        const status = await playbackObject.pauseAsync();
        setIsPlaying(false);
        setPause(true);
        return setPlaybackStatus(status);
      }
    } catch (e) {
      console.log('pause', e)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <AlbumArt url={audioDetail.urls.wave_img} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <SongDetails
            songName={audioDetail.title}
          />
          <Control {...{ pause, onPause, onPlay }} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default PlayerScreen