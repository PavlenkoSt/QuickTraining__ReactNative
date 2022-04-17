import React, { FC, useMemo } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { TabNavigationState, ParamListBase } from '@react-navigation/native'

import TabbarItem from './TabBarItem'

type TabBarPropsType = {
  navState: TabNavigationState<ParamListBase>
}

const TabBar: FC<TabBarPropsType> = ({ navState }) => {
  const currentRoute = useMemo(() => navState.routeNames[navState.index], [navState.index])

  const isWorkoutStack = useMemo(() => currentRoute === 'WorkoutStack', [currentRoute])
  const isStatisticsStack = useMemo(() => currentRoute === 'StatisticsStack', [currentRoute])
  const isSettingsStack = useMemo(() => currentRoute === 'SettingsStack', [currentRoute])

  return (
    <View style={styles.bar}>
      <TabbarItem
        name={'Workout'}
        toScreen="WorkoutStack"
        isActive={isWorkoutStack}
        src={require('src/assets/imgs/tabbar/training.png')}
        bigImg
      />
      <TabbarItem
        name={'Statistics'}
        toScreen="StatisticsStack"
        isActive={isStatisticsStack}
        src={require('src/assets/imgs/tabbar/statistics.png')}
      />
      <TabbarItem
        name={'Settings'}
        toScreen="SettingsStack"
        isActive={isSettingsStack}
        src={require('src/assets/imgs/tabbar/options.png')}
      />
    </View>
  )
}

export default TabBar

const styles = EStyleSheet.create({
  bar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '$secondaryTheme',
    borderTopColor: '#41494E',
    borderTopWidth: 0.5,
  },
  icon: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: '$fontMedium',
    textTransform: 'uppercase',
    color: '#65676F',
    marginTop: 5,
  },
})
