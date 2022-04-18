/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import RealmDB from 'src/RealmDB/index'

import Navigation from 'src/navigation/main'

const App = () => {
  const { RealmProvider } = RealmDB

  return (
    //@ts-ignore
    <RealmProvider>
      <Navigation />
    </RealmProvider>
  )
}

export default App

EStyleSheet.build({
  // colors
  $primaryTheme: '#121B22',
  $secondaryTheme: '#1F2C34',
  // fonts
  $fontRegular: 'DMSans-Regular',
  $fontMedium: 'DMSans-Medium',
  $fontBold: 'DMSans-Bold',
})
