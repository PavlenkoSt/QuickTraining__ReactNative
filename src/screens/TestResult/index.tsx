import { View } from 'react-native'
import React, { FC, useCallback } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation, StackActions } from '@react-navigation/native'

import { IResult } from '../TestExercises'
import ResultList from 'src/components/ResultList'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import MainLayout from 'src/layouts/MainLayout'
import TitleHeader from 'src/components/Headers/TitleHeader'
import CustomText from 'src/components/CustomText'
import LevelService from 'src/services/LevelService'
import CustomButton from 'src/components/CustomButton'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import ExerciseService, { WeekPlanType } from 'src/services/ExerciseService'
import EndTrainingModal from 'src/components/EndTrainingModal'
import useConfirmBackNav from 'src/hooks/useConfirmBackNav'
import useInventory from 'src/hooks/Realm/useRealmInventory'

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

  const { user, setUser, updateRecords, updatePercent } = useRealmUser()
  const { weekPlan, setWeekPlan, clearWeekPlan } = useRealmWeekPlan()
  const { inventory } = useInventory()

  const { dispatch } = useNavigation()

  const { visibleModal, setVisibleModal, navigateAction } = useConfirmBackNav()

  const registerAndBuildProgram = useCallback(() => {
    const { userData } = route.params

    const percent = LevelService.calculatePercent(
      route.params.testResult[0].result,
      route.params.testResult[1].result,
      route.params.testResult[2].result,
      route.params.testResult?.[3] ? route.params.testResult[3].result : undefined
    )

    if (!userData) {
      updateRecords({
        pushUpMax: route.params.testResult[0].result,
        sitUpMax: route.params.testResult[1].result,
        plankMax: route.params.testResult[2].result,
        pullUpMax: route.params.testResult?.[3]
          ? route.params.testResult?.[3].result
          : user?.pullUpMax || 0,
      })
    } else {
      setUser({
        _id: 0,
        name: userData.userInfo.name,
        age: userData.userInfo.age,
        gender: userData.userInfo.gender,
        duration: userData.userInfo.duration,
        pushUpMax: route.params.testResult[0].result,
        sitUpMax: route.params.testResult[1].result,
        plankMax: route.params.testResult[2].result,
        pullUpMax: route.params.testResult?.[3] ? route.params.testResult[3].result : 0,
        levelLabel: LevelService.getLabelByPercent(percent),
        levelPercent: percent,
      })
    }

    if (!!weekPlan) {
      clearWeekPlan()
      updatePercent({
        levelLabel: LevelService.getLabelByPercent(percent),
        percent,
      })
    }

    const plan = ExerciseService.autogeneratePlan(
      percent,
      !!userData ? userData.userInfo.gender : !!user ? user.gender : GenderEnum.Male,
      Boolean(inventory?.haveBar) || Boolean(inventory?.haveWallBar)
    ) as WeekPlanType

    setWeekPlan(plan)

    if (!userData) {
      dispatch(StackActions.replace('Tabs'))
    } else {
      dispatch(StackActions.replace('About'))
    }
  }, [route.params])

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
      {!!isTest && (
        <CustomButton styles={{ marginTop: 30 }} onPress={registerAndBuildProgram}>
          {!!weekPlan ? 'Accept' : 'Accept and build the training program'}
        </CustomButton>
      )}
      <EndTrainingModal
        visible={visibleModal}
        setVisible={setVisibleModal}
        navigateAction={navigateAction}
        confirmMessage="Are you sure you want to cancel training test? Progress will be lost!"
      />
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
