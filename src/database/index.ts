import Realm from 'realm'

import UserSchema from './schemas/User'

const openRealmDB = async () =>
  await Realm.open({
    path: 'realm_database',
    schema: [UserSchema],
    deleteRealmIfMigrationNeeded: true,
  })

export default openRealmDB
