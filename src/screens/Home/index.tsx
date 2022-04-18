import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import RealmDB from 'src/RealmDB/index'
import UserSchema, { IUser } from 'src/RealmDB/schemas/User'

import MainLayout from 'src/layouts/MainLayout'
import HomeHeader from 'src/screens/Home/HomeHeader'

const Home = () => {
  // const { useRealm } = RealmDB

  // const realm = useRealm()

  useEffect(() => {
    // const handleAddTask = (user: IUser): void => {
    //   if (!user) {
    //     return
    //   }
    //   realm.write(() => {
    //     realm.create('User', UserSchema.generate(user))
    //   })
    // }
    // handleAddTask({
    //   _id: 0,
    //   gender: 'male',
    //   name: 'Stass',
    //   plankMax: 10,
    //   pushUpMax: 10,
    //   sitUpMax: 10,
    // })
  }, [])

  return (
    <MainLayout Header={HomeHeader}>
      <Text>Home</Text>
    </MainLayout>
  )
}

export default Home

const styles = EStyleSheet.create({})
