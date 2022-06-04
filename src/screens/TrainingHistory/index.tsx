import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import useRealmTrainingHistory from 'src/hooks/Realm/useRealmTrainingHistory'
import CustomText from 'src/components/CustomText'

const TrainingHistory = () => {
  const { trainingHistory, clearTrainingHistory } = useRealmTrainingHistory()

  console.log('trainingHistory', trainingHistory)

  return (
    <MainLayout Header={() => <EmptyHeader title="Training history" />}>
      <View>
        <TouchableOpacity onPress={() => clearTrainingHistory()}>
          <CustomText>Clear history</CustomText>
        </TouchableOpacity>
      </View>
    </MainLayout>
  )
}

export default TrainingHistory

const styles = EStyleSheet.create({})
