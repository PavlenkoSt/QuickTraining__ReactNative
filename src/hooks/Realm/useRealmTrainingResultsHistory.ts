import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import TrainingResultsHistorySchema, {
  ITrainingResultsHistoryDB,
} from 'src/RealmDB/schemas/TrainingResultsHistory'

type SortedTrainingResultsType = {
  pushUps: number[]
  sitUps: number[]
  pullUps: number[]
  plank: number[]
  weeks: {
    pushUps: number[]
    sitUps: number[]
    pullUps: number[]
    plank: number[]
  }
}

const useRealmTrainingResultsHistory = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const TrainingResultsHistoryRealm = useQuery('TrainingResultsHistory')

  const trainingResultsHistory: ITrainingResultsHistoryDB[] | null = useMemo(() => {
    if (TrainingResultsHistoryRealm.length) {
      return TrainingResultsHistoryRealm.toJSON()
    }

    return null
  }, [TrainingResultsHistoryRealm])

  const sortedTrainingResults = useMemo(() => {
    if (trainingResultsHistory && trainingResultsHistory.length) {
      const result: SortedTrainingResultsType = {
        pushUps: [],
        sitUps: [],
        pullUps: [],
        plank: [],
        weeks: {
          pushUps: [],
          sitUps: [],
          pullUps: [],
          plank: [],
        },
      }

      trainingResultsHistory.forEach((historyItem) => {
        result.pushUps.push(historyItem.pushUps)
        result.sitUps.push(historyItem.sitUps)
        result.plank.push(historyItem.plank)

        if (historyItem.pullUps !== -1) {
          result.pullUps.push(historyItem.pullUps)
        }
      })

      return result
    }

    return null
  }, [trainingResultsHistory])

  const addTrainingResultsHistory = useCallback((history: ITrainingResultsHistoryDB) => {
    if (!history) {
      return
    }
    realm.write(() => {
      realm.create(
        'TrainingResultsHistory',
        TrainingResultsHistorySchema.generate({ _id: Date.now(), ...history })
      )
    })
  }, [])

  const clearTrainingResultsHistory = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('TrainingResultsHistory'))
    })
  }, [])

  return { sortedTrainingResults, addTrainingResultsHistory, clearTrainingResultsHistory }
}

export default useRealmTrainingResultsHistory
