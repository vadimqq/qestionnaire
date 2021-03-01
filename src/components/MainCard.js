import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export const MainCard = ({ children, ...props }) => {
  const styles = useStyle()

  return (
    <Container
      container="main"
      maxWidth="xs"
      className={ styles.root }
      { ...props }
    >
      { children }
    </Container>
  )
}