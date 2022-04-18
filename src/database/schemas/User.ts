const UserSchema = {
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

export default UserSchema

export interface IUser {
  _id: number
  name: string
  gender: 'male' | 'female'
  pushUpMax: number
  sitUpMax: number
  plankMax: number
}
