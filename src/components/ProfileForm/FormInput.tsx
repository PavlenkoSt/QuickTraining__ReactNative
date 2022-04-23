import React, { FC, useRef } from 'react'
import { KeyboardTypeOptions, TextInput, TouchableOpacity } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import CustomText from '../CustomText'

type FormInputPropsType = {
  name: string
  label: string
  control: Control<any>
  errors: { [x: string]: any }
  keyboardType?: KeyboardTypeOptions
}

const FormInput: FC<FormInputPropsType> = ({ control, errors, label, name, keyboardType }) => {
  const inputRef = useRef<TextInput>(null)

  return (
    <>
      <TouchableOpacity
        onPress={() => inputRef.current?.focus()}
        activeOpacity={0.8}
        style={styles.container}
      >
        <CustomText style={styles.label}>{label}</CustomText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              ref={inputRef}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType={keyboardType}
              keyboardAppearance="dark"
            />
          )}
          name={name}
          rules={{ required: true }}
        />
        {errors[name] && <CustomText style={styles.error}>{errors[name].message}</CustomText>}
      </TouchableOpacity>
    </>
  )
}

export default FormInput

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryTheme',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#333D44',
    borderWidth: 1,
  },
  label: {
    marginBottom: 5,
    fontFamily: '$fontMedium',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#131d24',
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 18,
    marginBottom: 5,
    color: '#ccc',
  },
  error: {
    color: '$red',
    fontSize: 12,
    fontFamily: '$fontMedium',
  },
})
