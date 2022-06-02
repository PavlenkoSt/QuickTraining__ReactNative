import { Realm } from '@realm/react'

import { WeekPlanType } from 'src/services/ExerciseService'
import { RealmDBKeys } from '../index'

export default class WeekPlanSchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId
  stringifyPlan!: string

  static generate(weekPlan: WeekPlanType) {
    return { stringifyPlan: JSON.stringify(weekPlan), _id: 0 }
  }

  static schema = {
    name: RealmDBKeys.WeekPlan,
    properties: {
      _id: 'int',
      stringifyPlan: 'string',
    },
    primaryKey: '_id',
  }
}
