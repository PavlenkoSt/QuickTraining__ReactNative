import { ScrollView } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { IExercise } from 'src/types/ExerciseTypes'
import Exercise from 'src/components/Exercise'
import { IResult } from '../TestExercises'
import ExerciseLayout from 'src/layouts/ExerciseLayout'
import calculateExerciseReply from 'src/utilts/calculateExerciseReply'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import EndTrainingModal from '../../components/EndTrainingModal'
import useConfirmBackNav from 'src/hooks/useConfirmBackNav'

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

  const { visibleModal, setVisibleModal, navigateAction } = useConfirmBackNav()

  const { day } = route.params

  const { user } = useRealmUser()

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
        visible={visibleModal}
        setVisible={setVisibleModal}
        navigateAction={navigateAction}
        confirmMessage="Are you sure you want to leave training? Progress will be lost!"
      />
    </ExerciseLayout>
  )
}

export default Training
