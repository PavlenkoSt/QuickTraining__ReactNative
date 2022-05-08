import { TouchableOpacity, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'

type RepeatCounterPropsType = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

const RepeatCounter: FC<RepeatCounterPropsType> = ({ count, setCount }) => {
  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    if (count === 0) return

    setCount((prev) => prev - 1)
  }, [count])

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={decrement}>
            <CustomText style={styles.btnText}>-</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.view}>
            <CustomText style={styles.viewText}>{count}</CustomText>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={increment}>
            <CustomText style={styles.btnText}>+</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RepeatCounter

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