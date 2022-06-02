import { createRealmContext } from '@realm/react'

import UserSchema from 'src/RealmDB/schemas/User'
import InventorySchema from 'src/RealmDB/schemas/Inventory'
import WeekPlanSchema from './schemas/WeekPlan'
import TrainingResultsHistorySchema from './schemas/TrainingResultsHistory'

export enum RealmDBKeys {
  Inventory = 'Inventory',
  TrainingResultsHistory = 'TrainingResultsHistory',
  User = 'User',
  WeekPlan = 'WeekPlan',
}

const config = {
  schema: [UserSchema, InventorySchema, WeekPlanSchema, TrainingResultsHistorySchema],
}

export default createRealmContext(config)
