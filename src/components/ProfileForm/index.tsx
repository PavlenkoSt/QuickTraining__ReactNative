import { View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'

import CustomButton from '../CustomButton'
import FormInput from './FormInput'
import validation from './validation'
import FormSelect from './FormSelect'
import { DurationEnum, GenderEnum } from 'src/RealmDB/schemas/User'
import useRealmUser from 'src/hooks/Realm/useRealmUser'
import ToastService from 'src/services/ToastService'

interface IProfileFormData {
  name: string
  age: string
}

type ProfileFormPropsType = {
  isProfile?: boolean
}

const ProfileForm: FC<ProfileFormPropsType> = ({ isProfile }) => {
  const { navigate, goBack } = useNavigation()

  const { user, updateUser } = useRealmUser()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: isProfile && user ? user.name : '',
      age: isProfile && user ? user.age.toString() : '',
    },
    resolver: yupResolver(validation),
  })

  const [gender, setGender] = useState<GenderEnum>(GenderEnum.Male)
  const [duration, setDuration] = useState<DurationEnum>(
    isProfile && user
      ? //@ts-ignore
        DurationEnum[`${user.duration.substring(0, 2)}min`]
      : DurationEnum['20min']
  )

  const onSubmit = (data: IProfileFormData) => {
    const { name, age } = data

    const userInfo = {
      name,
      age: +age,
      duration,
      gender,
    }

    if (isProfile && user) {
      updateUser(userInfo)
      ToastService.success('Profile have been edited success')
      goBack()
    } else {
      navigate('FirstSetInventarForm' as never, { userInfo } as never)
    }
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
          defaultValue={isProfile && user ? user.duration.toString() : DurationEnum['20min']}
        />
      </View>
      <CustomButton onPress={handleSubmit(onSubmit)}>Save and go</CustomButton>
    </View>
  )
}

export default ProfileForm
