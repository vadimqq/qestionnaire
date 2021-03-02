import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { MainCard } from '../components/MainCard'
import { Form } from '../components/Form'
import { SubmitButton } from '../components/Buttton'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import { setLenguages } from '../store/questionnaireReducer'

export const Step3 = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    Php: false,
    Java: false,
    CSharp: false,
    JavaScript: false
  })

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.checked });
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setLenguages(createResult(value)))
    history.push('/result')
  }

  const createResult = (value) => {
    const array = Object.keys(value)
    const result = array.map((item) => {
      if (value[item] === true) {
        return item
      } else {
        return null
      }
    }).filter(item => { return item !== null })
    return result
  }

  const { Php, Java, CSharp, JavaScript } = value

  return (
    <MainCard>
      <Typography component="h2" variant="h5">Какие языки програмирования вы знаете?</Typography>
      <Form onSubmit={ submitHandler }>
        <FormLabel component="legend">кек</FormLabel>
          <FormControlLabel
            control={<Checkbox checked={Php} onChange={handleChange} name="Php" />}
            label="Php"
            color="primary"
          />
          <FormControlLabel
            control={<Checkbox checked={Java} onChange={handleChange} name="Java" />}
            label="Java"
          />
          <FormControlLabel
            control={<Checkbox checked={CSharp} onChange={handleChange} name="CSharp" />}
            label="C#"
          />
          <FormControlLabel
            control={<Checkbox checked={JavaScript} onChange={handleChange} name="JavaScript" />}
            label="JavaScript"
          />
        <SubmitButton>Следующий шаг</SubmitButton>
      </Form>
    </MainCard>
  )
}