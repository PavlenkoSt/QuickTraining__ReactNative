import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'

type RelaxTimerPropsType = {
  value: number
}

const RelaxTimer: FC<RelaxTimerPropsType> = ({ value }) => {
  return (
    <View>
      <CustomText style={{ color: '#fff' }}>{value}</CustomText>
    </View>
  )
}

export default RelaxTimer

const styles = EStyleSheet.create({})
