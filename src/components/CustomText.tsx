import { Falsy, RecursiveArray, RegisteredStyle, Text, TextStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

type CustomTextPropsType = {
  children: ReactNode
  style?:
    | Falsy
    | TextStyle
    | RegisteredStyle<TextStyle>
    | RecursiveArray<Falsy | TextStyle | RegisteredStyle<TextStyle>>
}

const CustomText: FC<CustomTextPropsType> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

export default CustomText

const styles = EStyleSheet.create({
  text: {
    color: '#333',
    fontSize: 20,
    fontFamily: '$fontRegular',
  },
})
