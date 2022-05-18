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
import FirstTestExercises from 'src/screens/FirstTestExercises'
import TrainingResult from 'src/screens/TrainingResult'

import useRealmUser from 'src/hooks/Realm/useRealmUser'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const NavigationWrapper = () => {
  const { user } = useRealmUser()

  return (
    <NavigationContainer>{!!user ? <TabsNavigation /> : <GreetingStack />}</NavigationContainer>
  )
}

const GreetingStack = () => {
  return (
    <Stack.Navigator initialRouteName="About" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="FirstSetUserInfoForm" component={FirstSetUserInfoForm} />
      <Stack.Screen name="FirstSetInventarForm" component={FirstSetInventarForm} />
      <Stack.Screen name="FirtsTestInfo" component={FirtsTestInfo} />
      <Stack.Screen name="FirstTestExercises" component={FirstTestExercises} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="TrainingResult" component={TrainingResult} />
    </Stack.Navigator>
  )
}

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="WorkoutStack"
      screenOptions={{ headerShown: false }}
      tabBar={({ state }) => <TabBar navState={state} />}
    >
      <Tab.Screen name="WorkoutStack" component={WorkoutStack} />
      <Tab.Screen name="StatisticsStack" component={StatisticsStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  )
}

const WorkoutStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const StatisticsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Statistics" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  )
}

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default NavigationWrapper
