import React, { useState } from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import InventoryItem from './InventoryItem'

const InventarForm = () => {
  const [haveBar, setHaveBar] = useState(false)
  const [haveBars, setHaveBars] = useState(false)

  return (
    <View style={styles.items}>
      <InventoryItem
        haveItem={haveBar}
        setHaveItem={setHaveBar}
        label="Horizontal bar"
        source={require('src/assets/imgs/inventary/bar.jpg')}
      />
      <InventoryItem
        haveItem={haveBars}
        setHaveItem={setHaveBars}
        label="Bars"
        source={require('src/assets/imgs/inventary/bars.jpg')}
      />
    </View>
  )
}

export default InventarForm

const styles = EStyleSheet.create({
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})
