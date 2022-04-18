import { Realm } from '@realm/react'

export default class UserSchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId
  name!: string
  gender!: string
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
      gender: 'string',
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
  gender: 'male' | 'female'
  pushUpMax: number
  sitUpMax: number
  plankMax: number
}
