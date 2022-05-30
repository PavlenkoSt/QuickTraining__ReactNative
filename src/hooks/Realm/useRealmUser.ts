import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import UserSchema, { DurationEnum, IUser } from 'src/RealmDB/schemas/User'
import { GenderEnum } from 'src/RealmDB/schemas/User'

type UserInfoPropsType = {
  name: string
  age: number
  duration: DurationEnum
  gender: GenderEnum
}

export type RecordsType = {
  pushUpMax: number
  sitUpMax: number
  plankMax: number
  pullUpMax: number
}

export type PercentType = {
  levelLabel: string
  percent: number
}

const useRealmUser = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const userRealm = useQuery('User')

  const user: IUser | null = useMemo(() => {
    if (userRealm.length) {
      return userRealm[0].toJSON()
    }

    return null
  }, [userRealm])

  const setUser = useCallback((user: IUser) => {
    if (!user) {
      return
    }
    realm.write(() => {
      realm.create('User', UserSchema.generate(user))
    })
  }, [])

  const updateUser = useCallback(
    (userInfo: UserInfoPropsType | null) => {
      if (user) {
        realm.write(() => {
          if (userInfo) {
            //@ts-ignore
            userRealm[0].name = userInfo.name
            //@ts-ignore
            userRealm[0].age = userInfo.age
            //@ts-ignore
            userRealm[0].gender = userInfo.gender
            //@ts-ignore
            userRealm[0].duration = userInfo.duration
          }
        })
      }
    },
    [user]
  )

  const updateRecords = useCallback(
    (records: RecordsType) => {
      if (user) {
        realm.write(() => {
          //@ts-ignore
          userRealm[0].pushUpMax = records.pushUpMax
          //@ts-ignore
          userRealm[0].sitUpMax = records.sitUpMax
          //@ts-ignore
          userRealm[0].plankMax = records.plankMax
          //@ts-ignore
          userRealm[0].pullUpMax = records.pullUpMax
          //@ts-ignore
          userRealm[0].currentWeek = userRealm[0].currentWeek + 1
        })
      }
    },
    [user]
  )

  const updatePercent = useCallback(
    (percent: PercentType) => {
      if (user) {
        realm.write(() => {
          //@ts-ignore
          userRealm[0].levelLabel = percent.levelLabel
          //@ts-ignore
          userRealm[0].levelPercent = percent.percent
        })
      }
    },
    [user]
  )

  const clearUser = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('User'))
    })
  }, [])

  return {
    setUser,
    clearUser,
    updateUser,
    updateRecords,
    updatePercent,
    user,
  }
}

export default useRealmUser
