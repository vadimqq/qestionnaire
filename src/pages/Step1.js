import React from 'react'
import { MainCard } from '../components/MainCard'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import { Form } from '../components/Form'
import { InputText } from '../components/inputs/InputText'
import { Button } from '../components/Buttton'

export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur'
  })

  return (
    <MainCard>
      <Typography component="h2" variant="h5">Step 1</Typography>
      <Form>
        <InputText
          ref={ register }
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
        />
        <InputText
          ref={ register }
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
        />
        <Button>Следующий шаг</Button>
      </Form>
    </MainCard>
  )
}