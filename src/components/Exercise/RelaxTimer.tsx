import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'
import time from 'src/utilts/time'

type RelaxTimerPropsType = {
  value: number
}

const RelaxTimer: FC<RelaxTimerPropsType> = ({ value }) => {
  const { minutes, seconds } = time.fromSecondsToMinutesAndSeconds(value)

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.numberContainer}>
          <CustomText style={styles.text}>{minutes}</CustomText>
        </View>
        <View style={styles.middleContainer}>
          <CustomText style={styles.text}>:</CustomText>
        </View>
        <View style={styles.numberContainer}>
          <CustomText style={styles.text}>{seconds}</CustomText>
        </View>
      </View>
    </View>
  )
}

export default RelaxTimer

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flexDirection: 'row',
  },
  numberContainer: {
    backgroundColor: '$secondaryTheme',
    width: 70,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '$blue',
  },
  middleContainer: {
    width: 20,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 26,
  },
})
