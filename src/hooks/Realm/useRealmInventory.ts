import { useCallback, useMemo } from 'react'

import RealmDB from 'src/RealmDB'
import InventorySchema, { IInventoryDB } from 'src/RealmDB/schemas/Inventory'

const useInventory = () => {
  const { useRealm, useQuery } = RealmDB

  const realm = useRealm()
  const inventoryRealm = useQuery('Inventory')

  const inventory: IInventoryDB | null = useMemo(() => {
    if (inventoryRealm.length) {
      return inventoryRealm[0].toJSON()
    }

    return null
  }, [inventoryRealm])

  const setInventory = useCallback((inventory: IInventoryDB) => {
    if (!inventory) {
      return
    }
    realm.write(() => {
      realm.create('Inventory', InventorySchema.generate(inventory))
    })
  }, [])

  const updateInventory = useCallback(
    (newInventory: IInventoryDB | null) => {
      if (inventory) {
        realm.write(() => {
          if (newInventory) {
            //@ts-ignore
            inventoryRealm[0].haveBar = newInventory.haveBar
            //@ts-ignore
            inventoryRealm[0].haveBars = newInventory.haveBars
            //@ts-ignore
            inventoryRealm[0].havePowerTape = newInventory.havePowerTape
            //@ts-ignore
            inventoryRealm[0].haveSkippingRope = newInventory.haveSkippingRope
            //@ts-ignore
            inventoryRealm[0].haveStands = newInventory.haveStands
            //@ts-ignore
            inventoryRealm[0].haveWallBar = newInventory.haveWallBar
            //@ts-ignore
            inventoryRealm[0].haveWideTape = newInventory.haveWideTape
          }
        })
      }
    },
    [inventory]
  )

  const clearInventory = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('Inventory'))
    })
  }, [])

  return { inventory, setInventory, updateInventory, clearInventory }
}

export default useInventory
