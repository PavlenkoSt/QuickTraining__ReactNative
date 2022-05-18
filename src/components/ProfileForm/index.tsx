import { View } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'

import CustomButton from '../CustomButton'
import FormInput from './FormInput'
import validation from './validation'
import FormSelect from './FormSelect'
import { DurationEnum, GenderEnum, GoalEnum } from 'src/RealmDB/schemas/User'

interface IProfileFormData {
  name: string
  age: string
}

const ProfileForm = () => {
  const { navigate } = useNavigation()

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

    const userInfo = {
      name,
      age: +age,
      goal,
      duration,
      gender,
    }

    navigate('FirstSetInventarForm' as never, { userInfo } as never)
  }

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
      <CustomButton onPress={handleSubmit(onSubmit)}>Save and go</CustomButton>
    </View>
  )
}

export default ProfileForm
