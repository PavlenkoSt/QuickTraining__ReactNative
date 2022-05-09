import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'
import time from 'src/utilts/time'

type HoldCounterPropsType = {
  time: number
}

const HoldCounter: FC<HoldCounterPropsType> = ({ time: timeCount }) => {
  const { minutes, seconds } = time.fromSecondsToMinutesAndSeconds(timeCount)

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

export default HoldCounter

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flexDirection: 'row',
  },
  numberContainer: {
    backgroundColor: '$blue',
    width: 70,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#111',
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
