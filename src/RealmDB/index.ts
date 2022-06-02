import { createRealmContext } from '@realm/react'

import UserSchema from 'src/RealmDB/schemas/User'
import InventorySchema from 'src/RealmDB/schemas/Inventory'
import WeekPlanSchema from './schemas/WeekPlan'
import TrainingResultsHistorySchema from './schemas/TrainingResultsHistory'

const config = {
  schema: [UserSchema, InventorySchema, WeekPlanSchema, TrainingResultsHistorySchema],
}

export default createRealmContext(config)
