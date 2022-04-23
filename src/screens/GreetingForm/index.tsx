import React from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/EmptyHeader'
import ProfileForm from 'src/components/ProfileForm'

const GreetingForm = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Questionnaire" />} keyboardShouldPersistTaps>
      <ProfileForm />
    </MainLayout>
  )
}

export default GreetingForm

const styles = EStyleSheet.create({})
