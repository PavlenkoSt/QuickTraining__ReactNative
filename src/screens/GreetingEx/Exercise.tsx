import { Dimensions, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import VideoPlayer from 'react-native-video-player'

import CustomText from 'src/components/CustomText'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'
import RepeatCounter from 'src/components/Exercise/RepeatCounter'

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
  isTest?: boolean
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
  isTest,
}) => {
  const [count, setCount] = useState(0)

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
      <View style={styles.container}>
        <CustomText style={styles.name}>{name}</CustomText>
        {isTest && (
          <CustomText style={styles.description}>
            Execute the maximum number of repetitions and fix the result
          </CustomText>
        )}
        <View style={styles.repeaterContainer}>
          <RepeatCounter count={count} setCount={setCount} />
        </View>
      </View>
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
  container: {
    paddingHorizontal: 15,
  },
  name: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 26,
    fontFamily: '$fontBold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 40,
    fontSize: 13,
    marginBottom: 30,
  },
  repeaterContainer: {
    marginBottom: 30,
  },
})
