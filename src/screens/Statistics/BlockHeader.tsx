import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'

type BlockHeaderPropsType = {
  title: string
}

const BlockHeader: FC<BlockHeaderPropsType> = ({ title }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
    </View>
  )
}

export default BlockHeader

const styles = EStyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#141414',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#dbdbdb',
  },
})
