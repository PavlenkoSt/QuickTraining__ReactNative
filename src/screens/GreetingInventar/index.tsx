import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/EmptyHeader'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'
import CustomText from 'src/components/CustomText'
import InventarForm from 'src/components/InventarForm'

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

export default GreetingInventar

const styles = EStyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: '$fontMedium',
    marginBottom: 15,
  },
})
