import { Realm } from '@realm/react'

import { WeekPlanType } from 'src/services/ExerciseService'

export default class WeekPlanSchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId
  stringifyPlan!: string

  static generate(weekPlan: WeekPlanType, withPullUps: boolean) {
    return { stringifyPlan: JSON.stringify(weekPlan), _id: 0, withPullUps: Number(withPullUps) }
  }

  static schema = {
    name: 'WeekPlan',
    properties: {
      _id: 'int',
      stringifyPlan: 'string',
      withPullUps: 'int',
    },
    primaryKey: '_id',
  }
}
