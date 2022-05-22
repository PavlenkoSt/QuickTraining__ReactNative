import { View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'

import ModalWrapper from 'src/components/ModalWrapper'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import CustomText from 'src/components/CustomText'
import CustomButton from 'src/components/CustomButton'
import { useNavigation, StackActions } from '@react-navigation/native'

type EndTrainigModalPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}

const EndTrainigModal: FC<EndTrainigModalPropsType> = ({ visible, setVisible }) => {
  const { dispatch } = useNavigation()

  const finishTraining = useCallback(() => {
    setVisible(false)
    dispatch(StackActions.replace('Home'))
  }, [])

  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <View>
        <CustomText style={styles.title}>Are you really want to finish training?</CustomText>
        <CustomText style={styles.subtitle}>Results will be lost</CustomText>
        <View style={styles.btns}>
          <CustomButton onPress={() => setVisible(false)}>No</CustomButton>
          <CustomButton onPress={finishTraining} danger>
            Yes
          </CustomButton>
        </View>
      </View>
    </ModalWrapper>
  )
}

export default EndTrainigModal

const styles = EStyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#ccc',
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
