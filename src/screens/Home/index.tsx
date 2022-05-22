import React, { FC, useEffect, useState } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import WeekPlan from 'src/components/WeekPlan'
import MainLayout from 'src/layouts/MainLayout'
import HomeHeader from 'src/screens/Home/HomeHeader'
import { IResult } from '../FirstTestExercises'
import ResultsModal from './ResultsModal'

type HomePropsType = {
  route: {
    params: {
      results?: IResult[]
    }
  }
}

const Home: FC<HomePropsType> = ({ route }) => {
  const [resultsVisible, setResultsVisible] = useState(false)

  useEffect(() => {
    if (route.params?.results) {
      setResultsVisible(true)
    }
  }, [route.params?.results])

  return (
    <MainLayout Header={HomeHeader}>
      <WeekPlan />
      {route.params?.results && (
        <ResultsModal
          visible={resultsVisible}
          setVisible={setResultsVisible}
          results={route.params.results}
        />
      )}
    </MainLayout>
  )
}

export default Home

const styles = EStyleSheet.create({})
