import { StackActions, useNavigation } from '@react-navigation/native'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { IResult } from 'src/screens/FirstTestExercises'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'

type useFlowExPropsType = {
  counterType: ExecutionExerciseEnum
  testResult: IResult[]
  isLast: boolean
  name: string
  count: number
  time: number
  setTestResult: Dispatch<SetStateAction<IResult[]>>
  startRelaxTimer: () => void
  stopTimer: () => void
  isTest?: boolean
  inventary?: {
    haveBar: boolean
    haveWallBar: boolean
    haveBars: boolean
    haveStands: boolean
    havePowerTape: boolean
    haveWideTape: boolean
    haveSkippingRope: boolean
  }
  userInfo?: {
    name: string
    age: number
    goal: GoalEnum
    duration: DurationEnum
    gender: GenderEnum
  }
}

const useFlowEx = ({
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
  inventary,
  userInfo,
}: useFlowExPropsType) => {
  const { dispatch } = useNavigation()

  const done = useCallback(() => {
    let thisTransaction: any

    if (counterType === ExecutionExerciseEnum.HOLD) {
      thisTransaction = { name, result: time, type: ExecutionExerciseEnum.HOLD }

      setTestResult((prev) => [...prev, thisTransaction])
      stopTimer()
    } else {
      thisTransaction = { name, result: count, type: ExecutionExerciseEnum.REPEAT }

      setTestResult((prev) => [...prev, thisTransaction])
    }

    if (isLast) {
      dispatch(
        StackActions.replace('TrainingResult', {
          testResult: [...testResult, thisTransaction],
          isTest,
          userData: { inventary, userInfo },
        })
      )
    } else {
      startRelaxTimer()
    }
  }, [name, count, isLast, time, testResult, inventary, userInfo])

  return { done }
}

export default useFlowEx
