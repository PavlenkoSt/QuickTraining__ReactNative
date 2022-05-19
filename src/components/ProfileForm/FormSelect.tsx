import { Dimensions, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useMemo, useRef } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import ModalDropdown from 'react-native-modal-dropdown'

import CustomText from '../CustomText'
import { DurationEnum } from 'src/RealmDB/schemas/User'

type FormSelectPropsType = {
  setValue: Dispatch<SetStateAction<string>>
  options: string[]
  defaultValue: string
  label: string
}

const FormSelect: FC<FormSelectPropsType> = ({ setValue, options, defaultValue, label }) => {
  const selectRef = useRef<ModalDropdown>(null)

  const defaultIndex = useMemo(() => {
    switch (defaultValue) {
      case DurationEnum['20min']:
        return 0
      case DurationEnum['30min']:
        return 1
      case DurationEnum['40min']:
        return 2
      case DurationEnum['50min']:
        return 3
      case DurationEnum['60min']:
        return 4
      default:
        return 0
    }
  }, [defaultValue])

  return (
    <TouchableOpacity
      onPress={() => selectRef.current?.show()}
      activeOpacity={0.8}
      style={styles.container}
    >
      <CustomText style={styles.label}>{label}</CustomText>
      <ModalDropdown
        style={styles.dropdownContainer}
        dropdownStyle={[styles.dropdown, { height: 45 * options.length }]}
        textStyle={styles.text}
        defaultIndex={defaultIndex}
        defaultValue={defaultValue}
        options={options}
        onSelect={(index, option) => setValue(option as string)}
        ref={selectRef}
        dropdownTextStyle={styles.dropdownText}
        dropdownTextHighlightStyle={styles.activeDropdownText}
      />
    </TouchableOpacity>
  )
}

export default FormSelect

const { width } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$secondaryTheme',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#333D44',
    borderWidth: 1,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
  },
  dropdownContainer: {
    backgroundColor: '#131d24',
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  dropdown: {
    width: width - 50,
    transform: [{ translateX: -5 }, { translateY: -15 }],
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '$secondaryTheme',
    height: 45,
  },
  activeDropdownText: {
    backgroundColor: '$blue',
    color: '#fff',
  },
})
