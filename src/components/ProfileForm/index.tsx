import { View } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import CustomButton from '../CustomButton'
import FormInput from './FormInput'
import validation from './validation'
import FormSelect from './FormSelect'
import ToastService from 'src/services/ToastService'

enum GenderEnum {
  Male = 'Male',
  Female = 'Female',
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

  const onSubmit = (data: IProfileFormData) => {
    console.log(data)

    const { name, age } = data
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
          setValue={setGender as Dispatch<SetStateAction<string>>}
          options={['Male', 'Female']}
          defaultValue="Male"
        />
      </View>
      <CustomButton onPress={handleSubmit(onSubmit, onError)}>Save and go</CustomButton>
    </View>
  )
}

export default ProfileForm
