import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import WeekPlan from 'src/components/WeekPlan'
import MainLayout from 'src/layouts/MainLayout'
import HomeHeader from 'src/screens/Home/HomeHeader'

const Home = () => {  
  return (
    <MainLayout Header={HomeHeader}>
      <WeekPlan />
    </MainLayout>
  )
}

export default Home

const styles = EStyleSheet.create({})
