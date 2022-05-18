import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'
import MainLayout from 'src/layouts/MainLayout'
import HomeHeader from 'src/screens/Home/HomeHeader'

const Home = () => {
  return (
    <MainLayout Header={HomeHeader}>
      <CustomText>Home</CustomText>
    </MainLayout>
  )
}

export default Home

const styles = EStyleSheet.create({})
