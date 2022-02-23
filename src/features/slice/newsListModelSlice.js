import { createSlice } from '@reduxjs/toolkit'

import {
    getNewsList,
} from '@/api'

export const initialState = {
    newsList: [],
    loading: false,
}

const newsListModelSlice = createSlice({
    name: 'newsListModelSlice',
    initialState,
    reducers: {
        getNewsListStart: (state, action) => {
            state.loading = true
        },
        getNewsListSuccess: (state, action) => {
            state.loading = false
            if (action.payload.data) {
                state.newsList = action.payload.data
            }
        },
        getNewsListFailure: (state, action) => {
            state.loading = false
        },
    },
})

const newsList = (key) => {
    return async dispatch => {
        dispatch(newsListModelSlice.actions.getNewsListStart())
        const result = await getNewsList(key)
        if(result.status === 200) {
            dispatch(newsListModelSlice.actions.getNewsListSuccess({data: result.data.hits? result.data.hits : []}))
        }
        else{
            dispatch(newsListModelSlice.actions.getNewsListFailure())
        }
    }
}

const newsListModelSelector = state => state.newsList

export {
    newsListModelSelector,
    newsList,
}

export default newsListModelSlice.reducer
