import React, { FC } from 'react'

import Exercise from 'src/components/Exercise'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/EmptyHeader'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'

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
    <MainLayout Header={() => <EmptyHeader title="Physical form test" />}>
      <Exercise />
    </MainLayout>
  )
}

export default GreetingEx

const styles = EStyleSheet.create({})
