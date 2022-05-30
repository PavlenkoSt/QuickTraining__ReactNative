import { StyleSheet, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'

import ModalWrapper from 'src/components/ModalWrapper'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import CustomText from 'src/components/CustomText'
import CustomButton from 'src/components/CustomButton'
import useRealmInventory from 'src/hooks/Realm/useRealmInventory'
import useRealmWeekPlan from 'src/hooks/Realm/useRealmWeekPlan'
import useRealmTrainingResultsHistory from 'src/hooks/Realm/useRealmTrainingResultsHistory'

type ClearUserModalPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}

const ClearUserModal: FC<ClearUserModalPropsType> = ({ visible, setVisible }) => {
  const { clearUser } = useRealmUser()
  const { clearInventory } = useRealmInventory()
  const { clearWeekPlan } = useRealmWeekPlan()
  const { clearTrainingResultsHistory } = useRealmTrainingResultsHistory()

  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <View>
        <CustomText style={styles.title}>
          Are you really want to clear your profile? You will lose all your progress!
        </CustomText>
        <View style={styles.btns}>
          <CustomButton
            danger
            onPress={() => {
              clearUser()
              clearInventory()
              clearWeekPlan()
              clearTrainingResultsHistory()
              setVisible(false)
            }}
          >
            Yes
          </CustomButton>
          <CustomButton onPress={() => setVisible(false)}>No</CustomButton>
        </View>
      </View>
    </ModalWrapper>
  )
}

export default ClearUserModal

const styles = StyleSheet.create({
  title: {
    marginBottom: 25,
    fontSize: 20,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
