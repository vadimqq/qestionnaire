import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { MainCard } from '../components/MainCard'
import { Form } from '../components/Form'
import { SubmitButton } from '../components/Buttton'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

export const Step3 = () => {
  const history = useHistory()
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(value)
    history.push('/step3')
  }

  return (
    <MainCard>
      <Typography component="h2" variant="h5">Какие языки програмирования вы знаете?</Typography>
      <Form onSubmit={ submitHandler }>
        <FormLabel component="legend">кек</FormLabel>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} name="checkedG" />}
            label="Php"
            color="primary"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChange} name="checkedG" />}
            label="Java"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChange} name="checkedG" />}
            label="C#"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChange} name="checkedG" />}
            label="JavaScript"
          />
        <SubmitButton>{ value === '' ? 'пропустить': 'Следующий шаг' }</SubmitButton>
      </Form>
    </MainCard>
  )
}