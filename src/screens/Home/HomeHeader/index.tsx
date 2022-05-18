import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'
import HomeProgress from './HomeProgress'

import useRealmUser from 'src/hooks/Realm/useRealmUser'

const HomeHeader = () => {
  const { user } = useRealmUser()

  return (
    <View style={styles.container}>
      <CustomText style={styles.header}>{!!user ? `Hello, ${user.name}` : 'Hello'}</CustomText>
      {!!user && <HomeProgress level={user.levelLabel} percent={user.levelPercent} />}
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
