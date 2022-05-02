import { Dimensions, View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import VideoPlayer from 'react-native-video-player'

import CustomText from './CustomText'

const Exercise = () => {
  return (
    <View>
      <CustomText>Ex</CustomText>
      <VideoPlayer
        video={require('src/assets/videos/ex/push-up.mp4')}
        videoWidth={1600}
        videoHeight={900}
        loop={true}
        repeat={true}
        autoplay={true}
        muted={true}
        onError={(e) => console.log(e)}
        disableFullscreen={true}
        disableControlsAutoHide={true}
        fullScreenOnLongPress={false}
        customStyles={{
          controls: {
            display: 'none',
          },
          seekBar: {
            display: 'none',
          },
        }}
      />
    </View>
  )
}

export default Exercise

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  video: {
    width,
    height: 200,
    flex: 1,
  },
})
