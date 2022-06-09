import { View } from 'react-native'
import React, { FC, useMemo } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { ITrainingHistoryDayDB } from 'src/RealmDB/schemas/TrainingHistory'
import CustomText from 'src/components/CustomText'
import HistoryDay from './HistoryDay'
import fillTrainingHistoryRestingDays from 'src/utilts/fillTrainingHistoryRestingDays'

type HistoryWeekPropsType = {
  days: ITrainingHistoryDayDB[]
  weekNumber: number
  isLast: boolean
}

const HistoryWeek: FC<HistoryWeekPropsType> = ({ days, weekNumber, isLast }) => {
  const filledDays = useMemo(() => fillTrainingHistoryRestingDays(days), [days])

  return (
    <View>
      <View style={styles.header}>
        <CustomText style={styles.title}>
          {weekNumber === 0 ? 'First test' : `Week ${weekNumber}`}
        </CustomText>
      </View>
      <View style={[styles.body, isLast && styles.bodyLast]}>
        {filledDays.map((day, i) => {
          return (
            <HistoryDay
              key={`${day.dayNumber}-${i}`}
              dayNumber={day.dayNumber}
              isTest={day.isTest}
              exercieses={day.exercises}
              isRest={day.isRest}
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
