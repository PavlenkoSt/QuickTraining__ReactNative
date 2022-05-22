import { TouchableOpacity, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useCallback, useState, memo, useEffect } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'
import RepeatCounterEditModal from './RepeatCounterEditModal'

type RepeatCounterPropsType = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
  needCount?: number
}

const RepeatCounter: FC<RepeatCounterPropsType> = ({ count, setCount, needCount }) => {
  const [editModalVisible, setEditModalVisible] = useState(false)

  useEffect(() => {
    if (needCount) {
      setCount(needCount)
    }
  }, [needCount])

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    if (count === 0) return

    setCount((prev) => prev - 1)
  }, [count])

  const openEditModal = useCallback(() => setEditModalVisible(true), [])

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={decrement}>
            <CustomText style={styles.btnText}>-</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainer}>
          <TouchableOpacity style={styles.view} onPress={openEditModal}>
            <CustomText style={styles.viewText}>{count}</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={increment}>
            <CustomText style={styles.btnText}>+</CustomText>
          </TouchableOpacity>
        </View>
      </View>
      {editModalVisible && (
        <RepeatCounterEditModal
          visible={editModalVisible}
          setVisible={setEditModalVisible}
          initialValue={count}
          setValue={setCount}
        />
      )}
    </View>
  )
}

export default memo(RepeatCounter)

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    flexDirection: 'row',
  },
  btnContainer: {
    borderColor: '$blue',
    borderWidth: 1,
  },
  btn: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$secondaryTheme',
  },
  btnText: {
    fontSize: 30,
    fontFamily: '$fontMedium',
  },
  viewContainer: {
    borderTopColor: '$blue',
    borderTopWidth: 1,
    borderBottomColor: '$blue',
    borderBottomWidth: 1,
  },
  view: {
    width: 100,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blue',
  },
  viewText: {
    fontSize: 30,
  },
})
