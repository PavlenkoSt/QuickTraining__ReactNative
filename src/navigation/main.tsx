import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBar from 'src/components/TabBar'

import Home from 'src/screens/Home'
import Statistics from 'src/screens/Statistics'
import Settings from 'src/screens/Settings'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const NavigationWrapper = () => {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
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
