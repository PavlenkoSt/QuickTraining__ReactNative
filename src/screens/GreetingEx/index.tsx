import React, { FC, useState } from 'react'
import { ScrollView } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import Exercise from 'src/screens/GreetingEx/Exercise'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'
import ExerciseLayout from 'src/layouts/ExerciseLayout'
import ExerciseService from 'src/services/ExerciseService'

type GreetingEx1PropsType = {
  route: {
    params: {
      inventary: {
        haveBar: boolean
        haveWallBar: boolean
        haveBars: boolean
        haveStands: boolean
        havePowerTape: boolean
        haveWideTape: boolean
        haveSkippingRope: boolean
      }
      userInfo: {
        name: string
        age: number
        goal: GoalEnum
        duration: DurationEnum
        gender: GenderEnum
      }
    }
  }
}

const GreetingEx: FC<GreetingEx1PropsType> = ({ route }) => {
  const testPlan = ExerciseService.exercisesTree.man.low.filter(
    (exercise) => exercise.id >= 0 && exercise.id <= 2
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [testResult, setTestResult] = useState<Object | null>(null)

  return (
    <ExerciseLayout>
      <ScrollView>
        {testPlan.map((exercise, i) => (
          <Exercise
            key={exercise.id}
            name={exercise.name}
            counterType={exercise.execution}
            relaxDelation={120}
            video={exercise.video}
            setActiveIndex={setActiveIndex}
            active={activeIndex === i}
            indexToNextExercise={i + 1}
            isLast={testPlan.length - 1 === i}
            testResult={testResult}
            setTestResult={setTestResult}
            isTest
          />
        ))}
      </ScrollView>
    </ExerciseLayout>
  )
}

export default GreetingEx

const styles = EStyleSheet.create({})
