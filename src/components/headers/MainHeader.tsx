import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import CustomText from '../CustomText'

const MainHeader = () => {
  return (
    <View>
      <CustomText>This is header</CustomText>
    </View>
  )
}

export default MainHeader

const styles = EStyleSheet.create({})
