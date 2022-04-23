import React, { FC, ReactNode } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import { EStyleSheet, ViewStyle } from 'react-native-extended-stylesheet-typescript'

import CustomText from './CustomText'

type ButtonPropsType = {
  children: ReactNode
  onPress?: (event: GestureResponderEvent) => void
  disable?: boolean
  danger?: boolean
  styles?: ViewStyle
  textStyles?: ViewStyle
}

const CustomButton: FC<ButtonPropsType> = ({
  children,
  onPress,
  disable,
  danger,
  styles: stylesFromProps,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={disable ? 1 : 0.2}
      onPress={onPress}
      style={[
        styles.container,
        danger && styles.danger,
        disable && styles.containerDisable,
        stylesFromProps,
      ]}
    >
      <CustomText style={[styles.text, textStyles]}>{children}</CustomText>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#078c4e',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  containerDisable: {
    backgroundColor: '#01912a',
  },
  text: {
    fontFamily: '$fontMedium',
  },
  danger: {
    backgroundColor: '$red',
  },
})
