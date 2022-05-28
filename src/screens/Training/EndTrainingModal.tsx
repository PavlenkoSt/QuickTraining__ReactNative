import { View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import { useNavigation } from '@react-navigation/native'

import ModalWrapper from 'src/components/ModalWrapper'
import CustomText from 'src/components/CustomText'
import CustomButton from 'src/components/CustomButton'
import { NavigationActionType } from 'src/types/NavigationActionType'

type EndTrainingModalPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  navigateAction: NavigationActionType | null
}

const EndTrainingModal: FC<EndTrainingModalPropsType> = ({
  visible,
  setVisible,
  navigateAction,
}) => {
  const { dispatch } = useNavigation()

  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <View>
        <CustomText style={styles.title}>
          Are you sure you want to leave training? Progress will be lost!
        </CustomText>
        <View style={styles.btns}>
          <CustomButton
            onPress={() => {
              if (navigateAction) {
                dispatch(navigateAction)
              }
            }}
            danger
          >
            Yes
          </CustomButton>
          <CustomButton onPress={() => setVisible(false)}>No</CustomButton>
        </View>
      </View>
    </ModalWrapper>
  )
}

export default EndTrainingModal

const styles = EStyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
