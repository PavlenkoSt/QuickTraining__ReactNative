import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import useAccordeonItem from 'src/hooks/useAccordeonItem'

type AboutAccordeonItemImagesPropsType = {
  images: ImageSourcePropType[]
  indexes: number[]
}

const AboutAccordeonItemImages: FC<AboutAccordeonItemImagesPropsType> = ({ images, indexes }) => {
  const { filteredImages, goToGallery, size } = useAccordeonItem({ images, indexes })

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

export default AboutAccordeonItemImages

const styles = EStyleSheet.create({
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
})
