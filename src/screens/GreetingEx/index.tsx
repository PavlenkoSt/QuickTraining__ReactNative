import React, { FC } from 'react'

import Exercise from 'src/components/Exercise'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'

import ExerciseLayout from 'src/layouts/ExerciseLayout'

type GreetingEx1PropsType = {
  route: {
    params: {
      inventary: {
        haveBar: boolean
        haveWallBar: boolean
        haveBars: boolean
        haveStands: boolean
        havePowerTape: boolean
        haveWideTape: boolean
        haveSkippingRope: boolean
      }
      userInfo: {
        name: string
        age: number
        goal: GoalEnum
        duration: DurationEnum
        gender: GenderEnum
      }
    }
  }
}

const GreetingEx: FC<GreetingEx1PropsType> = ({}) => {
  return (
    <ExerciseLayout>
      <Exercise />
    </ExerciseLayout>
  )
}

export default GreetingEx

const styles = EStyleSheet.create({})
