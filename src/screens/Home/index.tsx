import React from 'react'
import { Text } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import HomeHeader from 'src/screens/Home/HomeHeader'

const Home = () => {
  return (
    <MainLayout Header={HomeHeader}>
      <Text>Home</Text>
    </MainLayout>
  )
}

export default Home

const styles = EStyleSheet.create({})
