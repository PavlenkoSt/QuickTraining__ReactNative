import { Realm } from '@realm/react'

import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'

export default class TrainingHistorySchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId
  weekNumber!: number
  daysString!: string

  static generate(trainingDay: ITrainingHistoryWeekDB) {
    return trainingDay
  }

  static schema = {
    name: 'TrainingHistory',
    properties: {
      _id: 'int',
      weekNumber: 'int',
      daysString: 'string',
    },
    primaryKey: '_id',
  }
}

export interface ITrainingHistoryDayExercisesDB {
  name: string
  type: ExecutionExerciseEnum
  result: number
}

export interface ITrainingHistoryDayDB {
  exercises: ITrainingHistoryDayExercisesDB[]
  dayNumber: number
  isTest: boolean
}

export interface ITrainingHistoryWeekDB {
  _id: number
  weekNumber: number
  daysString: string
}
