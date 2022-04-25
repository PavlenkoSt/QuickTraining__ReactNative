import React, { FC, useCallback, useState } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomButton from '../CustomButton'
import CustomText from '../CustomText'
import InventoryItem from './InventoryItem'

type InventarFormPropsType = {
  mode: 'set' | 'edit'
}

const InventarForm: FC<InventarFormPropsType> = ({ mode }) => {
  const [haveBar, setHaveBar] = useState(false)
  const [haveWallBar, setHaveWallBar] = useState(false)
  const [haveBars, setHaveBars] = useState(false)
  const [haveStands, setHaveStands] = useState(false)
  const [havePowerTape, setHavePowerTape] = useState(false)
  const [haveWideTape, setHaveWideTape] = useState(false)
  const [haveSkippingRope, setHaveSkippingRope] = useState(false)

  const onPress = useCallback(() => {
    const inventary = {
      haveBar,
      haveWallBar,
      haveBars,
      haveStands,
      havePowerTape,
      haveWideTape,
      haveSkippingRope,
    }

    if (mode === 'set') {
    } else {
    }
  }, [mode])

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
      <CustomButton onPress={onPress}>Save and go</CustomButton>
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
