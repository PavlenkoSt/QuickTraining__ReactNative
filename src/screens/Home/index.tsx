import React from 'react'
import { Text } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomButton from 'src/components/CustomButton'
import Context from 'src/Context'
import useRealmUser from 'src/hooks/Realm/useRealmUser'

import MainLayout from 'src/layouts/MainLayout'
import HomeHeader from 'src/screens/Home/HomeHeader'

const Home = () => {
  const { clearUser } = useRealmUser()

  return (
    <Context.Consumer>
      {(context) => (
        <MainLayout Header={HomeHeader}>
          <Text>Home</Text>
          <CustomButton
            onPress={() => {
              clearUser()
              if (context.setIsAuth) {
                context.setIsAuth(false)
              }
            }}
          >
            clear user data
          </CustomButton>
        </MainLayout>
      )}
    </Context.Consumer>
  )
}

export default Home

const styles = EStyleSheet.create({})
