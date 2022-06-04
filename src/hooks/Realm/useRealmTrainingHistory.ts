import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import TrainingHistorySchema, { ITrainingHistoryDayDB } from 'src/RealmDB/schemas/TrainingHistory'

const useRealmTrainingHistory = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const trainingHistoryRealm = useQuery(TrainingHistorySchema.schema.name)

  const trainingHistory = useMemo(() => {
    if (trainingHistoryRealm) {
      return trainingHistoryRealm.toJSON()
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
    const targetInList = list.filtered(`weekNumber = '${currentWeek}'`).toJSON()

    if (!targetInList || !targetInList.length) return

    const currentExercises = targetInList[0].daysString

    realm.write(() => {
      targetInList[0].daysString = JSON.stringify([...currentExercises, day])
    })
  }, [])

  const clearTrainingHistory = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects(TrainingHistorySchema.schema.name))
    })
  }, [])

  return { trainingHistory, createTrainingHistoryWeek, addTrainingHistoryDay, clearTrainingHistory }
}

export default useRealmTrainingHistory
