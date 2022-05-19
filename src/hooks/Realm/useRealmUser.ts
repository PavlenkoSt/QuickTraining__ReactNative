import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import UserSchema, { DurationEnum, IUser } from 'src/RealmDB/schemas/User'
import { GenderEnum } from './../../RealmDB/schemas/User'

type UserInfoPropsType = {
  name: string
  age: number
  duration: DurationEnum
  gender: GenderEnum
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

  const clearUser = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('User'))
    })
  }, [])

  return {
    setUser,
    clearUser,
    updateUser,
    user,
  }
}

export default useRealmUser
