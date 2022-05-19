import React from 'react'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import ProfileForm from 'src/components/ProfileForm'

const Profile = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Profile" />}>
      <ProfileForm isProfile />
    </MainLayout>
  )
}

export default Profile
