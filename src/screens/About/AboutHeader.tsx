import React from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

const AboutHeader = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Welcome</CustomText>
      <CustomText style={styles.subtitle}>to the best training application</CustomText>
    </View>
  )
}

export default AboutHeader

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
  title: {
    fontSize: 30,
    fontFamily: '$fontBold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
  },
})
