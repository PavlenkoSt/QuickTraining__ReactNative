import React, { FC } from 'react'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

type TabbarItemPropsType = {
  name: string
  isActive: boolean
  toScreen: string
  src: ImageSourcePropType
  bigImg?: boolean
}

const TabbarItem: FC<TabbarItemPropsType> = ({ isActive, toScreen, name, src, bigImg }) => {
  const { navigate } = useNavigation()

  return (
    <TouchableOpacity
      style={[styles.item, isActive && styles.itemActive]}
      onPress={() => navigate(toScreen as never)}
    >
      <Image style={[styles.img, bigImg && { width: 40, height: 30 }]} source={src} />
      <CustomText style={styles.text}>{name}</CustomText>
    </TouchableOpacity>
  )
}

export default TabbarItem

const styles = EStyleSheet.create({
  item: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '$secondaryTheme',
    borderWidth: 1,
  },
  itemActive: {
    backgroundColor: '#2b3d47',
    borderColor: '#395666',
    borderWidth: 1,
  },
  text: {
    fontFamily: '$fontMedium',
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
  img: {
    width: 30,
    height: 30,
  },
})
