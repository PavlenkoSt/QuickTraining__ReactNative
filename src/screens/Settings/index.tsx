import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import CustomText from 'src/components/CustomText'

const Settings = () => {
  return (
    <MainLayout>
      <CustomText>Settings</CustomText>
    </MainLayout>
  )
}

export default Settings

const styles = EStyleSheet.create({})
