import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle =makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export const Button = ({ children, props }) => {
  const styles = useStyle()

  return (
    <button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={ styles.root }
      { ...props }
    >
      { children }
    </button>
  )
}