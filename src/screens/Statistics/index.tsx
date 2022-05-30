import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation } from '@react-navigation/native'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import CustomText from 'src/components/CustomText'
import useRealmTrainingResultsHistory from 'src/hooks/Realm/useRealmTrainingResultsHistory'
import LineChartComponent from './LineChart'

import CupPic from 'src/assets/imgs/statistics/cup.svg'

const Statistics = () => {
  const { navigate } = useNavigation()

  const { trainingResultsHistory } = useRealmTrainingResultsHistory()

  console.log('trainingResultsHistory', trainingResultsHistory)

  const pushUps = {
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 21, 24, 45, 53],
        color: (opacity = 1) => `rgba(17, 173, 56, ${opacity})`,
      },
    ],
    legend: [],
    labels: [],
  }

  const sitUps = {
    datasets: [
      {
        data: [43, 21, 24, 45, 53, 20, 45, 28, 80, 99],
        color: (opacity = 1) => `rgba(17, 126, 173, ${opacity})`,
      },
    ],
    legend: [],
    labels: [],
  }

  const plan = {
    datasets: [
      {
        data: [45, 53, 20, 45, 43, 21, 24, 28, 80, 99],
        color: (opacity = 1) => `rgba(173, 111, 17, ${opacity})`,
      },
    ],
    legend: [],
    labels: [],
  }

  const pullUps = {
    datasets: [
      {
        data: [45, 53, 20, 45, 43, 21, 24, 28, 80, 99],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
    ],
    legend: [],
    labels: [],
  }

  return (
    <MainLayout witthoutContainer Header={() => <EmptyHeader withoutBackArr title="Statistics" />}>
      <LineChartComponent data={pushUps} title="Push ups" />
      <LineChartComponent data={sitUps} title="Sit ups" />
      <LineChartComponent data={plan} title="Plank (seconds)" />
      <LineChartComponent data={pullUps} title="Pull ups" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={() => navigate('PersonalRecords' as never)}>
          <View style={styles.imagePic}>
            <CupPic width={25} height={25} />
          </View>
          <CustomText style={styles.text}>Personal records</CustomText>
        </TouchableOpacity>
      </View>
    </MainLayout>
  )
}

export default Statistics

const styles = EStyleSheet.create({
  item: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  text: {
    color: '#a8abb3',
    fontSize: 18,
    fontFamily: '$fontMedium',
  },
  imagePic: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
})
