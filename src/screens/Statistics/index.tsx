import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation } from '@react-navigation/native'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import CustomText from 'src/components/CustomText'
import useRealmTrainingResultsHistory from 'src/hooks/Realm/useRealmTrainingResultsHistory'

import CupPic from 'src/assets/imgs/statistics/cup.svg'

const Statistics = () => {
  const { navigate } = useNavigation()

  const { trainingResultsHistory } = useRealmTrainingResultsHistory()

  console.log('trainingResultsHistory', trainingResultsHistory)

  return (
    <MainLayout Header={() => <EmptyHeader withoutBackArr title="Statistics" />}>
      <View>
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
})
