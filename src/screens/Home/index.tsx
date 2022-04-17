import { Text } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import MainHeader from 'src/components/headers/MainHeader'

const Home = () => {
  return (
    <MainLayout Header={MainHeader}>
      <Text>Home</Text>
    </MainLayout>
  )
}

export default Home

const styles = EStyleSheet.create({})
