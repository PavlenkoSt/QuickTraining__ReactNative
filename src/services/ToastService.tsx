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
      text1Style={{
        fontSize: 16,
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 16,
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
}

export default ToastService
