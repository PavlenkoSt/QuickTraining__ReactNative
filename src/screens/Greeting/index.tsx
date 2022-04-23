import React from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomButton from 'src/components/CustomButton'
import CustomText from 'src/components/CustomText'
import MainLayout from 'src/layouts/MainLayout'
import GreetingHeader from './GreetingHeader'
import GreetingAccordeon from './GreettingAccordeon'

const Greeting = () => {
  return (
    <MainLayout Header={GreetingHeader}>
      <CustomText style={styles.title}>Reveal the blocks below and get to know the app:</CustomText>
      <GreetingAccordeon />
      <View style={styles.btnContainer}>
        <CustomButton styles={styles.btn} textStyles={styles.btnText}>
          Get started
        </CustomButton>
      </View>
    </MainLayout>
  )
}

export default Greeting

const styles = EStyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 15,
    fontFamily: '$fontMedium'
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
})
