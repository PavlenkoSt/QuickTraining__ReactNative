import React from 'react'

import GreetingAccordeonItem from './GreetingAccordeonItem'

const GreetingAccordeon = () => {
  return (
    <>
      <GreetingAccordeonItem
        title="The main concept of application is time mamagment in your workouts."
        options={[
          {
            text: 'You get a wide variety of exercises with illustrations, well structured into a training system just for you. You can choose duration of the daily training, control investment time and track you progress.',
          },
          {
            text: "This app will help you find time to exercise even when you don't have time.",
          },
          {
            text: 'Big results come from small but constant efforts.',
          },
          {
            text: 'Just do it! Again and again!',
          },
        ]}
      />
    </>
  )
}

export default GreetingAccordeon
