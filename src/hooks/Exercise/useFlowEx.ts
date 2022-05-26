import { StackActions, useNavigation } from '@react-navigation/native'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { IResult } from 'src/screens/TestExercises'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import useRealmWeekPlan from '../Realm/useRealmWeekPlan'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'

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
  const { dispatch } = useNavigation()

  const { completeTraining } = useRealmWeekPlan()

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
            userData: !!userInfo ? { userInfo } : undefined,
          })
        )
      } else {
        completeTraining()
        dispatch(
          StackActions.replace('Tabs', {
            screen: 'Home',
            params: {
              results: [...testResult, thisTransaction],
            },
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
