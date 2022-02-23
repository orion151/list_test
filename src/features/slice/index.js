import { combineReducers } from 'redux'

import newsListModelSlice from './newsListModelSlice'

const rootReducer = combineReducers({
    newsList: newsListModelSlice,
})

export default rootReducer
