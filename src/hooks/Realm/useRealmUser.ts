import { useCallback } from 'react'

import RealmDB from 'src/RealmDB'
import UserSchema, { IUser } from 'src/RealmDB/schemas/User'

const useRealmUser = () => {
  const { useRealm } = RealmDB

  const realm = useRealm()

  const setUser = useCallback((user: IUser) => {
    if (!user) {
      return
    }
    realm.write(() => {
      realm.create('User', UserSchema.generate(user))
    })
  }, [])

  const clearUser = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('User'))
    })
  }, [])

  const getUser = useCallback((): IUser | null => {
    const users = realm.objects('User').toJSON()

    if (users.length) {
      return users[0]
    }

    return null
  }, [])

  return {
    setUser,
    clearUser,
    getUser,
  }
}

export default useRealmUser
