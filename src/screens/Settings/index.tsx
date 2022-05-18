import React, { useState } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import CustomText from 'src/components/CustomText'
import CustomButton from 'src/components/CustomButton'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import ClearUserModal from './ClearUserModal'

const Settings = () => {
  const [clearUserModalVisible, setClearUserModalVisible] = useState(false)

  return (
    <MainLayout Header={() => <EmptyHeader title="Settings" />}>
      <View style={styles.container}>
        <CustomText style={styles.title}>Actions</CustomText>
        <CustomButton small danger onPress={() => setClearUserModalVisible(true)}>
          Clear my profile
        </CustomButton>
      </View>
      <ClearUserModal visible={clearUserModalVisible} setVisible={setClearUserModalVisible} />
    </MainLayout>
  )
}

export default Settings

const styles = EStyleSheet.create({
  container: {},
  title: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
})
