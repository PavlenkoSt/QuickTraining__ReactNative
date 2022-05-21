import { View } from 'react-native'
import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from 'src/components/CustomText'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import time from 'src/utilts/time'

const PersonalRecords = () => {
  const { user } = useRealmUser()

  if (!user) return <></>

  return (
    <>
      <CustomText style={styles.title}>Your personal records</CustomText>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <CustomText>Push ups</CustomText>
          </View>
          <View style={[styles.tableCell, styles.smallCell]}>
            <CustomText>{user.pushUpMax}</CustomText>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <CustomText>Sit ups</CustomText>
          </View>
          <View style={[styles.tableCell, styles.smallCell]}>
            <CustomText>{user.sitUpMax}</CustomText>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <CustomText>Plank hold</CustomText>
          </View>
          <View style={[styles.tableCell, styles.smallCell]}>
            <CustomText>{time.timeFormat(user.plankMax)}</CustomText>
          </View>
        </View>
      </View>
    </>
  )
}

export default PersonalRecords

const styles = EStyleSheet.create({
  title: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '$blue',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '$blue',
  },
  smallCell: {
    maxWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2C34',
  },
})
