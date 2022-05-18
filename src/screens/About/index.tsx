import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomButton from 'src/components/CustomButton'
import CustomText from 'src/components/CustomText'
import MainLayout from 'src/layouts/MainLayout'
import AboutHeader from './AboutHeader'
import AboutAccordeon from './AboutAccordeon'

const About = () => {
  const { navigate } = useNavigation()

  return (
    <MainLayout Header={AboutHeader}>
      <CustomText style={styles.title}>Reveal the blocks below and get to know the app:</CustomText>
      <AboutAccordeon />
      <View style={styles.btnContainer}>
        <CustomButton
          onPress={() => navigate('FirstSetUserInfoForm' as never)}
          styles={styles.btn}
          textStyles={styles.btnText}
        >
          Get started
        </CustomButton>
      </View>
    </MainLayout>
  )
}

export default About

const styles = EStyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 15,
    fontFamily: '$fontMedium',
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
