import React from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import PersonalRecords from './PersonalRecords'

const Statistics = () => {
  return (
    <MainLayout Header={() => <EmptyHeader withoutBackArr title="Statistics" />}>
      <View style={styles.recordContainer}>
        <PersonalRecords />
      </View>
    </MainLayout>
  )
}

export default Statistics

const styles = EStyleSheet.create({
  recordContainer: {
    marginBottom: 20,
  },
})
