import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import TrainingResultsHistorySchema, {
  ITrainingResultsHistoryDB,
} from 'src/RealmDB/schemas/TrainingResultsHistory'

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

  const setTrainingResultsHistory = useCallback((history: ITrainingResultsHistoryDB) => {
    if (!history) {
      return
    }
    realm.write(() => {
      realm.create('TrainingResultsHistory', TrainingResultsHistorySchema.generate(history))
    })
  }, [])

  const clearTrainingResultsHistory = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('TrainingResultsHistory'))
    })
  }, [])

  return { trainingResultsHistory, setTrainingResultsHistory, clearTrainingResultsHistory }
}

export default useRealmTrainingResultsHistory
