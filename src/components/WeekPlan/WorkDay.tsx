import { Dimensions, View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation, StackActions } from '@react-navigation/native'

import time from 'src/utilts/time'
import { ExecutionExerciseEnum, IExercise } from 'src/types/ExerciseTypes'
import { IStatus } from 'src/services/ExerciseService'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import calculateExerciseReply from 'src/utilts/calculateExerciseReply'
import CustomText from '../CustomText'
import CustomButton from '../CustomButton'

import Check from 'src/assets/imgs/check.svg'

type WorkDayPropsType = {
  exercises: IExercise[]
  restTime: number
  status: IStatus
  activeDay: boolean
}

const WorkDay: FC<WorkDayPropsType> = ({ exercises, restTime, status, activeDay }) => {
  const { dispatch } = useNavigation()

  const { user } = useRealmUser()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          {exercises.map((exercise, i) => (
            <View key={`${exercise.id}-${i}`} style={styles.exBox}>
              <CustomText style={styles.exName}>{exercise.name}</CustomText>
              <CustomText style={styles.exGoal}>
                {exercise.execution === ExecutionExerciseEnum.HOLD
                  ? time.timeFormat(
                      calculateExerciseReply(exercise.coefficientDifficult, exercise.type, i, user)
                    )
                  : calculateExerciseReply(exercise.coefficientDifficult, exercise.type, i, user)}
              </CustomText>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <CustomText style={styles.rest}>Rest time:</CustomText>
          <CustomText>{time.timeFormat(restTime)}</CustomText>
        </View>
        {status === IStatus.COMPLETE && (
          <View style={styles.done}>
            <Check width={80} height={80} />
          </View>
        )}
        {activeDay && (
          <CustomButton
            onPress={() =>
              dispatch(
                StackActions.replace('Training', {
                  day: {
                    exercises,
                    restTime,
                  },
                })
              )
            }
            styles={styles.btn}
          >
            Get started
          </CustomButton>
        )}
      </View>
    </>
  )
}

export default WorkDay

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exBox: {
    backgroundColor: '$secondaryTheme',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    width: width / 3 - 30,
    height: 80,
  },
  exName: {
    fontSize: 13,
    textAlign: 'center',
  },
  exGoal: {
    fontSize: 18,
  },
  done: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  rest: {
    color: '#ccc',
  },
  btn: {
    marginTop: 5,
  },
})
