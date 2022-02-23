import { Box } from '@material-ui/core'
import moment from 'moment'
import React from 'react'

import useStyles from './styles'

const NewsItem = (props) => {
  const classes = useStyles()
  const { item } = props

    return (
      <Box className={classes.container}>
        <Box id='detail' className={classes.detail}>
          <p>{moment(item.created_at).format('YYYY-MM-DD')}</p>
          <Box className={classes.linker}>
            <a href={item.url} target='none'>{item.title}</a>
            <Box className={classes.info}>
              <p>Points: {item.points}</p>
              <p>Author: {item.author}</p>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}

export default NewsItem
