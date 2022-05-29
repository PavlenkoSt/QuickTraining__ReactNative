import { Image, View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'
import { InventarNeedForExerciseEnum } from 'src/types/ExerciseTypes'
import inventorySources from 'src/utilts/inventorySources'

type InventarBlockPropsType = {
  inventar: InventarNeedForExerciseEnum[]
}

const InventarBlock: FC<InventarBlockPropsType> = ({ inventar }) => {
  if (!inventar.length) return <></>

  return (
    <View style={styles.mainContainer}>
      <CustomText style={styles.title}>Required inventory:</CustomText>
      <View style={styles.container}>
        {inventar.map((item) => (
          <View style={styles.item} key={item}>
            <Image source={inventorySources[item]} style={styles.image} />
          </View>
        ))}
      </View>
    </View>
  )
}

export default InventarBlock

const styles = EStyleSheet.create({
  mainContainer: {
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    flexWrap: 'wrap',
  },
  title: {
    textAlign: 'center',
  },
  item: {
    marginHorizontal: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
})
