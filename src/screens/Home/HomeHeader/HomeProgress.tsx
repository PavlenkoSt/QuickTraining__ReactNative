import { Dimensions, View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

type HomeProgressPropsType = {
  level: string
  percent: number
}

const HomeProgress: FC<HomeProgressPropsType> = ({ level, percent }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.infoText}>
          <CustomText style={styles.text}>Your current level: </CustomText>
          <CustomText style={[styles.text, styles.level]}>{level}</CustomText>
        </View>
        <CustomText style={styles.percent}>{percent}%</CustomText>
      </View>
      <View style={styles.footer}>
        <View style={styles.line}>
          <View
            style={[
              styles.progress,
              { backgroundColor: '#078c4e', width: (width * percent) / 100 },
            ]}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeProgress

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    width,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width,
  },
  line: {
    width,
    backgroundColor: '#333',
    height: 4,
  },
  progress: {
    height: 4,
  },
  percent: {
    fontSize: 14,
    fontFamily: '$fontBold',
  },
  info: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  infoText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  level: {
    fontFamily: '$fontBold',
    color: '$green',
  },
})
