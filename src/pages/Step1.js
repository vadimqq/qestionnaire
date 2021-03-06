import React from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { MainCard } from '../components/MainCard'
import { Form } from '../components/Form'
import { InputText } from '../components/inputs/InputText'
import { SubmitButton } from '../components/Buttton'

import { setInfo } from '../store/infoReducer'

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
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    dispatch(setInfo(data))
    console.log(data)
    history.push('/step2')
  }

  return (
    <MainCard>
      <Typography component="h2" variant="h5">Общая информация</Typography>
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
        <FormControl margin="normal">
          <InputLabel htmlFor="age-native-simple">Город</InputLabel>
          <Select
            native
            id="city"
            name="city"
            inputRef= { register }
            inputProps={{
              name: 'city',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="Ульяновск">Ульяновск</option>
            <option value="Москва">Москва</option>
            <option value="Самра">Самара</option>
          </Select>
        </FormControl>
        <SubmitButton>Следующий шаг</SubmitButton>
      </Form>
    </MainCard>
  )
}