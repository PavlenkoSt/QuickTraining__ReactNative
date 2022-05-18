import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'

const TrainingSettings = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Training settings" />}>
      <View></View>
    </MainLayout>
  )
}

export default TrainingSettings

const styles = EStyleSheet.create({})
