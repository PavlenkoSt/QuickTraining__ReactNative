import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import { IDay } from 'src/services/ExerciseService'
import CustomText from '../CustomText'
import WorkDay from './WorkDay'
import CustomButton from '../CustomButton'

const WeekPlan = () => {
  const { weekPlan, activeDay } = useRealmWeekPlan()

  if (!weekPlan) return <></>

  return (
    <View>
      <CustomText style={styles.mainTitle}>Week training plan</CustomText>
      {weekPlan.map((day: IDay | 'rest' | 'test', index) => {
        return (
          <View style={styles.item}>
            <View style={styles.header}>
              <View style={styles.line} />
              <CustomText style={styles.title}>Day {index + 1}</CustomText>
              <View style={styles.line} />
            </View>
            {day === 'rest' ? (
              <CustomText style={styles.text} key={index}>
                Rest day
              </CustomText>
            ) : day === 'test' ? (
              <>
                <CustomText style={styles.text} key={index}>
                  Physical test
                </CustomText>
                {activeDay === 6 && <CustomButton styles={styles.btn}>Get started</CustomButton>}
              </>
            ) : (
              <WorkDay
                key={index}
                exercises={day.exercises}
                restTime={day.restTime}
                status={day.status}
                activeDay={activeDay === index}
              />
            )}
          </View>
        )
      })}
    </View>
  )
}

export default WeekPlan

const styles = EStyleSheet.create({
  mainTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#ccc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  line: {
    backgroundColor: '#949494',
    height: 1,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#949494',
    marginHorizontal: 5,
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  text: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 10,
  },
})
