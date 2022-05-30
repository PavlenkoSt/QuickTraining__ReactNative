import React, { FC, useMemo, useState } from 'react'
import { ScrollView } from 'react-native'

import Exercise from 'src/components/Exercise'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import ExerciseLayout from 'src/layouts/ExerciseLayout'
import ExerciseService from 'src/services/ExerciseService'
import { ExecutionExerciseEnum, ExerciseType, IExercise } from 'src/types/ExerciseTypes'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import EndTrainingModal from 'src/components/EndTrainingModal'
import useConfirmBackNav from 'src/hooks/useConfirmBackNav'
import useRealmInventory from 'src/hooks/Realm/useRealmInventory'

export interface IResult {
  name: string
  result: number
  type: ExecutionExerciseEnum
}

type TestExercisesPropsType = {
  route: {
    params: {
      userInfo?: {
        name: string
        age: number
        duration: DurationEnum
        gender: GenderEnum
      }
    }
  }
}

const TestExercises: FC<TestExercisesPropsType> = ({ route }) => {
  const { user } = useRealmUser()
  const { inventory } = useRealmInventory()

  const gender = !!user
    ? user.gender
    : route.params?.userInfo
    ? route.params.userInfo.gender
    : GenderEnum.Male

  const records = useMemo(
    () => ({
      [ExerciseType.PUSH]: !!user ? user.pushUpMax : 0,
      [ExerciseType.LEGS]: !!user ? user.sitUpMax : 0,
      [ExerciseType.CORE]: !!user ? user.plankMax : 0,
      [ExerciseType.PULL]: !!user ? 0 : 0,
    }),
    [user]
  )

  const testPlan = ExerciseService.getTestExercises(
    gender,
    Boolean(inventory?.haveBar) || Boolean(inventory?.haveWallBar)
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [testResult, setTestResult] = useState<IResult[]>([])

  const { visibleModal, setVisibleModal, navigateAction } = useConfirmBackNav()

  return (
    <ExerciseLayout>
      <ScrollView>
        {testPlan.map((exercise: IExercise, i: number) => (
          <Exercise
            key={`${exercise.type}-${exercise.id}`}
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
            needCount={records[exercise.type]}
            isTest
          />
        ))}
      </ScrollView>
      <EndTrainingModal
        visible={visibleModal}
        setVisible={setVisibleModal}
        navigateAction={navigateAction}
        confirmMessage="Are you sure you want to leave training test? Progress will be lost!"
      />
    </ExerciseLayout>
  )
}

export default TestExercises
