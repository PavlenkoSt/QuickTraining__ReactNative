import { Dimensions, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import VideoPlayer from 'react-native-video-player'

import CustomText from 'src/components/CustomText'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'

type ExercisePropsType = {
  active: boolean
  name: string
  relaxDelation: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  indexToNextExercise: number
  isLast: boolean
  video: NodeRequire
  counterType: ExecutionExerciseEnum
  testResult: Object | null
  setTestResult: Dispatch<SetStateAction<Object | null>>
}

const Exercise: FC<ExercisePropsType> = ({
  active,
  name,
  relaxDelation,
  setActiveIndex,
  indexToNextExercise,
  isLast,
  video,
  counterType,
  testResult,
}) => {
  if (!active) return null

  return (
    <View>
      <View>
        <VideoPlayer
          video={video as unknown as number}
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
      <CustomText>{name}</CustomText>
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
