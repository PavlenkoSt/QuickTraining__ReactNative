/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { LogBox } from 'react-native'
import Toast from 'react-native-toast-message'

import Context from './Context'
import RealmDB from 'src/RealmDB/index'

import { toastConfig } from './services/ToastService'
import Navigation from 'src/navigation/main'

const App = () => {
  const { RealmProvider } = RealmDB

  const [auth, setAuth] = useState(false)

  LogBox.ignoreLogs(['ViewPropTypes'])

  return (
    <>
      {/* @ts-ignore */}
      <RealmProvider>
        <Context.Provider value={{ setIsAuth: setAuth }}>
          <Navigation isAuth={auth} setIsAuth={setAuth} />
        </Context.Provider>
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
