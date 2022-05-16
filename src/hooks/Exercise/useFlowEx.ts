import { StackActions, useNavigation } from '@react-navigation/native'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { IResult } from 'src/screens/GreetingEx'
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
        StackActions.replace('TrainingResult', { testResult: [...testResult, thisTransaction], isTest })
      )
    } else {
      startRelaxTimer()
    }
  }, [name, count, isLast, time, testResult])

  return { done }
}

export default useFlowEx
