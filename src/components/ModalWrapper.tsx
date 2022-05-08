import { Dimensions, Modal, ScrollView, TouchableOpacity, View } from 'react-native'
import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

type ModalWrapperPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  withScroll?: boolean
  children: ReactNode
}

const ModalWrapper: FC<ModalWrapperPropsType> = ({ visible, children, setVisible, withScroll }) => {
  return (
    <Modal animationType="fade" visible={visible} transparent>
      <TouchableOpacity
        style={styles.modalWrapper}
        activeOpacity={1}
        onPress={() => setVisible(false)}
      >
        {withScroll ? (
          <ScrollView>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.modalContainer}
              onPress={(e) => e.stopPropagation()}
            >
              <View style={{ padding: 25 }}>{children}</View>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalContainer}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={{ padding: 25 }}>{children}</View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </Modal>
  )
}

export default ModalWrapper

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  modalWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContainer: {
    minWidth: width - 50,
    margin: 15,
    backgroundColor: '$secondaryTheme',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
})
