import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { ITrainingHistoryDayExercisesDB } from 'src/RealmDB/schemas/TrainingHistory'
import CustomText from 'src/components/CustomText'

type HistoryDayPropsType = {
  dayNumber: number
  isTest: boolean
  exercieses: ITrainingHistoryDayExercisesDB[]
}

const HistoryDay: FC<HistoryDayPropsType> = ({ dayNumber, isTest, exercieses }) => {
  return (
    <View>
      <View>
        <CustomText>Day {dayNumber}</CustomText>
      </View>
    </View>
  )
}

export default HistoryDay

const styles = EStyleSheet.create({})
