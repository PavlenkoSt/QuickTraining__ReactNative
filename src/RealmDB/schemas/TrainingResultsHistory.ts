import { Realm } from '@realm/react'

export default class TrainingResultsHistorySchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId
  pushUps!: number
  pullUps!: number
  sitUps!: number
  plank!: number

  static generate(trainingResultsHistorySchema: ITrainingResultsHistoryDB) {
    return trainingResultsHistorySchema
  }

  static schema = {
    name: 'TrainingResultsHistory',
    properties: {
      _id: 'int',
      pushUps: 'int',
      pullUps: 'int',
      sitUps: 'int',
      plank: 'int',
    },
    primaryKey: '_id',
  }
}

export interface ITrainingResultsHistoryDB {
  _id?: number
  pushUps: number
  pullUps: number
  sitUps: number
  plank: number
}
