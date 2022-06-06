import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { ITrainingHistoryDayDB } from 'src/RealmDB/schemas/TrainingHistory'
import CustomText from 'src/components/CustomText'
import HistoryDay from './HistoryDay'

type HistoryWeekPropsType = {
  days: ITrainingHistoryDayDB[]
  weekNumber: number
  isLast: boolean
}

const HistoryWeek: FC<HistoryWeekPropsType> = ({ days, weekNumber, isLast }) => {
  return (
    <View>
      <View style={styles.header}>
        <CustomText style={styles.title}>
          {weekNumber === 0 ? 'First test' : `Week ${weekNumber}`}
        </CustomText>
      </View>
      <View style={[styles.body, isLast && styles.bodyLast]}>
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

const styles = EStyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ccc',
    fontSize: 20,
  },
  body: {
    marginBottom: 30,
  },
  bodyLast: {
    marginBottom: 0,
  },
})
