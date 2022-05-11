import { View } from 'react-native'
import React, { FC, memo } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'
import { IExercise } from 'src/types/ExerciseTypes'
import { IResult } from '.'

import Check from 'src/assets/imgs/check.svg'

type ExerciseFooterPropsType = {
  testPlan: IExercise[]
  testResult: IResult[]
  activeIndex: number
  exercisePercent: number | null
}

const ExerciseFooter: FC<ExerciseFooterPropsType> = ({
  testPlan,
  testResult,
  activeIndex,
  exercisePercent,
}) => {
  console.log('testResult', testResult)

  return (
    <View style={styles.program}>
      {testPlan.map((exercise, i) => {
        const calculateCount =
          testResult?.[i]?.result === 0
            ? 0
            : testResult?.[i]?.result
            ? testResult?.[i]?.result
            : exercisePercent
            ? ((((exercise.max - exercise.min) * 100) / exercise.max) * exercisePercent) / 100
            : 'max'

        return (
          <View
            key={exercise.id + 20}
            style={[styles.item, activeIndex === i && styles.itemActive]}
          >
            <CustomText style={styles.name}>{exercise.name}</CustomText>
            {/* need fix when its a hold ex type */}
            <CustomText style={styles.count}>{calculateCount}</CustomText>
            {activeIndex > i && (
              <View style={styles.itemLabel}>
                <View style={styles.picContainer}>
                  <Check width={20} height={20} />
                </View>
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default memo(ExerciseFooter)

const styles = EStyleSheet.create({
  program: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 30,
  },
  item: {
    backgroundColor: '$secondaryTheme',
    borderColor: '$blue',
    borderWidth: 1,
    padding: 10,
    minWidth: 100,
    position: 'relative',
  },
  itemLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  itemActive: {
    backgroundColor: '$blue',
  },
  name: {
    textAlign: 'center',
  },
  count: {
    textAlign: 'center',
    fontSize: 12,
  },
  picContainer: {
    position: 'relative',
    top: -5,
    left: -5,
    backgroundColor: '#111',
    width: 20,
    borderRadius: 100,
  },
})
