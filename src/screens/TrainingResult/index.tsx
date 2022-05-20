import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import ResultList from './ResultList'
import { IResult } from '../FirstTestExercises'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import MainLayout from 'src/layouts/MainLayout'
import TitleHeader from 'src/components/Headers/TitleHeader'
import CustomText from 'src/components/CustomText'
import LevelService from 'src/services/LevelService'
import CustomButton from 'src/components/CustomButton'
import useRealmUser from 'src/hooks/Realm/useRealmUser'

type TrainingResultPropsType = {
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

const TrainingResult: FC<TrainingResultPropsType> = ({ route }) => {
  const isTest = route.params.isTest

  const { setUser } = useRealmUser()

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
        <CustomButton
          styles={{ marginTop: 30 }}
          onPress={() => {
            const { userData } = route.params

            if (!userData) return

            setUser({
              _id: 0,
              name: userData.userInfo.name,
              age: userData.userInfo.age,
              gender: userData.userInfo.gender,
              duration: userData.userInfo.duration,
              pushUpMax: route.params.testResult[0].result,
              sitUpMax: route.params.testResult[1].result,
              plankMax: route.params.testResult[2].result,
              levelLabel: LevelService.getLabelByPercent(
                LevelService.calculatePercent(
                  route.params.testResult[0].result,
                  route.params.testResult[1].result,
                  route.params.testResult[2].result
                )
              ),
              levelPercent: LevelService.calculatePercent(
                route.params.testResult[0].result,
                route.params.testResult[1].result,
                route.params.testResult[2].result
              ),
            })
          }}
        >
          Accept and build the training program
        </CustomButton>
      )}
    </MainLayout>
  )
}

export default TrainingResult

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
