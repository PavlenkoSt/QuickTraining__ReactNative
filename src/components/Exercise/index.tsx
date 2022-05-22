import { Dimensions, useWindowDimensions, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useState, memo } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import VideoPlayer from 'react-native-video-player'

import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import { IResult } from 'src/screens/FirstTestExercises/index'
import CustomText from 'src/components/CustomText'
import { ExecutionExerciseEnum, IExercise } from 'src/types/ExerciseTypes'
import RepeatCounter from 'src/components/Exercise/RepeatCounter'
import CustomButton from 'src/components/CustomButton'
import RelaxTimer from 'src/components/Exercise/RelaxTimer'
import HoldCounter from 'src/components/Exercise/HoldCounter'
import ExerciseFooter from 'src/components/Exercise/ExerciseFooter'

import useHoldEx from 'src/hooks/Exercise/useHoldEx'
import useRelaxEx from 'src/hooks/Exercise/useRelaxEx'
import useFlowEx from 'src/hooks/Exercise/useFlowEx'

type ExercisePropsType = {
  activeIndex: number
  active: boolean
  name: string
  relaxDelation: number
  toNextExercise: () => void
  isLast: boolean
  video: NodeRequire
  counterType: ExecutionExerciseEnum
  testResult: IResult[]
  setTestResult: Dispatch<SetStateAction<IResult[]>>
  testPlan: IExercise[]
  isTest?: boolean
  userInfo?: {
    name: string
    age: number
    duration: DurationEnum
    gender: GenderEnum
  }

  needCount?: number
}

const Exercise: FC<ExercisePropsType> = ({
  active,
  activeIndex,
  name,
  relaxDelation,
  isLast,
  video,
  counterType,
  testResult,
  isTest,
  testPlan,
  setTestResult,
  toNextExercise,
  userInfo,

  needCount,
}) => {
  const [count, setCount] = useState(0)

  const { relax, relaxTimer, startRelaxTimer } = useRelaxEx({ relaxDelation, toNextExercise })

  const { time, timer, startTimer, stopTimer } = useHoldEx()

  const { done } = useFlowEx({
    counterType,
    testResult,
    isLast,
    count,
    name,
    time,
    setTestResult,
    startRelaxTimer,
    stopTimer,
    isTest,
    userInfo,
  })

  const { width } = useWindowDimensions()

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
            wrapper: {
              marginTop: 20,
              height: 230,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            },
            video: {
              width,
            },
          }}
        />
      </View>
      <View style={styles.container}>
        <CustomText style={styles.name}>{name}</CustomText>
        {isTest && (
          <CustomText style={styles.description}>
            {counterType === ExecutionExerciseEnum.REPEAT
              ? 'Execute the maximum number of repetitions and fix the result'
              : 'Hold the position for as long as possible and fix the result'}
          </CustomText>
        )}
        <View style={styles.repeaterContainer}>
          {!!relaxTimer.current ? (
            <RelaxTimer value={relax} />
          ) : counterType === ExecutionExerciseEnum.REPEAT ? (
            <RepeatCounter count={count} setCount={setCount} needCount={needCount} />
          ) : (
            <HoldCounter time={time} />
          )}
        </View>
        <View style={styles.btnContainer}>
          {!!relaxTimer.current ? (
            <CustomButton
              onPress={toNextExercise}
              styles={[styles.btn, styles.btnWide]}
              textStyles={styles.btnText}
            >
              Go to next exercise
            </CustomButton>
          ) : counterType === ExecutionExerciseEnum.HOLD && !timer.current ? (
            <CustomButton onPress={startTimer} styles={styles.btn} textStyles={styles.btnText}>
              Start
            </CustomButton>
          ) : (
            <CustomButton onPress={done} styles={styles.btn} textStyles={styles.btnText}>
              Done
            </CustomButton>
          )}
        </View>
        <ExerciseFooter testPlan={testPlan} activeIndex={activeIndex} testResult={testResult} />
        <View style={styles.closeBtnContainer}>
          <CustomButton small danger>
            Finish training
          </CustomButton>
        </View>
      </View>
    </View>
  )
}

export default memo(Exercise)

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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
    fontFamily: '$fontBold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 40,
    fontSize: 13,
    marginBottom: 20,
  },
  repeaterContainer: {
    marginBottom: 20,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnWide: {
    width: 180,
  },
  btn: {
    width: 100,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: '$fontMedium',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  closeBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
})
