import { View } from 'react-native'
import React, { useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'
import HomeProgress from './HomeProgress'

import useRealmUser from 'src/hooks/Realm/useRealmUser'

const HomeHeader = () => {
  const { getUser } = useRealmUser()

  const [user] = useState(getUser())

  return (
    <View style={styles.container}>
      <CustomText style={styles.header}>{user?.name ? `Hello, ${user.name}` : 'Hello'}</CustomText>
      {!!user?.levelLabel && user.levelPercent && (
        <HomeProgress level={user.levelLabel} percent={user.levelPercent} />
      )}
    </View>
  )
}

export default HomeHeader

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryTheme',
    paddingTop: 40,
    paddingHorizontal: 15,
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
