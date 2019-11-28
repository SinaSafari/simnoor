import { all, takeEvery } from 'redux-saga/effects'

import { TEST_START } from './constants/testConstants'
import { test } from './actions/testActions'


function* rootSaga() {
    yield all([
        takeEvery(TEST_START, test)
    ])
}

export default rootSaga
