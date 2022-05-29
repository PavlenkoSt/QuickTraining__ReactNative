import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import useInventoryList from 'src/hooks/useInventoryList'
import { IInventoryDB } from 'src/RealmDB/schemas/Inventory'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import CustomButton from '../CustomButton'
import CustomText from '../CustomText'
import InventoryItem from './InventoryItem'
import RebuildTrainingPlanModal from './RebuildTrainingPlanModal'

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
  const [rebuildPlanModal, setRebuildPlanModal] = useState(false)
  const [localInventoryEdited, setLocalInventoryEdited] = useState<IInventoryDB | null>(null)

  const { itemsList, setIsEdited, onPress } = useInventoryList({
    mode,
    userInfo,
    setRebuildPlanModal,
    setLocalInventoryEdited,
  })

  return (
    <>
      <View style={styles.items}>
        {itemsList.map((item) => (
          <InventoryItem
            key={item.label}
            haveItem={item.haveItem}
            setHaveItem={item.setHaveItem}
            label={item.label}
            source={item.source}
            setIsEdited={setIsEdited}
          />
        ))}
      </View>
      <CustomText style={styles.mess}>
        Don't worry if you don't have any of the above. You will still have access to a lot of
        exercises that do not require any equipment.
      </CustomText>
      <CustomText style={styles.mess}>You can change inventory at any time</CustomText>
      <CustomButton onPress={onPress}>Save</CustomButton>
      <RebuildTrainingPlanModal
        visible={rebuildPlanModal}
        setVisible={setRebuildPlanModal}
        localInventoryEdited={localInventoryEdited}
      />
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
