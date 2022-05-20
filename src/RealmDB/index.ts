import { createRealmContext } from '@realm/react'

import UserSchema from 'src/RealmDB/schemas/User'
import InventorySchema from 'src/RealmDB/schemas/Inventory'

const config = {
  schema: [UserSchema, InventorySchema],
}

export default createRealmContext(config)
