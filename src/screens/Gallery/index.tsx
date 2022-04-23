import { Dimensions, Platform, StatusBar, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import ImageViewer from 'react-native-image-zoom-viewer'
import { useNavigation } from '@react-navigation/native'

import CustomText from 'src/components/CustomText'

type GalleryPropsType = {
  route: {
    params: {
      images: any
      activeIndex: number
    }
  }
}

const Gallery: FC<GalleryPropsType> = ({ route }) => {
  const { goBack } = useNavigation()

  const [activeIndex, setActiveIndex] = useState(route.params.activeIndex)

  const images = route.params?.images || []

  const preparingImages = images.map((image: any) => ({
    props: {
      source: image,
    },
  }))

  const onSwipeDown = useCallback(() => goBack(), [])

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageViewer
        imageUrls={preparingImages}
        pageAnimateTime={500}
        useNativeDriver
        enableSwipeDown
        saveToLocalByLongPress={false}
        onSwipeDown={onSwipeDown}
        index={activeIndex}
        onChange={(index) => index !== undefined && setActiveIndex(index)}
        renderIndicator={() => (
          <View style={styles.label}>
            <CustomText style={styles.labelText}>
              {activeIndex + 1} / {images.length}
            </CustomText>
          </View>
        )}
      />
    </View>
  )
}

export default Gallery

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  label: {
    position: 'absolute',
    left: width / 2 - 40,
    zIndex: 1,
    top: Platform.OS === 'android' ? 20 : 50,
    borderRightColor: 'red',
    flexDirection: 'row',
    width: 80,
    height: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 40,
  },
  labelText: {
    color: '#fff',
    fontFamily: '$fontMedium',
  },
})
