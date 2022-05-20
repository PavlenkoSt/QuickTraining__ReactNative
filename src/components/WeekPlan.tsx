import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

const WeekPlan = () => {
  const plan = [{ exerciseId: 1, count: 20 }]

  return (
    <View>
      {plan.map((ex) => (
        <View></View>
      ))}
    </View>
  )
}

export default WeekPlan

const styles = EStyleSheet.create({})
