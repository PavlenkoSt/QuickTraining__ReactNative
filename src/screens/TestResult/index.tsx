import { View } from 'react-native'
import React, { FC, useCallback } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import ResultList from '../../components/ResultList'
import { IResult } from '../FirstTestExercises'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import MainLayout from 'src/layouts/MainLayout'
import TitleHeader from 'src/components/Headers/TitleHeader'
import CustomText from 'src/components/CustomText'
import LevelService from 'src/services/LevelService'
import CustomButton from 'src/components/CustomButton'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import ExerciseService, { WeekPlanType } from 'src/services/ExerciseService'

type TestResultPropsType = {
  route: {
    params: {
      testResult: IResult[]
      isTest?: boolean
      userData?: {
        userInfo: {
          name: string
          age: number
          duration: DurationEnum
          gender: GenderEnum
        }
      }
    }
  }
}

const TestResult: FC<TestResultPropsType> = ({ route }) => {
  const isTest = route.params.isTest

  const { setUser } = useRealmUser()
  const { setWeekPlan } = useRealmWeekPlan()

  const registerAndBuildProgram = useCallback(() => {
    const { userData } = route.params

    if (!userData) return

    const percent = LevelService.calculatePercent(
      route.params.testResult[0].result,
      route.params.testResult[1].result,
      route.params.testResult[2].result
    )

    setUser({
      _id: 0,
      name: userData.userInfo.name,
      age: userData.userInfo.age,
      gender: userData.userInfo.gender,
      duration: userData.userInfo.duration,
      pushUpMax: route.params.testResult[0].result,
      sitUpMax: route.params.testResult[1].result,
      plankMax: route.params.testResult[2].result,
      levelLabel: LevelService.getLabelByPercent(percent),
      levelPercent: percent,
    })

    const plan = ExerciseService.autogeneratePlan(
      percent,
      userData.userInfo.gender,
      false
    ) as WeekPlanType

    setWeekPlan(plan)
  }, [])

  return (
    <MainLayout
      Header={() => (
        <TitleHeader title={isTest ? 'Test completed' : 'Training done'} subtitle="Good job" />
      )}
    >
      {!!isTest && (
        <View style={styles.testBlock}>
          <CustomText style={styles.testText}>Your level is defined as</CustomText>
          <CustomText style={styles.testRes}>
            {LevelService.getLabelByPercent(
              LevelService.calculatePercent(
                route.params.testResult[0].result,
                route.params.testResult[1].result,
                route.params.testResult[2].result
              )
            )}
          </CustomText>
        </View>
      )}
      <ResultList results={route.params.testResult} />
      {isTest && (
        <CustomButton styles={{ marginTop: 30 }} onPress={registerAndBuildProgram}>
          Accept and build the training program
        </CustomButton>
      )}
    </MainLayout>
  )
}

export default TestResult

const styles = EStyleSheet.create({
  testBlock: {
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  testText: {
    fontSize: 18,
    marginRight: 5,
  },
  testRes: {
    fontSize: 18,
    fontFamily: '$fontBold',
    color: '#e39b00',
  },
})
