import { useNavigation } from '@react-navigation/native'
import { Dispatch, SetStateAction, useState } from 'react'
import { ImageSourcePropType } from 'react-native'

import { IInventoryDB } from 'src/RealmDB/schemas/Inventory'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import ToastService from 'src/services/ToastService'
import useInventory from './Realm/useRealmInventory'

type InventoryListItem = {
  haveItem: boolean
  setHaveItem: Dispatch<SetStateAction<boolean>>
  label: string
  source: ImageSourcePropType
}

type useInventoryListPropsType = {
  mode: 'set' | 'edit'
  userInfo?: {
    name: string
    age: number
    duration: DurationEnum
    gender: GenderEnum
  }
  setRebuildPlanModal: Dispatch<SetStateAction<boolean>>
  setLocalInventoryEdited: Dispatch<SetStateAction<IInventoryDB | null>>
}

const useInventoryList = ({
  mode,
  userInfo,
  setRebuildPlanModal,
  setLocalInventoryEdited,
}: useInventoryListPropsType) => {
  const { setInventory, updateInventory, inventory } = useInventory()

  const [haveBar, setHaveBar] = useState(inventory ? Boolean(inventory.haveBar) : false)
  const [haveBars, setHaveBars] = useState(inventory ? Boolean(inventory.haveBars) : false)
  const [haveWallBar, setHaveWallBar] = useState(inventory ? Boolean(inventory.haveWallBar) : false)
  const [haveStands, setHaveStands] = useState(inventory ? Boolean(inventory.haveStands) : false)
  const [havePowerTape, setHavePowerTape] = useState(
    inventory ? Boolean(inventory.havePowerTape) : false
  )
  const [haveWideTape, setHaveWideTape] = useState(
    inventory ? Boolean(inventory.haveWideTape) : false
  )
  const [haveSkippingRope, setHaveSkippingRope] = useState(
    inventory ? Boolean(inventory.haveSkippingRope) : false
  )

  const itemsList: InventoryListItem[] = [
    {
      haveItem: haveBar,
      setHaveItem: setHaveBar,
      label: 'Horizontal bar',
      source: require('src/assets/imgs/inventary/bar.jpg'),
    },
    {
      haveItem: haveWallBar,
      setHaveItem: setHaveWallBar,
      label: 'Wall horizontal bar',
      source: require('src/assets/imgs/inventary/wallbar.jpg'),
    },
    {
      haveItem: haveBars,
      setHaveItem: setHaveBars,
      label: 'Parallel bars',
      source: require('src/assets/imgs/inventary/bars.jpg'),
    },
    {
      haveItem: haveStands,
      setHaveItem: setHaveStands,
      label: 'Push-up stands',
      source: require('src/assets/imgs/inventary/stands.jpg'),
    },
    {
      haveItem: havePowerTape,
      setHaveItem: setHavePowerTape,
      label: 'Power tape',
      source: require('src/assets/imgs/inventary/power-tape.jpg'),
    },
    {
      haveItem: haveWideTape,
      setHaveItem: setHaveWideTape,
      label: 'Wide tape',
      source: require('src/assets/imgs/inventary/wide-tape.jpg'),
    },
    {
      haveItem: haveSkippingRope,
      setHaveItem: setHaveSkippingRope,
      label: 'Skipping rope',
      source: require('src/assets/imgs/inventary/skipping-rope.jpg'),
    },
  ]

  const [isEdited, setIsEdited] = useState(false)

  const { navigate, goBack } = useNavigation()

  const onPress = () => {
    const localInventary: IInventoryDB = {
      _id: 0,
      haveBar: +haveBar,
      haveWallBar: +haveWallBar,
      haveBars: +haveBars,
      haveStands: +haveStands,
      havePowerTape: +havePowerTape,
      haveWideTape: +haveWideTape,
      haveSkippingRope: +haveSkippingRope,
    }

    if (!inventory) {
      setInventory(localInventary)
    } else {
      if (isEdited) {
        setRebuildPlanModal(true)
        setLocalInventoryEdited(localInventary)
        return
      }

      setLocalInventoryEdited(null)
      updateInventory(localInventary)
    }

    if (mode === 'set') {
      navigate('FirtsTestInfo' as never, { userInfo } as never)
    } else {
      ToastService.success('Inventory have been changed successfully')
      goBack()
    }
  }

  return { itemsList, setIsEdited, onPress }
}

export default useInventoryList
