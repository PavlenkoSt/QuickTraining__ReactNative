import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import ProfileForm from 'src/components/ProfileForm'

const Profile = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Profile" />}>
      <View>
        <ProfileForm isProfile />
      </View>
    </MainLayout>
  )
}

export default Profile

const styles = EStyleSheet.create({})
