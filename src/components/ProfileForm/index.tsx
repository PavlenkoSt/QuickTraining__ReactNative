import { View } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import CustomButton from '../CustomButton'
import FormInput from './FormInput'
import validation from './validation'
import FormSelect from './FormSelect'
import ToastService from 'src/services/ToastService'
import RealmDB from 'src/RealmDB'

enum GenderEnum {
  Male = 'Male',
  Female = 'Female',
}

enum DurationEnum {
  '20min' = '20 minutes',
  '30min' = '30 minutes',
  '40min' = '40 minutes',
  '50min' = '50 minutes',
  '60min' = '60 minutes',
}

enum GoalEnum {
  'Relief' = 'Working out the muscle mass and relief',
  'LoseWeight' = 'Lose weight',
  'Health' = 'Improve health',
}

interface IProfileFormData {
  name: string
  age: string
}

const ProfileForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      age: '',
    },
    resolver: yupResolver(validation),
  })

  const [gender, setGender] = useState<GenderEnum>(GenderEnum.Male)
  const [duration, setDuration] = useState<DurationEnum>(DurationEnum['20min'])
  const [goal, setGoal] = useState<GoalEnum>(GoalEnum.Relief)

  const onSubmit = (data: IProfileFormData) => {
    const { name, age } = data

    console.log({
      name,
      age,
      gender,
      duration,
      goal,
    })
  }

  const onError = () => ToastService.error('Error', 'Check fields for correctness')

  return (
    <View>
      <View>
        <FormInput control={control} errors={errors} label="Name" name="name" />
        <FormInput
          control={control}
          errors={errors}
          label="Age"
          name="age"
          keyboardType="numeric"
        />
        <FormSelect
          label="Gender"
          setValue={setGender as Dispatch<SetStateAction<string>>}
          options={[GenderEnum.Male, GenderEnum.Female]}
          defaultValue={GenderEnum.Male}
        />
        <FormSelect
          label="Training duration"
          setValue={setDuration as Dispatch<SetStateAction<string>>}
          options={[
            DurationEnum['20min'],
            DurationEnum['30min'],
            DurationEnum['40min'],
            DurationEnum['50min'],
            DurationEnum['60min'],
          ]}
          defaultValue={DurationEnum['20min']}
        />
        <FormSelect
          label="Your goal"
          setValue={setGoal as Dispatch<SetStateAction<string>>}
          options={[GoalEnum.Relief, GoalEnum.LoseWeight, GoalEnum.Health]}
          defaultValue={GoalEnum.Relief}
        />
      </View>
      <CustomButton onPress={handleSubmit(onSubmit, onError)}>Save and go</CustomButton>
    </View>
  )
}

export default ProfileForm
