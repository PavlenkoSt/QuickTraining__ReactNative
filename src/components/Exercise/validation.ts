import * as yup from 'yup'

const validation = yup
  .object({
    value: yup
      .string()
      .required('This is required')
      .matches(/^[0-9]\d{0,2}$/, 'Incorrect value'),
  })
  .required()

export default validation
