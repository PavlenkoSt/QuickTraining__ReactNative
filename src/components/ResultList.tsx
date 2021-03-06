import { View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { IResult } from '../screens/TestExercises'
import CustomText from 'src/components/CustomText'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'
import time from 'src/utilts/time'

type ResultListPropsType = {
  results: IResult[]
}

const ResultList: FC<ResultListPropsType> = ({ results }) => {
  return (
    <View>
      {results.map((result, i) => (
        <View style={styles.item} key={`${result.name}-${i}`}>
          <CustomText>{result.name}</CustomText>
          <CustomText>
            {result.type === ExecutionExerciseEnum.REPEAT
              ? result.result
              : `${time.fromSecondsToMinutesAndSeconds(result.result).minutes}:${
                  time.fromSecondsToMinutesAndSeconds(result.result).seconds
                }`}
          </CustomText>
        </View>
      ))}
    </View>
  )
}

export default ResultList

const styles = EStyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '$secondaryTheme',
    borderWidth: 1,
    padding: 8,
  },
})
