import React, { FC, useState } from 'react'
import { ScrollView } from 'react-native'

import Exercise from 'src/components/Exercise'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import ExerciseLayout from 'src/layouts/ExerciseLayout'
import ExerciseService from 'src/services/ExerciseService'
import { ExecutionExerciseEnum, IExercise } from 'src/types/ExerciseTypes'

export interface IResult {
  name: string
  result: number
  type: ExecutionExerciseEnum
}

type FirstTestExercisesPropsType = {
  route: {
    params: {
      userInfo: {
        name: string
        age: number
        duration: DurationEnum
        gender: GenderEnum
      }
    }
  }
}

const FirstTestExercises: FC<FirstTestExercisesPropsType> = ({ route }) => {
  //@ts-ignore
  const testPlan = ExerciseService.exercisesTree.man.filter((exercise: IExercise) => exercise.id >= 0 && exercise.id <= 2)

  const [activeIndex, setActiveIndex] = useState(0)
  const [testResult, setTestResult] = useState<IResult[]>([])

  return (
    <ExerciseLayout>
      <ScrollView>
        {testPlan.map((exercise: IExercise, i: number) => (
          <Exercise
            key={exercise.id}
            name={exercise.name}
            counterType={exercise.execution}
            relaxDelation={120}
            video={exercise.video}
            activeIndex={activeIndex}
            active={activeIndex === i}
            toNextExercise={() => setActiveIndex(i + 1)}
            isLast={testPlan.length - 1 === i}
            testResult={testResult}
            setTestResult={setTestResult}
            testPlan={testPlan}
            userInfo={route.params.userInfo}
            isTest
          />
        ))}
      </ScrollView>
    </ExerciseLayout>
  )
}

export default FirstTestExercises
