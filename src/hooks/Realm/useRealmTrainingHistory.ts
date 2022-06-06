import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import TrainingHistorySchema, {
  ITrainingHistoryDayDB,
  ITrainingHistoryWeekDB,
} from 'src/RealmDB/schemas/TrainingHistory'

const useRealmTrainingHistory = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const trainingHistoryRealm = useQuery(TrainingHistorySchema.schema.name)

  const trainingHistory: ITrainingHistoryWeekDB[] | null = useMemo(() => {
    if (trainingHistoryRealm) {
      return trainingHistoryRealm.toJSON().reverse()
    }
    return null
  }, [trainingHistoryRealm])

  const createTrainingHistoryWeek = useCallback(
    (weekNumber: number, firstDay: ITrainingHistoryDayDB) => {
      realm.write(() => {
        realm.create(
          TrainingHistorySchema.schema.name,
          TrainingHistorySchema.generate({
            _id: Date.now() + Math.random(),
            daysString: JSON.stringify([firstDay]),
            weekNumber,
          })
        )
      })
    },
    []
  )

  const addTrainingHistoryDay = useCallback((day: ITrainingHistoryDayDB, currentWeek: number) => {
    const list = realm.objects(TrainingHistorySchema.schema.name)

    if (!list || !list.length) return

    const findIndexThisWeek = list.findIndex((item) => item.toJSON().weekNumber === currentWeek)

    if (findIndexThisWeek === -1) return

    //@ts-ignore
    const currentExercises = JSON.parse(list[findIndexThisWeek].daysString)

    realm.write(() => {
      //@ts-ignore
      list[findIndexThisWeek].daysString = JSON.stringify([...currentExercises, day])
    })
  }, [])

  const clearTrainingHistory = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects(TrainingHistorySchema.schema.name))
    })
  }, [])

  return {
    trainingHistory,
    createTrainingHistoryWeek,
    addTrainingHistoryDay,
    clearTrainingHistory,
  }
}

export default useRealmTrainingHistory
