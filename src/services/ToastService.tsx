import React from 'react'
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message'

const ToastService = {
  success: (title?: string, text?: string) =>
    Toast.show({
      type: 'success',
      text1: title,
      text2: text,
    }),
  error: (title?: string, text?: string) =>
    Toast.show({
      type: 'error',
      text1: title,
      text2: text,
    }),
}

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ backgroundColor: '#283624' }}
      text1Style={{
        fontSize: 16,
        color: '#fff',
      }}
      text1NumberOfLines={5}
      text2Style={{
        fontSize: 14,
        color: '#ccc',
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ backgroundColor: '#362424' }}
      text1Style={{
        fontSize: 16,
        color: '#fff',
      }}
      text1NumberOfLines={5}
      text2Style={{
        fontSize: 14,
        color: '#ccc',
      }}
    />
  ),
}

export default ToastService
