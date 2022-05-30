import React, { useMemo } from 'react'
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

  const { sortedTrainingResults } = useRealmTrainingResultsHistory()

  const pushUps = useMemo(() => {
    if (!sortedTrainingResults?.pushUps || !sortedTrainingResults.pushUps.length) return null

    return {
      datasets: [
        {
          data: sortedTrainingResults.pushUps,
          color: (opacity = 1) => `rgba(17, 173, 56, ${opacity})`,
        },
      ],
      legend: [],
      labels: [],
    }
  }, [sortedTrainingResults])

  const sitUps = useMemo(() => {
    if (!sortedTrainingResults?.sitUps || !sortedTrainingResults.sitUps.length) return null

    return {
      datasets: [
        {
          data: sortedTrainingResults.sitUps,
          color: (opacity = 1) => `rgba(17, 126, 173, ${opacity})`,
        },
      ],
      legend: [],
      labels: [],
    }
  }, [sortedTrainingResults])

  const plank = useMemo(() => {
    if (!sortedTrainingResults?.plank || !sortedTrainingResults.plank.length) return null

    return {
      datasets: [
        {
          data: sortedTrainingResults.plank,
          color: (opacity = 1) => `rgba(173, 111, 17, ${opacity})`,
        },
      ],
      legend: [],
      labels: [],
    }
  }, [sortedTrainingResults])

  const pullUps = useMemo(() => {
    if (!sortedTrainingResults?.pullUps || !sortedTrainingResults.pullUps.length) return null

    return {
      datasets: [
        {
          data: sortedTrainingResults.pullUps,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        },
      ],
      legend: [],
      labels: [],
    }
  }, [sortedTrainingResults])

  return (
    <MainLayout witthoutContainer Header={() => <EmptyHeader withoutBackArr title="Statistics" />}>
      {!!pushUps && <LineChartComponent data={pushUps} title="Push ups" />}
      {!!sitUps && <LineChartComponent data={sitUps} title="Sit ups" />}
      {!!plank && <LineChartComponent data={plank} title="Plank (seconds)" />}
      {!!pullUps && <LineChartComponent data={pullUps} title="Pull ups" />}
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
