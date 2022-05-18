import React, { useState } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation } from '@react-navigation/native'

import MainLayout from 'src/layouts/MainLayout'
import CustomText from 'src/components/CustomText'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import ClearUserModal from './ClearUserModal'
import SettingsItem from './SettingsItem'

import ProfilePic from 'src/assets/imgs/settings/profile.svg'
import MusclesPic from 'src/assets/imgs/settings/muscles.svg'
import RingsPic from 'src/assets/imgs/settings/bar.svg'
import RemovePic from 'src/assets/imgs/settings/remove.svg'

const Settings = () => {
  const [clearUserModalVisible, setClearUserModalVisible] = useState(false)

  const { navigate } = useNavigation()

  return (
    <MainLayout Header={() => <EmptyHeader title="Settings" withoutBackArr />}>
      <View style={styles.container}>
        <CustomText style={styles.title}>Actions</CustomText>
        <SettingsItem onPress={() => navigate('Profile' as never)} Icon={ProfilePic}>
          Edit profile
        </SettingsItem>
        <SettingsItem onPress={() => navigate('TrainingSettings' as never)} Icon={MusclesPic}>
          Edit training settings
        </SettingsItem>
        <SettingsItem onPress={() => navigate('Inventar' as never)} Icon={RingsPic}>
          Edit inventory list
        </SettingsItem>
        <SettingsItem onPress={() => setClearUserModalVisible(true)} Icon={RemovePic}>
          Remove profile
        </SettingsItem>
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
