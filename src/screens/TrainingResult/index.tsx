import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import Context from 'src/Context'

import ResultList from './ResultList'
import { IResult } from '../GreetingEx'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'
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
        inventary?: {
          haveBar: boolean
          haveWallBar: boolean
          haveBars: boolean
          haveStands: boolean
          havePowerTape: boolean
          haveWideTape: boolean
          haveSkippingRope: boolean
        }
        userInfo?: {
          name: string
          age: number
          goal: GoalEnum
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
    <Context.Consumer>
      {(context) => (
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

                const { userInfo, inventary } = userData

                if (!userInfo || !inventary) return

                setUser({
                  _id: 0,
                  name: userInfo.name,
                  age: userInfo.age,
                  gender: userInfo.gender,
                  goal: userInfo.goal,
                  duration: userInfo.duration,
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

                if (context.setIsAuth) {
                  context.setIsAuth(true)
                }
              }}
            >
              Accept and build the training program
            </CustomButton>
          )}
        </MainLayout>
      )}
    </Context.Consumer>
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
