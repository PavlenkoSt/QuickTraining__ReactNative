import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'

const TrainingHistory = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Training history" />}>
      <View></View>
    </MainLayout>
  )
}

export default TrainingHistory

const styles = EStyleSheet.create({})
