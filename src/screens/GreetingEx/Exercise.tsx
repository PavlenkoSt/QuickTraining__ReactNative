import { Dimensions, View } from 'react-native'
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import VideoPlayer from 'react-native-video-player'

import CustomText from 'src/components/CustomText'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'
import RepeatCounter from 'src/components/Exercise/RepeatCounter'
import CustomButton from 'src/components/CustomButton'
import { IResult } from '.'
import RelaxTimer from 'src/components/Exercise/RelaxTimer'

type ExercisePropsType = {
  active: boolean
  name: string
  relaxDelation: number
  toNextExercise: () => void
  isLast: boolean
  video: NodeRequire
  counterType: ExecutionExerciseEnum
  testResult: IResult[]
  setTestResult: Dispatch<SetStateAction<IResult[]>>
  isTest?: boolean
}

const Exercise: FC<ExercisePropsType> = ({
  active,
  name,
  relaxDelation,
  isLast,
  video,
  counterType,
  testResult,
  isTest,
  setTestResult,
  toNextExercise,
}) => {
  const [count, setCount] = useState(0)
  const [relax, setRelax] = useState(() => relaxDelation)

  const relaxTimer = useRef<any>(null)

  const startRelaxTimer = () => {
    relaxTimer.current = setInterval(() => {
      setRelax((prev) => prev - 1)
    }, 1000)
  }

  const clearRelaxTimer = () => {
    clearInterval(relaxTimer.current)
    relaxTimer.current = null
    console.log('clear !')
  }

  const done = useCallback(() => {
    setTestResult((prev) => [...prev, { name, result: count }])

    if (!isLast) {
      startRelaxTimer()
      // toNextExercise()
    } else {
    }
  }, [name, count, isLast])

  useEffect(() => {
    if (relax <= 0) {
      clearRelaxTimer()
    }
  }, [relax])

  useEffect(() => {
    return () => clearRelaxTimer()
  }, [])

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
          {!!relaxTimer.current ? (
            <RelaxTimer value={relax} />
          ) : counterType === ExecutionExerciseEnum.REPEAT ? (
            <RepeatCounter count={count} setCount={setCount} />
          ) : (
            <View />
          )}
        </View>
        <View style={styles.btnContainer}>
          {!!relaxTimer.current ? (
            <CustomButton>Go to nex exercise</CustomButton>
          ) : (
            <CustomButton onPress={done} styles={styles.btn} textStyles={styles.btnText}>
              Done
            </CustomButton>
          )}
        </View>
        <View style={styles.program}></View>
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
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  program: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
