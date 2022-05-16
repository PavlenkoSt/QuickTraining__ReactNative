import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import ResultList from './ResultList'
import { IResult } from '../GreetingEx'
import MainLayout from 'src/layouts/MainLayout'
import TitleHeader from 'src/components/Headers/TitleHeader'
import CustomText from 'src/components/CustomText'
import LevelService from 'src/services/LevelService'

type TrainingResultPropsType = {
  route: {
    params: {
      testResult: IResult[]
      isTest?: boolean
    }
  }
}

const TrainingResult: FC<TrainingResultPropsType> = ({ route }) => {
  const isTest = route.params.isTest

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
