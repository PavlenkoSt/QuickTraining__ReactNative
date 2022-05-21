import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import WeekPlanSchema from 'src/RealmDB/schemas/WeekPlan'
import { WeekPlanType } from 'src/services/ExerciseService'

const useRealmWeekPlan = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const weekPlanRealm = useQuery('WeekPlan')

  const weekPlan: WeekPlanType | null = useMemo(() => {
    if (weekPlanRealm.length) {
      return JSON.parse(weekPlanRealm[0].toJSON().stringifyPlan)
    }

    return null
  }, [weekPlanRealm])

  const setWeekPlan = useCallback((weekPlan: WeekPlanType) => {
    realm.write(() => {
      realm.create('WeekPlan', WeekPlanSchema.generate(weekPlan))
    })
  }, [])

  const clearWeekPlan = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('WeekPlan'))
    })
  }, [])

  return { weekPlan, setWeekPlan, clearWeekPlan }
}

export default useRealmWeekPlan
