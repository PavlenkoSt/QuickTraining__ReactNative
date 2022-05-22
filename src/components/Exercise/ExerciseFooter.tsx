import { View } from 'react-native'
import React, { FC, memo } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { IExercise } from 'src/types/ExerciseTypes'
import CustomText from 'src/components/CustomText'
import { IResult } from 'src/screens/FirstTestExercises'
import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import calculateExerciseReply from 'src/utilts/calculateExerciseReply'

import Check from 'src/assets/imgs/check.svg'

type ExerciseFooterPropsType = {
  testPlan: IExercise[]
  testResult: IResult[]
  activeIndex: number
}

const ExerciseFooter: FC<ExerciseFooterPropsType> = ({ testPlan, testResult, activeIndex }) => {
  const { weekPlan } = useRealmWeekPlan()

  return (
    <View style={styles.program}>
      {testPlan.map((exercise, i) => {
        const calculateCount =
          testResult?.[i]?.result === 0
            ? 0
            : testResult?.[i]?.result
            ? testResult?.[i]?.result
            : !!weekPlan
            ? calculateExerciseReply(exercise.coefficientDifficult, exercise.type, i)
            : 'max'

        return (
          <View
            key={`${exercise.type}-${exercise.id}-${i}`}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  item: {
    backgroundColor: '$secondaryTheme',
    borderColor: '$blue',
    borderWidth: 1,
    padding: 10,
    width: 260,
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
