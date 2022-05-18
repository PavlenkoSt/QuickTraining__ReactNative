/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { LogBox } from 'react-native'
import Toast from 'react-native-toast-message'

import RealmDB from 'src/RealmDB/index'

import { toastConfig } from './services/ToastService'
import Navigation from 'src/navigation/main'

const App = () => {
  const { RealmProvider } = RealmDB

  LogBox.ignoreLogs(['ViewPropTypes'])

  return (
    <>
      {/* @ts-ignore */}
      <RealmProvider>
        <Navigation />
      </RealmProvider>
      <Toast config={toastConfig} />
    </>
  )
}

export default App

EStyleSheet.build({
  // colors
  $primaryTheme: '#121B22',
  $secondaryTheme: '#1F2C34',
  $blue: '#0d4f9e',
  $red: '#eb4034',
  $green: '#078c4e',
  // fonts
  $fontRegular: 'DMSans-Regular',
  $fontMedium: 'DMSans-Medium',
  $fontBold: 'DMSans-Bold',
})
