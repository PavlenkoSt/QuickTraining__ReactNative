import { StackActions, useNavigation } from '@react-navigation/native'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { IResult } from 'src/screens/TestExercises'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import useRealmWeekPlan from '../Realm/useRealmWeekPlan'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'
import useRealmTrainingHistory from '../Realm/useRealmTrainingHistory'
import useRealmUser from '../Realm/useRealmUser'

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
  dayNumber: number | null
  isTest?: boolean
  userInfo?: {
    name: string
    age: number
    duration: DurationEnum
    gender: GenderEnum
  }
  needCount?: number
}

interface ITransaction {
  name: string
  result: number
  type: ExecutionExerciseEnum
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
  dayNumber,
  isTest,
  userInfo,
  needCount,
}: useFlowExPropsType) => {
  const { dispatch } = useNavigation()

  const { user } = useRealmUser()
  const { completeTraining } = useRealmWeekPlan()
  const { addTrainingHistoryDay, createTrainingHistoryWeek } = useRealmTrainingHistory()

  const packTestResults = useCallback(() => {
    let thisTransaction: ITransaction

    if (counterType === ExecutionExerciseEnum.HOLD) {
      thisTransaction = {
        name,
        result: !isTest && needCount ? needCount - time : time,
        type: ExecutionExerciseEnum.HOLD,
      }

      setTestResult((prev) => [...prev, thisTransaction])
      stopTimer()
    } else {
      thisTransaction = { name, result: count, type: ExecutionExerciseEnum.REPEAT }

      setTestResult((prev) => [...prev, thisTransaction])
    }

    return [...testResult, thisTransaction]
  }, [name, count, isTest, time, testResult])

  const packTrainingHistoryWeek = useCallback(
    (results: ITransaction[]) => {
      if (!!dayNumber && user) {
        if (dayNumber === 1) {
          createTrainingHistoryWeek(user.currentWeek, {
            dayNumber,
            isTest: !!isTest,
            exercises: results,
          })
        } else {
          // addTrainingHistoryDay
        }
      }
    },
    [dayNumber, user, isTest]
  )

  const navigateAfterDone = useCallback(
    (results: ITransaction[]) => {
      if (isTest) {
        dispatch(
          StackActions.replace('TestResult', {
            testResult: results,
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
              results,
            },
          })
        )
      }
    },
    [isTest, userInfo]
  )

  const done = useCallback(() => {
    const results = packTestResults()

    if (isLast) {
      packTrainingHistoryWeek(results)
      navigateAfterDone(results)
    } else {
      startRelaxTimer()
    }
  }, [packTestResults, packTrainingHistoryWeek, navigateAfterDone])

  return { done }
}

export default useFlowEx
