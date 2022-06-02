import { Realm } from '@realm/react'

import { RealmDBKeys } from '../index'

export default class InventorySchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId
  haveBar!: number
  haveWallBar!: number
  haveBars!: number
  haveStands!: number
  havePowerTape!: number
  haveWideTape!: number
  haveSkippingRope!: number

  static generate(inventory: IInventoryDB) {
    return inventory
  }

  static schema = {
    name: RealmDBKeys.Inventory,
    properties: {
      _id: 'int',
      haveBar: 'int',
      haveWallBar: 'int',
      haveBars: 'int',
      haveStands: 'int',
      havePowerTape: 'int',
      haveWideTape: 'int',
      haveSkippingRope: 'int',
    },
    primaryKey: '_id',
  }
}

export interface IInventoryDB {
  _id: number
  haveBar: number
  haveWallBar: number
  haveBars: number
  haveStands: number
  havePowerTape: number
  haveWideTape: number
  haveSkippingRope: number
}
