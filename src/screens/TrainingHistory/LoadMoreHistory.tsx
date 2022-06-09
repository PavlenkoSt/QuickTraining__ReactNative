import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

type LoadMoreHistoryPropsType = {
  incrementCurrentPage: () => void
}

const LoadMoreHistory: FC<LoadMoreHistoryPropsType> = ({ incrementCurrentPage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => incrementCurrentPage()} style={styles.btn}>
        <CustomText style={styles.text}>Show more</CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default LoadMoreHistory

const styles = EStyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '$blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
  },
})
