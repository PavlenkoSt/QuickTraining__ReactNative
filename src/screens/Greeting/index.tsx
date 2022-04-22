import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

const Greeting = () => {
  return (
    <View>
      <CustomText>Greeting</CustomText>
    </View>
  )
}

export default Greeting

const styles = EStyleSheet.create({})
