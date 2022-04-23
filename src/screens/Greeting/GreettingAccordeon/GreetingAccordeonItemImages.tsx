import { Image, ImageSourcePropType, useWindowDimensions, View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

type GreetingAccordeonItemImagesPropsType = {
  images: ImageSourcePropType[]
}

const GreetingAccordeonItemImages: FC<GreetingAccordeonItemImagesPropsType> = ({ images }) => {
  const { width } = useWindowDimensions()

  const itemWidth = width - 50

  const length = images.length

  const size = length === 1 ? itemWidth : itemWidth / length - length * 1.5

  return (
    <View style={styles.line}>
      {images.map((image, i) => (
        <View key={i}>
          <Image source={image} style={{ height: size, width: size }} />
        </View>
      ))}
    </View>
  )
}

export default GreetingAccordeonItemImages

const styles = EStyleSheet.create({
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
})
