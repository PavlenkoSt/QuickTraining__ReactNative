import { Dimensions, Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

import Arrow from 'src/assets/imgs/up-arrow.svg'

interface IGreetingAccordeonItemOption {
  text?: string | null
  image?: ImageSourcePropType[] | null
}

type GreetingAccordeonItemPropsType = {
  title: string
  options: IGreetingAccordeonItemOption[]
}

const GreetingAccordeonItem: FC<GreetingAccordeonItemPropsType> = ({ title, options }) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDetail((prev) => !prev)} style={styles.titleBtn}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
        </View>
        <View style={styles.arrowContainer}>
          <Arrow
            fill="#fff"
            style={{
              width: 20,
              height: 20,
              transform: [{ rotate: showDetail ? '0deg' : '180deg' }],
            }}
          />
        </View>
      </TouchableOpacity>
      {showDetail && (
        <View style={styles.detailContainer}>
          {options.map((option, i) => {
            if (option.image) {
              return (
                <View>
                  {/* <Image source={option.image} /> */}
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
    </View>
  )
}

export default GreetingAccordeonItem

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    marginBottom: 15,
  },
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
  arrowContainer: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    width: 70,
    alignItems: 'center',
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
