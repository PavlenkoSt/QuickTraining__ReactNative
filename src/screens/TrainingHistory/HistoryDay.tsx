import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { ITrainingHistoryDayExercisesDB } from 'src/RealmDB/schemas/TrainingHistory'
import CustomText from 'src/components/CustomText'
import HistoryEx from './HistoryEx'

type HistoryDayPropsType = {
  dayNumber: number
  isTest: boolean
  exercieses: ITrainingHistoryDayExercisesDB[]
}

const HistoryDay: FC<HistoryDayPropsType> = ({ dayNumber, isTest, exercieses }) => {
  return (
    <View>
      <View style={styles.day}>
        {dayNumber !== 0 && (
          <CustomText style={styles.dayText}>
            Day {dayNumber} <CustomText style={styles.testLabel}>{!!isTest && '(test)'}</CustomText>
          </CustomText>
        )}
      </View>
      <View style={styles.exerciesesContainer}>
        {exercieses.map((ex, i) => (
          <HistoryEx key={i} name={ex.name} result={ex.result} type={ex.type} />
        ))}
      </View>
    </View>
  )
}

export default HistoryDay

const styles = EStyleSheet.create({
  day: {
    paddingVertical: 10,
  },
  dayText: {
    fontSize: 17,
  },
  exerciesesContainer: {
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
  },
  testLabel: {
    color: '#ccc',
  },
})
