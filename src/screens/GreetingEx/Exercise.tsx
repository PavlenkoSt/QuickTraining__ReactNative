import { Dimensions, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useCallback, useState, memo } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import VideoPlayer from 'react-native-video-player'

import { IResult } from './index'
import CustomText from 'src/components/CustomText'
import { ExecutionExerciseEnum, IExercise } from 'src/types/ExerciseTypes'
import RepeatCounter from 'src/components/Exercise/RepeatCounter'
import CustomButton from 'src/components/CustomButton'
import RelaxTimer from 'src/components/Exercise/RelaxTimer'
import HoldCounter from 'src/components/Exercise/HoldCounter'

import useHoldEx from 'src/hooks/Exercise/useHoldEx'
import useRelaxEx from 'src/hooks/Exercise/useRelaxEx'
import ExerciseFooter from './ExerciseFooter'
import { useNavigation, StackActions } from '@react-navigation/native'
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
  })

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
            {counterType === ExecutionExerciseEnum.REPEAT
              ? 'Execute the maximum number of repetitions and fix the result'
              : 'Hold the position for as long as possible and fix the result'}
          </CustomText>
        )}
        <View style={styles.repeaterContainer}>
          {!!relaxTimer.current ? (
            <RelaxTimer value={relax} />
          ) : counterType === ExecutionExerciseEnum.REPEAT ? (
            <RepeatCounter count={count} setCount={setCount} />
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
        <ExerciseFooter
          testPlan={testPlan}
          activeIndex={activeIndex}
          testResult={testResult}
          exercisePercent={null}
        />
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
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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
})
