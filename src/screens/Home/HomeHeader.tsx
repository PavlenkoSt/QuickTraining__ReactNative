import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { IUser } from 'src/RealmDB/schemas/User'
import RealmDB from 'src/RealmDB'

import CustomText from 'src/components/CustomText'

const HomeHeader = () => {
  const { useObject } = RealmDB

  const user: IUser = useObject('User', 0)?.toJSON()

  return (
    <View style={styles.container}>
      <CustomText style={styles.header}>Hello, {user?.name || ''}</CustomText>
      <CustomText style={styles.subheader}>Are you ready to workout?</CustomText>
    </View>
  )
}

export default HomeHeader

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryTheme',
    paddingTop: 40,
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderBottomColor: '#333D44',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontFamily: '$fontBold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    color: '#ccc',
  },
})
