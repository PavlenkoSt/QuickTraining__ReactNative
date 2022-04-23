import React from 'react'

import GreetingAccordeonItem from './GreetingAccordeonItem'

const GreetingAccordeon = () => {
  return (
    <>
      <GreetingAccordeonItem
        title="Main application concept"
        options={[
          {
            text: 'The main concept of application is time mamagment in your workouts.',
          },
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
      <GreetingAccordeonItem
        title="Configure training program"
        options={[
          {
            text: 'You will need to fill out a questionnaire, where you will need to indicate your name, age, gender, height, weight, desired duration of training in minutes and select desired goal. You can change all this information at any time.',
          },
          {
            text: 'And you will also need to pass a simple test of your physical fitness.',
          },
          {
            // image from Greeting Form
            images: [{ uri: 'https://via.placeholder.com/150' }],
          },
          {
            text: 'Based on these data, an individual training program will be created for you. You will be able to view a detailed training plan for the current week.',
          },
          {
            // images from screet training plan
            images: [
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
            ],
          },
        ]}
      />
      <GreetingAccordeonItem
        title="Workout flow"
        options={[
          {
            text: 'Each workout is built specifically for your level, for your abilities and the desired time. You can finish faster or slower after the timer ends. This will not affect the outcome of the workout or your overall progress in any way.',
          },
          {
            text: 'We begins with a short warm-up, up to 3 minutes.',
          },
          {
            // from warm-up
            images: [
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
            ],
          },
          {
            text: 'Next are the actual exercises. After completing the approach, you need to click "Done", the rest timer will start. After this timer ends, you will need to move on to the next set or exercise.',
          },
          {
            // images from training process
            images: [
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
            ],
          },
          {
            text: 'After finishing the last exercise, you will receive a small statistics, where you can see the number of exercises performed and the time spent. As well as a strong quote before returning to everyday life.',
          },
          {
            // images from statistics after training
            images: [{ uri: 'https://via.placeholder.com/150' }],
          },
          {
            text: 'At the end of each week, you will be asked to take a fitness level test to advance to the next level. Thus, the training system never becomes outdated and is always updated depending on your progress.',
          },
          {
            // images from physical training test
            images: [
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
            ],
          },
        ]}
      />
      <GreetingAccordeonItem
        title="Control your progress"
        options={[
          {
            text: 'You can see your progress on charts based on your weekly fitness test.',
          },
          {
            // images from progress charts
            images: [
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
            ],
          },
          {
            text: 'You also have the opportunity to take a photo of your body after each weekly fitness test. Next, based on these photos, collages of your progress will be created.',
          },
          {
            // images from take a picture of your body
            images: [
              { uri: 'https://via.placeholder.com/150' },
              { uri: 'https://via.placeholder.com/150' },
            ],
          },
          {
            text: 'This application works portable, without using the Internet, so no one from the outside can access your photos. In any case, you can refuse this opportunity.',
          },
        ]}
      />
    </>
  )
}

export default GreetingAccordeon
