import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  }
}))

export const Form = ({ children, ...props }) => {
  const styles = useStyle()

  return (
    <form
      { ...props }
      noValidate
      className={ styles.root }
    >
      { children }
    </form>
  )
}