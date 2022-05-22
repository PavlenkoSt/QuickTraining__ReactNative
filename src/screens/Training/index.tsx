import { ScrollView, View } from 'react-native'
import React, { FC, useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { IExercise } from 'src/types/ExerciseTypes'
import Exercise from 'src/components/Exercise'
import { IResult } from '../FirstTestExercises'
import ExerciseLayout from 'src/layouts/ExerciseLayout'
import calculateExerciseReply from 'src/utilts/calculateExerciseReply'

type TrainingPropsType = {
  route: {
    params: {
      day: {
        exercises: IExercise[]
        restTime: number
      }
    }
  }
}

const Training: FC<TrainingPropsType> = ({ route }) => {
  const [testResult, setTestResult] = useState<IResult[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const { day } = route.params

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
            needCount={calculateExerciseReply(exercise.coefficientDifficult, exercise.type, i)}
          />
        ))}
      </ScrollView>
    </ExerciseLayout>
  )
}

export default Training

const styles = EStyleSheet.create({})
