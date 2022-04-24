import { Dimensions, Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

import Check from 'src/assets/imgs/check.svg'

type InventoryItemPropsType = {
  haveItem: boolean
  setHaveItem: Dispatch<SetStateAction<boolean>>
  label: string
  source: ImageSourcePropType
}

const InventoryItem: FC<InventoryItemPropsType> = ({ haveItem, setHaveItem, label, source }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setHaveItem((prev) => !prev)}
      style={styles.container}
    >
      <Image style={styles.image} source={source} />
      <CustomText style={styles.label}>{label}</CustomText>
      {haveItem && (
        <View style={styles.cover}>
          <Check width={80} height={80} />
        </View>
      )}
    </TouchableOpacity>
  )
}

export default InventoryItem

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 2 - 20,
    position: 'relative',
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    fontFamily: '$fontMedium',
    zIndex: 2,
  },
  cover: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingBottom: 20,
  },
})
