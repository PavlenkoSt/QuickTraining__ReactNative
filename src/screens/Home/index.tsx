import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import CustomButton from 'src/components/CustomButton'

import CustomText from 'src/components/CustomText'
import WeekPlan from 'src/components/WeekPlan'
import MainLayout from 'src/layouts/MainLayout'
import { GenderEnum } from 'src/RealmDB/schemas/User'
import HomeHeader from 'src/screens/Home/HomeHeader'
import ExerciseService from 'src/services/ExerciseService'

const Home = () => {
  return (
    <MainLayout Header={HomeHeader}>
      <CustomText>Home</CustomText>
      <WeekPlan />
      <CustomButton
        onPress={() =>
          console.log('plan = ', ExerciseService.autogeneratePlan(10, GenderEnum.Male))
        }
      >
        Generate plan
      </CustomButton>
    </MainLayout>
  )
}

export default Home

const styles = EStyleSheet.create({})
