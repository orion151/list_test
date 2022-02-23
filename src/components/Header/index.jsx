import { Box, Paper } from '@material-ui/core'
import _ from 'lodash'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {InputWithButton} from '@/components'
import { newsList } from '@/features/slice/newsListModelSlice'

import { HamburgerMenu,Menu } from './components'
import useStyles from './styles'

const Header = () => {
  
  const classes = useStyles()
  const dispatch = useDispatch()

  const [searchString, setSearchString] = useState('')

  const onChangeValue = (v) => {
    setSearchString(v)
    search()
  }

  const search = _.debounce(() => {
    dispatch(newsList(searchString))
  }, 300)

  return (
      <Paper elevation={3} className={classes.root} >
        <HamburgerMenu />
        <Menu />
        <Box className={classes.searchBox}>
          <InputWithButton
            value={searchString}
            placeholder="Search"
            label=""
            updateValue={onChangeValue}
          />
        </Box>
      </Paper>
  )
}

export default Header
