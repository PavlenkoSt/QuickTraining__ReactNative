import * as yup from 'yup'

const validation = yup
  .object({
    name: yup.string().required('This is required').min(3, 'Must be at least 3 characters'),
    age: yup
      .string()
      .required('This is required')
      .matches(/^[1-9]\d{0,1}$/, 'Must be numeric value from 1 to 99'),
  })
  .required()

export default validation
