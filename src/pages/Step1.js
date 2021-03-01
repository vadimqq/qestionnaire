import React from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MainCard } from '../components/MainCard'
import { Form } from '../components/Form'
import { InputText } from '../components/inputs/InputText'
import { SubmitButton } from '../components/Buttton'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Имя должно содержать только буквы')
    .required('Это поле необходимо заполнить'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Фамилия должна содержать только буквы')
    .required('Это поле необходимо заполнить')
})

export const Step1 = () => {
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = () => {
    history.push('/step2')
  }

  return (
    <MainCard>
      <Typography component="h2" variant="h5">Шаг 1</Typography>
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <InputText
          ref={ register }
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={ !!errors.firstName }
          helperText={ errors?.firstName?.message }
        />
        <InputText
          ref={ register }
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={ !!errors.lastName }
          helperText={ errors?.lastName?.message }
        />
        <SubmitButton>Следующий шаг</SubmitButton>
      </Form>
    </MainCard>
  )
}