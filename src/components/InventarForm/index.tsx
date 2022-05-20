import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import useInventory from 'src/hooks/Realm/useRealmInventory'
import { IInventoryDB } from 'src/RealmDB/schemas/Inventory'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import ToastService from 'src/services/ToastService'
import CustomButton from '../CustomButton'
import CustomText from '../CustomText'
import InventoryItem from './InventoryItem'

type InventarFormPropsType = {
  mode: 'set' | 'edit'
  userInfo?: {
    name: string
    age: number
    duration: DurationEnum
    gender: GenderEnum
  }
}

const InventarForm: FC<InventarFormPropsType> = ({ mode, userInfo }) => {
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

  const { navigate, goBack } = useNavigation()

  const onPress = () => {
    const inventary: IInventoryDB = {
      _id: 0,
      haveBar: +haveBar,
      haveWallBar: +haveWallBar,
      haveBars: +haveBars,
      haveStands: +haveStands,
      havePowerTape: +havePowerTape,
      haveWideTape: +haveWideTape,
      haveSkippingRope: +haveSkippingRope,
    }

    if (!inventary) {
      setInventory(inventary)
    } else {
      updateInventory(inventary)
    }

    if (mode === 'set') {
      navigate('FirtsTestInfo' as never, { userInfo } as never)
    } else {
      ToastService.success('Inventory have been changed success')
      goBack()
    }
  }

  return (
    <>
      <View style={styles.items}>
        <InventoryItem
          haveItem={haveBar}
          setHaveItem={setHaveBar}
          label="Horizontal bar"
          source={require('src/assets/imgs/inventary/bar.jpg')}
        />
        <InventoryItem
          haveItem={haveWallBar}
          setHaveItem={setHaveWallBar}
          label="Wall horizontal bar"
          source={require('src/assets/imgs/inventary/wallbar.jpg')}
        />
        <InventoryItem
          haveItem={haveBars}
          setHaveItem={setHaveBars}
          label="Bars"
          source={require('src/assets/imgs/inventary/bars.jpg')}
        />
        <InventoryItem
          haveItem={haveStands}
          setHaveItem={setHaveStands}
          label="Push-up stands"
          source={require('src/assets/imgs/inventary/stands.jpg')}
        />
        <InventoryItem
          haveItem={havePowerTape}
          setHaveItem={setHavePowerTape}
          label="Power tape"
          source={require('src/assets/imgs/inventary/power-tape.jpg')}
        />
        <InventoryItem
          haveItem={haveWideTape}
          setHaveItem={setHaveWideTape}
          label="Wide tape"
          source={require('src/assets/imgs/inventary/wide-tape.jpg')}
        />
        <InventoryItem
          haveItem={haveSkippingRope}
          setHaveItem={setHaveSkippingRope}
          label="Skipping rope"
          source={require('src/assets/imgs/inventary/skipping-rope.jpg')}
        />
      </View>
      <CustomText style={styles.mess}>
        Don't worry if you don't have any of the above. You will still have access to a lot of
        exercises that do not require any equipment.
      </CustomText>
      <CustomText style={styles.mess}>You can change inventory at any time</CustomText>
      <CustomButton onPress={onPress}>Save</CustomButton>
    </>
  )
}

export default InventarForm

const styles = EStyleSheet.create({
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mess: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
})
