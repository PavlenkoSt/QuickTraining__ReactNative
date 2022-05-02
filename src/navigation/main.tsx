import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBar from 'src/components/TabBar'
import RealmDB from 'src/RealmDB'
import { IUser } from 'src/RealmDB/schemas/User'

import Home from 'src/screens/Home'
import Statistics from 'src/screens/Statistics'
import Settings from 'src/screens/Settings'
import Greeting from 'src/screens/Greeting'
import GreetingForm from 'src/screens/GreetingForm'
import Gallery from 'src/screens/Gallery'
import GreetingInventar from 'src/screens/GreetingInventar'
import GreetingTest from 'src/screens/GreetingTest'
import GreetingEx from 'src/screens/GreetingEx'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const NavigationWrapper = () => {
  const { useObject } = RealmDB

  const user: IUser | null = useObject('User', 0)?.toJSON()

  return (
    <NavigationContainer>{!!user ? <TabsNavigation /> : <GreetingStack />}</NavigationContainer>
  )
}

const GreetingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Greeting" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Greeting" component={Greeting} />
      <Stack.Screen name="GreetingForm" component={GreetingForm} />
      <Stack.Screen name="GreetingInventar" component={GreetingInventar} />
      <Stack.Screen name="GreetingTest" component={GreetingTest} />
      <Stack.Screen name="GreetingEx" component={GreetingEx} />
      <Stack.Screen name="Gallery" component={Gallery} />
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
