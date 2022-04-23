import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import React, { FC, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

type GreetingAccordeonItemImagesPropsType = {
  images: ImageSourcePropType[]
  indexes: number[]
}

const GreetingAccordeonItemImages: FC<GreetingAccordeonItemImagesPropsType> = ({
  images,
  indexes,
}) => {
  const { width } = useWindowDimensions()

  const { navigate } = useNavigation()

  const itemWidth = width - 50

  const filteredImages = images.filter((img, i) => indexes.findIndex((idx) => idx === i) !== -1)

  const length = filteredImages.length

  const size = length === 1 ? itemWidth : itemWidth / length - length * 1.5

  const goToGallery = useCallback(
    (index: number) => {
      navigate('Gallery' as never, { activeIndex: index, images } as never)
    },
    [images]
  )

  return (
    <View style={styles.line}>
      {filteredImages.map((image, i) => (
        <TouchableOpacity onPress={() => goToGallery(indexes[i])} key={i}>
          <Image source={image} style={{ height: size, width: size }} />
        </TouchableOpacity>
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
