import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import CustomText from '../CustomText'
import { IDay } from 'src/services/ExerciseService'
import Rest from './Rest'
import Test from './Test'
import WorkDay from './WorkDay'

const WeekPlan = () => {
  const { weekPlan } = useRealmWeekPlan()

  if (!weekPlan) return <></>

  return (
    <View>
      {/* <CustomButton onPress={() => console.log('weekPlan = ', weekPlan)}>Get plan</CustomButton> */}
      {weekPlan.map((day: IDay | 'rest' | 'test', index) => {
        console.log('day', day)

        if (day === 'rest') {
          return <Rest key={index} />
        }

        if (day === 'test') {
          return <Test key={index} />
        }

        return <WorkDay key={index} />
      })}
    </View>
  )
}

export default WeekPlan

const styles = EStyleSheet.create({})
