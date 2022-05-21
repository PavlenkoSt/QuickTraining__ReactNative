import { createRealmContext } from '@realm/react'

import UserSchema from 'src/RealmDB/schemas/User'
import InventorySchema from 'src/RealmDB/schemas/Inventory'
import WeekPlanSchema from './schemas/WeekPlan'

const config = {
  schema: [UserSchema, InventorySchema, WeekPlanSchema],
}

export default createRealmContext(config)
