import { StackActions, useNavigation } from '@react-navigation/native'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { IResult } from 'src/screens/FirstTestExercises'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'

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
  userInfo?: {
    name: string
    age: number
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
  userInfo,
}: useFlowExPropsType) => {
  const { dispatch, navigate } = useNavigation()

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
      if (isTest) {
        dispatch(
          StackActions.replace('TestResult', {
            testResult: [...testResult, thisTransaction],
            isTest,
            userData: { userInfo },
          })
        )
      } else {
        dispatch(
          StackActions.replace('Home', {
            results: [...testResult, thisTransaction],
          })
        )
      }
    } else {
      startRelaxTimer()
    }
  }, [name, count, isLast, time, testResult, userInfo])

  return { done }
}

export default useFlowEx
