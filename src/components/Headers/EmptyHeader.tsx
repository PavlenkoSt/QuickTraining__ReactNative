import { TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'

import Arrow from 'src/assets/imgs/up-arrow.svg'

type EmptyHeaderPropsType = {
  title: string
  withoutBackArr?: boolean
}

const EmptyHeader: FC<EmptyHeaderPropsType> = ({ title, withoutBackArr }) => {
  const { goBack } = useNavigation()

  return (
    <View style={[styles.container, withoutBackArr && styles.containerWithoutArr]}>
      {!withoutBackArr && (
        <TouchableOpacity onPress={() => goBack()} style={styles.arrowContainer}>
          <Arrow fill="#fff" style={styles.arrow} />
        </TouchableOpacity>
      )}
      <CustomText style={styles.title}>{title}</CustomText>
    </View>
  )
}

export default EmptyHeader

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryTheme',
    paddingTop: 30,
    paddingBottom: 5,
    paddingRight: 15,
    borderBottomColor: '#333D44',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerWithoutArr: {
    justifyContent: 'center',
    paddingBottom: 15,
    paddingRight: 0,
  },
  arrowContainer: {
    transform: [{ rotate: '-90deg' }],
    padding: 15,
  },
  arrow: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: '$fontBold',
  },
})
