import { Dimensions, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useRef } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'
import ModalDropdown from 'react-native-modal-dropdown'

import CustomText from '../CustomText'

type FormSelectPropsType = {
  setValue: Dispatch<SetStateAction<string>>
  options: string[]
  defaultValue: string
}

const FormSelect: FC<FormSelectPropsType> = ({ setValue, options, defaultValue }) => {
  const selectRef = useRef<ModalDropdown>(null)

  return (
    <TouchableOpacity
      onPress={() => selectRef.current?.show()}
      activeOpacity={0.8}
      style={styles.container}
    >
      <CustomText style={styles.label}>Gender</CustomText>
      <ModalDropdown
        style={styles.dropdownContainer}
        dropdownStyle={styles.dropdown}
        textStyle={styles.text}
        defaultIndex={0}
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
    position: 'relative',
    transform: [{ translateX: -5 }, { translateY: -15 }],
    height: 90,
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
