/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@material-ui/core'
import $ from 'jquery'
import _ from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Item from '@/components/NewsItem'
import { newsList } from '@/features/slice/newsListModelSlice'

import useStyles from './styles'

const NewsList = () => {

  const dispatch = useDispatch()
  const classes = useStyles()
  const news = useSelector(state => state.newsList.newsList)

  const centerToNewsList = _.debounce(() => {
    const bodyWidth = $('#root').eq(0).width()
    const count = Math.floor(bodyWidth / 220) 
    const padding = (bodyWidth - 220*count) / 2

    $('#newsList').css('padding', `0 ${padding}px`)
  }, 100)

  useEffect(() => {
    centerToNewsList()
    window.addEventListener('resize', centerToNewsList)

    return () => {
      window.removeEventListener('resize', centerToNewsList)
    }
  }, [centerToNewsList])

  useEffect(() => {
    dispatch(newsList())
  }, [])
 
  if(news.length > 0) {
    return (
      <Box id="newsList" className={classes.container}>
        {news.map((item, index) => {
          return (
            <Item key={item.objectID + index.toString()} item={item} />
          )
        })}
      </Box>
    )
  }
  else {
    return (
      <p>No Items</p>
    )
  }
}

export default NewsList
