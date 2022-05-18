import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'

const Inventar = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Inventory" />}>
      <View></View>
    </MainLayout>
  )
}

export default Inventar

const styles = EStyleSheet.create({})
