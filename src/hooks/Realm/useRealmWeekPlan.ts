import { useCallback, useMemo } from 'react'

import RealmDB, { RealmDBKeys } from 'src/RealmDB'
import WeekPlanSchema from 'src/RealmDB/schemas/WeekPlan'
import { IStatus, WeekPlanType } from 'src/services/ExerciseService'
import { IDay } from 'src/services/ExerciseService'

const useRealmWeekPlan = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const weekPlanRealm = useQuery(RealmDBKeys.WeekPlan)

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
      realm.create(RealmDBKeys.WeekPlan, WeekPlanSchema.generate(weekPlan))
    })
  }, [])

  const completeTraining = useCallback(() => {
    realm.write(() => {
      let updated = false

      //@ts-ignore
      const updatedWeekPlan = JSON.parse(weekPlanRealm[0].stringifyPlan).map(
        (item: IDay | 'test' | 'rest') => {
          if (item === 'rest' || item === 'test') return item

          if (!updated && item.status === IStatus.INCOMPLETE) {
            updated = true
            return { ...item, status: IStatus.COMPLETE }
          }

          return item
        }
      )

      //@ts-ignore
      weekPlanRealm[0].stringifyPlan = JSON.stringify(updatedWeekPlan)
    })
  }, [])

  const clearWeekPlan = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects(RealmDBKeys.WeekPlan))
    })
  }, [])

  return { weekPlan, setWeekPlan, clearWeekPlan, activeDay, completeTraining }
}

export default useRealmWeekPlan
