import { GestureResponderEvent, TouchableOpacity, View } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

type SettingsItemPropsType = {
  children: ReactNode
  onPress: (event: GestureResponderEvent) => void
  Icon: FC
}

const SettingsItem: FC<SettingsItemPropsType> = ({ children, onPress, Icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.picContainer}>
        {/* @ts-ignore */}
        <Icon width={20} height={20} fill="#a8abb3" stroke="#a8abb3" />
      </View>
      <CustomText style={styles.text}>{children}</CustomText>
    </TouchableOpacity>
  )
}

export default SettingsItem

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  picContainer: {
    width: 20,
    height: 20,
    paddingRight: 30,
  },
  text: {
    color: '#a8abb3',
    fontSize: 17,
  },
})
