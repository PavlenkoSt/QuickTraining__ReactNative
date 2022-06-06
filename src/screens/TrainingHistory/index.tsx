import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import useRealmTrainingHistory from 'src/hooks/Realm/useRealmTrainingHistory'
import CustomText from 'src/components/CustomText'
import HistoryWeek from './HistoryWeek'

const TrainingHistory = () => {
  const { trainingHistory } = useRealmTrainingHistory()

  console.log('trainingHistory', trainingHistory)

  return (
    <MainLayout Header={() => <EmptyHeader title="Training history" />}>
      {!!trainingHistory && !!trainingHistory.length ? (
        trainingHistory.map((week, i) => (
          <HistoryWeek
            key={week._id}
            days={JSON.parse(week.daysString).reverse()}
            weekNumber={week.weekNumber}
            isLast={trainingHistory.length === i + 1}
          />
        ))
      ) : (
        <View>
          <CustomText>No history yet</CustomText>
        </View>
      )}
    </MainLayout>
  )
}

export default TrainingHistory

const styles = EStyleSheet.create({})
