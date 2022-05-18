import { StyleSheet, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'

import ModalWrapper from 'src/components/ModalWrapper'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import CustomText from 'src/components/CustomText'
import CustomButton from 'src/components/CustomButton'

type ClearUserModalPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  setIsAuth: Dispatch<SetStateAction<boolean>> | null
}

const ClearUserModal: FC<ClearUserModalPropsType> = ({ visible, setVisible, setIsAuth }) => {
  const { clearUser } = useRealmUser()

  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <View>
        <CustomText style={styles.title}>
          Are you really want to clear your profile? You will lose all your progress!
        </CustomText>
        <View style={styles.btns}>
          <CustomButton onPress={() => setVisible(false)}>No</CustomButton>
          <CustomButton
            danger
            onPress={() => {
              clearUser()
              if (setIsAuth) {
                setIsAuth(false)
              }
              setVisible(false)
            }}
          >
            Yes
          </CustomButton>
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
