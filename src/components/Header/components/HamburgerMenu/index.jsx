import { Box, IconButton, SwipeableDrawer   } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import _ from 'lodash'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {InputWithButton} from '@/components'
import { newsList } from '@/features/slice/newsListModelSlice'

import useStyles from './styles'

const HamburgerMenu = () => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const [drawerState, setDrawerState] = useState(false)
    const [searchString, setSearchString] = useState('')
    
    const onChangeValue = (v) => {
      setSearchString(v)
      toggleDrawer(false)
      search()
    }

    const search = _.debounce(() => {
      dispatch(newsList(searchString))
    }, 300)

    const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift') && event.type==='mouseclick') {
        return
      }
  
      setDrawerState(open)
    }

    const list = () => (
      <div style={{ width: '250px'}}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button key='Home'>
            <ListItemText primary='Home' />
          </ListItem>
          <Divider />
          <ListItem button key='Features'>
            <ListItemText primary='Freatures' />
          </ListItem>
          <Divider />
          <ListItem button key='Blog'>
            <ListItemText primary='Blog' />
          </ListItem>
        </List>
        <Divider />
      </div>
    )

    return (
      <Box className={classes.hamburgerMenu}>
        <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon className={classes.icon} />
        </IconButton>
        <SwipeableDrawer
            anchor={'left'}
            open={drawerState}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            classes={{paperAnchorLeft: classes.drawer}}
          >
            {list()}
            <Box className={classes.searchBox}>
              <InputWithButton
                value={searchString}
                placeholder="Search"
                label=""
                updateValue={onChangeValue}
              />
            </Box>
          </SwipeableDrawer>
      </Box>
    )
}

export default HamburgerMenu
