import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'

const Profile = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Profile" />}>
      <View></View>
    </MainLayout>
  )
}

export default Profile

const styles = EStyleSheet.create({})
