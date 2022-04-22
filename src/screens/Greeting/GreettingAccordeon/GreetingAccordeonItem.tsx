import { Dimensions, Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

interface IGreetingAccordeonItemOption {
  text?: string | null
  image?: ImageSourcePropType | null
}

type GreetingAccordeonItemPropsType = {
  title: string
  options: IGreetingAccordeonItemOption[]
}

const GreetingAccordeonItem: FC<GreetingAccordeonItemPropsType> = ({ title, options }) => {
  const [showDetail, setShowDetail] = useState(true)

  return (
    <>
      <TouchableOpacity onPress={() => setShowDetail((prev) => !prev)} style={styles.titleBtn}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
        </View>
        <View>
          <CustomText>need arrow</CustomText>
        </View>
      </TouchableOpacity>
      {showDetail && (
        <View style={styles.detailContainer}>
          {options.map((option, i) => {
            if (option.image) {
              return (
                <View>
                  <Image source={option.image} />
                </View>
              )
            } else {
              return (
                <CustomText key={i} style={styles.detailParam}>
                  {option.text}
                </CustomText>
              )
            }
          })}
        </View>
      )}
    </>
  )
}

export default GreetingAccordeonItem

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  titleBtn: {
    backgroundColor: '$blue',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    width: width - 130,
  },
  title: {
    fontSize: 16,
    fontFamily: '$fontMedium',
  },
  detailContainer: {
    backgroundColor: '$secondaryTheme',
    padding: 10,
  },
  detailParam: {
    color: '#fff',
    marginBottom: 10,
    fontStyle: 'italic',
  },
})
