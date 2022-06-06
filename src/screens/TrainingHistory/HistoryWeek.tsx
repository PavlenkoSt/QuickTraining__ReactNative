import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { ITrainingHistoryDayDB } from 'src/RealmDB/schemas/TrainingHistory'
import CustomText from 'src/components/CustomText'
import HistoryDay from './HistoryDay'

type HistoryWeekPropsType = {
  days: ITrainingHistoryDayDB[]
  weekNumber: number
}

const HistoryWeek: FC<HistoryWeekPropsType> = ({ days, weekNumber }) => {
  return (
    <View>
      <View>
        <CustomText>Week {weekNumber}</CustomText>
      </View>
      <View>
        {days.map((day, i) => {
          return (
            <HistoryDay
              key={`${day.dayNumber}-${i}`}
              dayNumber={day.dayNumber}
              isTest={day.isTest}
              exercieses={day.exercises}
            />
          )
        })}
      </View>
    </View>
  )
}

export default HistoryWeek

const styles = EStyleSheet.create({})
