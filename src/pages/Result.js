import React from 'react'
import { useSelector } from 'react-redux'

import { MainCard } from '../components/MainCard'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  languages: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}))

export const Result = () => {
  const styles = useStyles()
  const info = useSelector(state => state.info)
  const questionnaire = useSelector(state => state.questionnaire)

  return (
    <MainCard>
      <Typography component="h2" variant="h5">Ваш результат</Typography>
      <Card className={ styles.root } variant="outlined">
        <CardContent>
          <Typography variant="h5" component="span">
            Имя:
          </Typography>
          <Typography className={ styles.pos } color="textSecondary">
            { info.firstName }
          </Typography>
          <Typography variant="h5" component="span">
            Фамилия:
          </Typography>
          <Typography className={ styles.pos } color="textSecondary">
          { info.lastName }
          </Typography>
          <Typography variant="h5" component="span">
            Возраст:
          </Typography>
          <Typography className={ styles.pos } color="textSecondary">
            { questionnaire.age }
          </Typography>
          <Typography variant="h5" component="span">
            Языки програмирования:
          </Typography>
          <div className={ styles.languages }>
            { questionnaire.languages.map((item, id) => {
              return (
              <Chip
                variant="outlined"
                size="small"
                label={ item }
                key={ id }
              />)
            }) }
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">Подтвердить</Button>
        </CardActions>
      </Card>
    </MainCard>
  )
}