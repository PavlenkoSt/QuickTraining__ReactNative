import React, { Dispatch, FC, SetStateAction } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import ModalWrapper from 'src/components/ModalWrapper'
import FormInput from '../ProfileForm/FormInput'
import validation from './validation'
import CustomButton from '../CustomButton'

type RepeatCounterEditModalPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  initialValue: number
  setValue: Dispatch<SetStateAction<number>>
}

const RepeatCounterEditModal: FC<RepeatCounterEditModalPropsType> = ({
  visible,
  setVisible,
  initialValue,
  setValue,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      value: initialValue.toString(),
    },
    resolver: yupResolver(validation),
  })

  const edit: SubmitHandler<FieldValues> = (data) => {
    setVisible(false)
    setValue(+data.value)
  }

  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <FormInput
        control={control}
        errors={errors}
        label="Value"
        name="value"
        keyboardType="numeric"
      />
      <CustomButton onPress={handleSubmit(edit)}>Ok</CustomButton>
    </ModalWrapper>
  )
}

export default RepeatCounterEditModal
