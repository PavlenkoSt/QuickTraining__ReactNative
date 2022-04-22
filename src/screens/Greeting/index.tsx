import React from 'react'

import MainLayout from 'src/layouts/MainLayout'
import GreetingHeader from './GreetingHeader'
import GreetingAccordeon from './GreettingAccordeon'

const Greeting = () => {
  return (
    <MainLayout Header={GreetingHeader}>
      <GreetingAccordeon />
    </MainLayout>
  )
}

export default Greeting
