import { View } from 'react-native'
import React, { FC, useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/EmptyHeader'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'
import CustomText from 'src/components/CustomText'
import InventoryItem from '../../components/InventarForm/InventoryItem'
import InventarForm from 'src/components/InventarForm'
import CustomButton from 'src/components/CustomButton'

type GreetingInventarPropsType = {
  route: {
    params: {
      userInfo: {
        name: string
        age: number
        goal: GoalEnum
        duration: DurationEnum
        gender: GenderEnum
      }
    }
  }
}

const GreetingInventar: FC<GreetingInventarPropsType> = ({ route }) => {
  console.log('1', route.params.userInfo)

  return (
    <MainLayout Header={() => <EmptyHeader title="Inventory" />}>
      <View>
        <CustomText style={styles.title}>
          Choose the inventory you have on your training place:
        </CustomText>
        <InventarForm />
        <CustomText style={styles.mess}>
          Don't worry if you don't have any of the above. You will still have access to a lot of
          exercises that do not require any equipment.
        </CustomText>
        <CustomButton>Save and go</CustomButton>
      </View>
    </MainLayout>
  )
}

export default GreetingInventar

const styles = EStyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: '$fontMedium',
    marginBottom: 15,
  },
  mess: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
})
