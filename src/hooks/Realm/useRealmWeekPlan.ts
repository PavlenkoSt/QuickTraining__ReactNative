import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import WeekPlanSchema from 'src/RealmDB/schemas/WeekPlan'
import { IStatus, WeekPlanType } from 'src/services/ExerciseService'
import { IDay } from 'src/services/ExerciseService'

const useRealmWeekPlan = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const weekPlanRealm = useQuery(WeekPlanSchema.schema.name)

  const weekPlan: WeekPlanType | null = useMemo(() => {
    if (weekPlanRealm.length) {
      return JSON.parse(weekPlanRealm[0].toJSON().stringifyPlan)
    }

    return null
  }, [weekPlanRealm])

  const thisProgramWithPullUps = useMemo(() => {
    if (weekPlanRealm.length) {
      return Boolean(JSON.parse(weekPlanRealm[0].toJSON().withPullUps))
    }

    return false
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

  const setWeekPlan = useCallback((weekPlan: WeekPlanType, withPullUps: boolean) => {
    realm.write(() => {
      realm.create(WeekPlanSchema.schema.name, WeekPlanSchema.generate(weekPlan, withPullUps))
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
      realm.delete(realm.objects(WeekPlanSchema.schema.name))
    })
  }, [])

  return {
    weekPlan,
    setWeekPlan,
    clearWeekPlan,
    activeDay,
    completeTraining,
    thisProgramWithPullUps,
  }
}

export default useRealmWeekPlan
