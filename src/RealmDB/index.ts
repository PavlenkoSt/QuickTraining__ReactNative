import { createRealmContext } from '@realm/react'

import UserSchema from 'src/RealmDB/schemas/User'

const config = {
  schema: [UserSchema],
}

export default createRealmContext(config)
