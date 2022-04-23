import { useNavigation } from '@react-navigation/native'
import { useCallback, useMemo } from 'react'
import { ImageSourcePropType, useWindowDimensions } from 'react-native'

type useAccordeonItemPropsType = {
  images: ImageSourcePropType[]
  indexes: number[]
}

const useAccordeonItem = ({ images, indexes }: useAccordeonItemPropsType) => {
  const { width } = useWindowDimensions()

  const { navigate } = useNavigation()

  const itemWidth = useMemo(() => width - 50, [width])

  const filteredImages = useMemo(
    () => images.filter((img, i) => indexes.findIndex((idx) => idx === i) !== -1),
    [images, indexes]
  )

  const length = useMemo(() => filteredImages.length, [filteredImages])

  const size = useMemo(
    () => (length === 1 ? itemWidth : itemWidth / length - length * 1.5),
    [length, itemWidth]
  )

  const goToGallery = useCallback(
    (index: number) => {
      navigate('Gallery' as never, { activeIndex: index, images } as never)
    },
    [images]
  )

  return { size, goToGallery, filteredImages }
}

export default useAccordeonItem
