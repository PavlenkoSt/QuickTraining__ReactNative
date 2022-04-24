import { Realm } from '@realm/react'

export enum GenderEnum {
  Male = 'Male',
  Female = 'Female',
}

export enum GoalEnum {
  'Relief' = 'Working out the muscle mass and relief',
  'LoseWeight' = 'Lose weight',
  'Health' = 'Improve health',
}

export enum DurationEnum {
  '20min' = '20 minutes',
  '30min' = '30 minutes',
  '40min' = '40 minutes',
  '50min' = '50 minutes',
  '60min' = '60 minutes',
}

export default class UserSchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId
  name!: string
  age!: number
  gender!: GenderEnum
  goal!: GoalEnum
  duration!: DurationEnum
  pushUpMax!: number
  sitUpMax!: number
  plankMax!: number

  // the Task.generate() method creates Task objects with fields with default values
  static generate(user: IUser) {
    return user
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'User',
    properties: {
      _id: 'int',
      name: 'string',
      age: 'int',
      gender: 'string',
      goal: 'string',
      duration: 'string',
      pushUpMax: 'int',
      sitUpMax: 'int',
      plankMax: 'int',
    },
    primaryKey: '_id',
  }
}

export interface IUser {
  _id: number
  name: string
  age: number
  gender: GenderEnum
  goal: GoalEnum
  duration: DurationEnum
  pushUpMax: number
  sitUpMax: number
  plankMax: number
}
