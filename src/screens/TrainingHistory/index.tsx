import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import useRealmTrainingHistory from 'src/hooks/Realm/useRealmTrainingHistory'
import CustomText from 'src/components/CustomText'
import HistoryWeek from './HistoryWeek'

const TrainingHistory = () => {
  const { trainingHistory, clearTrainingHistory } = useRealmTrainingHistory()

  console.log('trainingHistory', trainingHistory)

  return (
    <MainLayout Header={() => <EmptyHeader title="Training history" />}>
      {!!trainingHistory && !!trainingHistory.length ? (
        trainingHistory.map((week) => (
          <HistoryWeek
            key={week._id}
            days={JSON.parse(week.daysString).reverse()}
            weekNumber={week.weekNumber}
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
