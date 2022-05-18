import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import UserSchema, { IUser } from 'src/RealmDB/schemas/User'

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

  const updateUser = useCallback(() => {
    if (user) {
      realm.write(() => {
        // example
        //@ts-ignore
        userRealm[0].levelPercent = 23
      })
    }
  }, [user])

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
