import { ScrollView } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { IExercise } from 'src/types/ExerciseTypes'
import Exercise from 'src/components/Exercise'
import { IResult } from '../TestExercises'
import ExerciseLayout from 'src/layouts/ExerciseLayout'
import calculateExerciseReply from 'src/utilts/calculateExerciseReply'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import EndTrainingModal from './EndTrainingModal'
import { NavigationActionType } from 'src/types/NavigationActionType'

type TrainingPropsType = {
  route: {
    params: {
      day: {
        exercises: IExercise[]
        restTime: number
      }
      coefficientProgress: number
    }
  }
}

const Training: FC<TrainingPropsType> = ({ route }) => {
  const [testResult, setTestResult] = useState<IResult[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const [leaveTrainingModal, setLeaveTrainingModal] = useState(false)
  const [navigateAction, setNavigateAction] = useState<NavigationActionType | null>(null)

  const { addListener } = useNavigation()

  const { day } = route.params

  const { user } = useRealmUser()

  useEffect(() => {
    addListener('beforeRemove', (e) => {
      if (e.data.action.type !== 'GO_BACK') return

      e.preventDefault()

      setNavigateAction(e.data.action)
      setLeaveTrainingModal(true)
    })
  }, [])

  return (
    <ExerciseLayout>
      <ScrollView>
        {day.exercises.map((exercise, i) => (
          <Exercise
            key={`${exercise.id}-${i}`}
            name={exercise.name}
            counterType={exercise.execution}
            video={exercise.video}
            relaxDelation={day.restTime}
            activeIndex={activeIndex}
            active={activeIndex === i}
            toNextExercise={() => setActiveIndex(i + 1)}
            isLast={day.exercises.length - 1 === i}
            testResult={testResult}
            setTestResult={setTestResult}
            testPlan={day.exercises}
            needCount={calculateExerciseReply(
              exercise.coefficientDifficult,
              route.params.coefficientProgress,
              exercise.type,
              i,
              user
            )}
            coefficientProgress={route.params.coefficientProgress}
          />
        ))}
      </ScrollView>
      <EndTrainingModal
        visible={leaveTrainingModal}
        setVisible={setLeaveTrainingModal}
        navigateAction={navigateAction}
      />
    </ExerciseLayout>
  )
}

export default Training
