import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import CustomText from 'src/components/CustomText'
import InventarForm from 'src/components/InventarForm'

type FirstSetInventarFormPropsType = {
  route: {
    params: {
      userInfo: {
        name: string
        age: number
        duration: DurationEnum
        gender: GenderEnum
      }
    }
  }
}

const FirstSetInventarForm: FC<FirstSetInventarFormPropsType> = ({ route }) => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Inventory" />}>
      <View>
        <CustomText style={styles.title}>
          Choose the inventory you have on your training place:
        </CustomText>
        <InventarForm userInfo={route.params.userInfo} mode="set" />
      </View>
    </MainLayout>
  )
}

export default FirstSetInventarForm

const styles = EStyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: '$fontMedium',
    marginBottom: 15,
  },
})
