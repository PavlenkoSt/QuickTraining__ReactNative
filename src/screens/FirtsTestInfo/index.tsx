import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomButton from 'src/components/CustomButton'
import CustomText from 'src/components/CustomText'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import MainLayout from 'src/layouts/MainLayout'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'

type FirtsTestInfoPropsType = {
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

const FirtsTestInfo: FC<FirtsTestInfoPropsType> = ({ route }) => {
  const { navigate } = useNavigation()

  const onPress = useCallback(() => {
    navigate('TestExercises' as never, { userInfo: route.params.userInfo } as never)
  }, [route])

  return (
    <MainLayout Header={() => <EmptyHeader title="Physical test" />}>
      <View>
        <CustomText style={styles.title}>Let's work a little</CustomText>
        <CustomText style={styles.param}>
          There is 1 step left. Now you need to take a test to determine your level of physical
          abilities.
        </CustomText>
        <CustomText style={styles.param}>
          It is necessary to perform 3 exercises for the maximum number of repetitions with 2
          minutes rest between exercises.
        </CustomText>
        <CustomText style={styles.param}>Push-ups, squats and plank holds.</CustomText>
        <CustomButton onPress={onPress}>I'am ready</CustomButton>
      </View>
    </MainLayout>
  )
}

export default FirtsTestInfo

const styles = EStyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: '$fontMedium',
  },
  param: {
    marginBottom: 15,
  },
})
