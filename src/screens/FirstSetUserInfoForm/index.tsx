import React from 'react'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import ProfileForm from 'src/components/ProfileForm'

const FirstSetUserInfoForm = () => {
  return (
    <MainLayout
      Header={() => <EmptyHeader title="Questionnaire" />}
      keyboardShouldPersistTaps="always"
    >
      <ProfileForm />
    </MainLayout>
  )
}

export default FirstSetUserInfoForm
