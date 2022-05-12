import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'

type TitleHeaderPropsType = {
  title: string
  subtitle?: string
}

const TitleHeader: FC<TitleHeaderPropsType> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
      {!!subtitle && <CustomText style={styles.subtitle}>{subtitle}</CustomText>}
    </View>
  )
}

export default TitleHeader

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryTheme',
    paddingTop: 30,
    paddingBottom: 5,
    paddingRight: 15,
    borderBottomColor: '#333D44',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 18,
  },
})
