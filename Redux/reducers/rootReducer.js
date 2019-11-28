import { combineReducers } from 'redux'

import test from './testReducer'
import async from './asyncReducer'

export const rootReducer = combineReducers({
    test,
    async
})
