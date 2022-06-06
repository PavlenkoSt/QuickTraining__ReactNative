import { View } from 'react-native'
import React, { FC, useMemo } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'
import time from 'src/utilts/time'

type HistoryExPropsType = {
  name: string
  result: number
  type: ExecutionExerciseEnum
}

const HistoryEx: FC<HistoryExPropsType> = ({ name, result, type }) => {
  const resultCalc = useMemo(() => {
    if (type === ExecutionExerciseEnum.HOLD) {
      const timeRes = time.fromSecondsToMinutesAndSeconds(result)

      return `${timeRes.minutes}:${timeRes.seconds}`
    } else {
      return result
    }
  }, [result, type])

  return (
    <View style={styles.container}>
      <CustomText style={styles.name}>{name}</CustomText>
      <CustomText style={styles.result}>{resultCalc}</CustomText>
    </View>
  )
}

export default HistoryEx

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  name: {
    color: '#ccc',
  },
  result: {
    color: '#ccc',
  },
})
