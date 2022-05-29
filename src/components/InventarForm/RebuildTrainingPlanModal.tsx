import { View } from 'react-native'
import React, { FC, Dispatch, SetStateAction } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation } from '@react-navigation/native'

import ModalWrapper from 'src/components/ModalWrapper'
import CustomText from 'src/components/CustomText'
import CustomButton from 'src/components/CustomButton'
import { IInventoryDB } from 'src/RealmDB/schemas/Inventory'
import useInventory from 'src/hooks/Realm/useRealmInventory'
import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import ExerciseService, { WeekPlanType } from 'src/services/ExerciseService'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import ToastService from 'src/services/ToastService'

type RebuildTrainingPlanModalPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  localInventoryEdited: IInventoryDB | null
}

const RebuildTrainingPlanModal: FC<RebuildTrainingPlanModalPropsType> = ({
  visible,
  setVisible,
  localInventoryEdited,
}) => {
  const { user } = useRealmUser()
  const { updateInventory } = useInventory()
  const { setWeekPlan, clearWeekPlan } = useRealmWeekPlan()

  const { goBack } = useNavigation()

  if (!user) return <></>

  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <View>
        <CustomText style={styles.title}>
          You have edited the inventory list. Do you want to rebuild your training plan?
        </CustomText>
        <View style={styles.btns}>
          <CustomButton
            onPress={() => {
              updateInventory(localInventoryEdited)

              const newPlan = ExerciseService.autogeneratePlan(
                user.levelPercent,
                user.gender,
                Boolean(localInventoryEdited?.haveBar) || Boolean(localInventoryEdited?.haveWallBar)
              ) as WeekPlanType

              clearWeekPlan()
              setWeekPlan(newPlan)
              setVisible(false)

              ToastService.success(
                'The inventory has been changed and the training plan has been rebuilt successfully'
              )
              goBack()
            }}
            danger
          >
            Yes
          </CustomButton>
          <CustomButton
            onPress={() => {
              updateInventory(localInventoryEdited)
              setVisible(false)
              ToastService.success('Inventory have been changed successfully')
              goBack()
            }}
          >
            No
          </CustomButton>
        </View>
      </View>
    </ModalWrapper>
  )
}

export default RebuildTrainingPlanModal

const styles = EStyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
