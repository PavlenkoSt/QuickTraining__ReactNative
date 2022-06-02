import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation } from '@react-navigation/native'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import CustomText from 'src/components/CustomText'
import LineChartComponent from './LineChart'
import useStatisticsGraphs from 'src/hooks/useStatisticsGraphs'
import ChartHeader from './BlockHeader'

import CupPic from 'src/assets/imgs/statistics/cup.svg'
import GrowthPic from 'src/assets/imgs/statistics/growth.svg'

export type BlockPositionType = {
  y: number
  height: number
  title: string
}

const Statistics = () => {
  const { navigate } = useNavigation()

  const { pushUps, pullUps, sitUps, plank } = useStatisticsGraphs()

  return (
    <MainLayout withoutContainer Header={() => <EmptyHeader withoutBackArr title="Statistics" />}>
      <ScrollView>
        {!!pushUps && <LineChartComponent data={pushUps} title="Push ups" />}
        {!!sitUps && <LineChartComponent data={sitUps} title="Sit ups" />}
        {!!plank && <LineChartComponent data={plank} title="Plank (seconds)" />}
        {!!pullUps && <LineChartComponent data={pullUps} title="Pull ups" />}
        <ChartHeader title="Other" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigate('PersonalRecords' as never)}
          >
            <View style={styles.imagePic}>
              <CupPic width={25} height={25} />
            </View>
            <CustomText style={styles.text}>Personal records</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigate('TrainingHistory' as never)}
          >
            <View style={styles.imagePic}>
              <GrowthPic width={25} height={25} />
            </View>
            <CustomText style={styles.text}>Training history</CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  )
}

export default Statistics

const styles = EStyleSheet.create({
  item: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
