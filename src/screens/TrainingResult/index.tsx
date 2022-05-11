import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'
import { IResult } from '../GreetingEx'
import MainLayout from 'src/layouts/MainLayout'

type TrainingResultPropsType = {
  route: {
    params: {
      testResult: IResult[]
    }
  }
}

const TrainingResult: FC<TrainingResultPropsType> = ({ route }) => {
  console.log('res', route.params.testResult)

  return (
    <MainLayout>
      <CustomText>results - fix, show and save results</CustomText>
    </MainLayout>
  )
}

export default TrainingResult

const styles = EStyleSheet.create({})
