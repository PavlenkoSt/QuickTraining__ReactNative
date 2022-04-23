import React, { useMemo } from 'react'

import GreetingAccordeonItem from './GreetingAccordeonItem'

const GreetingAccordeon = () => {
  const images = useMemo(
    () => ({
      configuring: [
        // image from Greeting Form
        require('src/assets/imgs/placeholder.png'),

        // images from screet training plan
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),
      ],
      workout: [
        // from warm-up
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),

        // images from training process
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),

        // images from statistics after training
        require('src/assets/imgs/placeholder.png'),

        // images from physical training test
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),
      ],
      controlling: [
        // images from progress charts
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),

        // images from take a picture of your body
        require('src/assets/imgs/placeholder.png'),
        require('src/assets/imgs/placeholder.png'),
      ],
    }),
    []
  )

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
            imagesIdx: [0],
          },
          {
            text: 'Based on these data, an individual training program will be created for you. You will be able to view a detailed training plan for the current week.',
          },
          {
            imagesIdx: [1, 2],
          },
        ]}
        blockImages={images.configuring}
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
            imagesIdx: [0, 1, 2],
          },
          {
            text: 'Next are the actual exercises. After completing the approach, you need to click "Done", the rest timer will start. After this timer ends, you will need to move on to the next set or exercise.',
          },
          {
            imagesIdx: [3, 4, 5],
          },
          {
            text: 'After finishing the last exercise, you will receive a small statistics, where you can see the number of exercises performed and the time spent. As well as a strong quote before returning to everyday life.',
          },
          {
            imagesIdx: [6],
          },
          {
            text: 'At the end of each week, you will be asked to take a fitness level test to advance to the next level. Thus, the training system never becomes outdated and is always updated depending on your progress.',
          },
          {
            imagesIdx: [7, 8, 9],
          },
        ]}
        blockImages={images.workout}
      />
      <GreetingAccordeonItem
        title="Control your progress"
        options={[
          {
            text: 'You can see your progress on charts based on your weekly fitness test.',
          },
          {
            imagesIdx: [0, 1],
          },
          {
            text: 'You also have the opportunity to take a photo of your body after each weekly fitness test. Next, based on these photos, collages of your progress will be created.',
          },
          {
            // images from take a picture of your body
            imagesIdx: [2, 3],
          },
          {
            text: 'This application works portable, without using the Internet, so no one from the outside can access your photos. In any case, you can refuse this opportunity.',
          },
        ]}
        blockImages={images.controlling}
      />
    </>
  )
}

export default GreetingAccordeon
