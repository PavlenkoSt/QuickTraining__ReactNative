import React from 'react'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/EmptyHeader'
import ProfileForm from 'src/components/ProfileForm'

const GreetingForm = () => {
  return (
    <MainLayout
      Header={() => <EmptyHeader title="Questionnaire" />}
      keyboardShouldPersistTaps="always"
    >
      <ProfileForm />
    </MainLayout>
  )
}

export default GreetingForm
