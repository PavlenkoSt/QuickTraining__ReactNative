import { useMemo } from 'react'

import useRealmTrainingResultsHistory from 'src/hooks/Realm/useRealmTrainingResultsHistory'

const useStatisticsGraphs = () => {
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

  return {
    pushUps,
    pullUps,
    sitUps,
    plank,
  }
}

export default useStatisticsGraphs
