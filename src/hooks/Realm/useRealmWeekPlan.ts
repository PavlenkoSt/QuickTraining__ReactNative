import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import WeekPlanSchema from 'src/RealmDB/schemas/WeekPlan'
import { IStatus, WeekPlanType } from 'src/services/ExerciseService'

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

  const activeDay: number | null = useMemo(() => {
    if (weekPlan) {
      const findFirsIncompleteDayIndex = weekPlan.findIndex(
        (ex) => ex !== 'test' && ex !== 'rest' && ex.status === IStatus.INCOMPLETE
      )

      if (findFirsIncompleteDayIndex !== -1) {
        return findFirsIncompleteDayIndex
      } else {
        return 6
      }
    }

    return null
  }, [weekPlan])

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

  return { weekPlan, setWeekPlan, clearWeekPlan, activeDay }
}

export default useRealmWeekPlan
