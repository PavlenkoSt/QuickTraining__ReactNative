import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import { IDay } from 'src/services/ExerciseService'
import WorkDay from './WorkDay'
import CustomText from '../CustomText'
import CustomButton from '../CustomButton'
import useRealmUser from 'src/hooks/Realm/useRealmUser'

const WeekPlan = () => {
  const { weekPlan, activeDay } = useRealmWeekPlan()
  const { user } = useRealmUser()

  const { navigate } = useNavigation()

  if (!weekPlan) return <></>

  return (
    <View>
      <CustomText style={styles.week}>Current week: {user?.currentWeek}</CustomText>
      <CustomText style={styles.mainTitle}>Training plan</CustomText>
      {weekPlan.map((day: IDay | 'rest' | 'test', index) => {
        return (
          <View style={styles.item} key={index}>
            <View style={styles.header}>
              <View style={styles.line} />
              <CustomText style={styles.title}>Day {index + 1}</CustomText>
              <View style={styles.line} />
            </View>
            {day === 'rest' ? (
              <CustomText style={styles.text}>Rest day</CustomText>
            ) : day === 'test' ? (
              <>
                <CustomText style={styles.text}>Physical form test</CustomText>
                {activeDay === 6 && (
                  <CustomButton
                    onPress={() =>
                      navigate('TestExercises' as never, { userInfo: undefined } as never)
                    }
                    styles={styles.btn}
                  >
                    Get started
                  </CustomButton>
                )}
              </>
            ) : (
              <WorkDay
                exercises={day.exercises}
                restTime={day.restTime}
                status={day.status}
                inventar={day.inventar}
                activeDay={activeDay === index}
                withPullUps={false}
                index={index}
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
    fontSize: 18,
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
    backgroundColor: '#706f6f',
    height: 1,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#706f6f',
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
  week: {
    fontSize: 15,
    color: '#706f6f',
    textAlign: 'center',
    marginBottom: 15,
  },
})
