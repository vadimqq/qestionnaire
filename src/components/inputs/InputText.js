import React, { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField'

export const InputText = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      inputRef={ ref }
      { ...props }
    />
  )
})