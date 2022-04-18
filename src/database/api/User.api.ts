import openRealmDB from '..'
import { IUser } from '../schemas/User'

const User = {
  get: async () => {
    try {
      const realm = await openRealmDB()

      const userData = realm.objects('User')

      console.log('user', userData)

      realm.close()

      return userData
    } catch (e) {
      console.log(e)
    }
  },
  set: async (userData: IUser) => {
    try {
      const realm = await openRealmDB()

      realm.write(() => {
        realm.create('User', userData)
      })

      realm.close()

      return true
    } catch (e) {
      console.log(e)
    }
  },
}

export default User
