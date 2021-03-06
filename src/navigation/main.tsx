import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBar from 'src/components/TabBar'

import Home from 'src/screens/Home'
import Statistics from 'src/screens/Statistics'
import Settings from 'src/screens/Settings'
import About from 'src/screens/About'
import FirstSetUserInfoForm from 'src/screens/FirstSetUserInfoForm'
import Gallery from 'src/screens/Gallery'
import FirstSetInventarForm from 'src/screens/FirstSetInventarForm'
import FirtsTestInfo from 'src/screens/FirtsTestInfo'
import TestExercises from 'src/screens/TestExercises'
import Profile from 'src/screens/Profile'
import Inventar from 'src/screens/Inventar'
import Training from 'src/screens/Training'
import TestResult from 'src/screens/TestResult'
import PersonalRecords from 'src/screens/PersonalRecords'
import TrainingHistory from 'src/screens/TrainingHistory'

import useRealmUser from 'src/hooks/Realm/useRealmUser'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const NavigationWrapper = () => {
  const { user } = useRealmUser()

  return <NavigationContainer>{!!user ? <MainStack /> : <RegisterStack />}</NavigationContainer>
}

const RegisterStack = () => {
  return (
    <Stack.Navigator initialRouteName="About" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="FirstSetUserInfoForm" component={FirstSetUserInfoForm} />
      <Stack.Screen name="FirstSetInventarForm" component={FirstSetInventarForm} />
      <Stack.Screen name="FirtsTestInfo" component={FirtsTestInfo} />
      <Stack.Screen name="TestExercises" component={TestExercises} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="TestResult" component={TestResult} />
    </Stack.Navigator>
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabsNavigation} />
      <Stack.Screen name="Training" component={Training} />
      <Stack.Screen name="TestExercises" component={TestExercises} />
      <Stack.Screen name="TestResult" component={TestResult} />
    </Stack.Navigator>
  )
}

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={({ state }) => <TabBar navState={state} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="StatisticsStack" component={StatisticsStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  )
}

const StatisticsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Statistics" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="PersonalRecords" component={PersonalRecords} />
      <Stack.Screen name="TrainingHistory" component={TrainingHistory} />
    </Stack.Navigator>
  )
}

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Inventar" component={Inventar} />
    </Stack.Navigator>
  )
}

export default NavigationWrapper
