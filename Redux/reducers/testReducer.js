import { TEST_SUCCESS, TEST_FAILED } from '../constants/testConstants'
import { createReducer } from '../../common/util/reducerUtil'

const initialState = {};


export const testSuccess = (state, payload) => {
  return { ...state, message: payload }
}

export const testFail = (state, payload) => {
  return { ...state, message: payload }
}


export default createReducer(initialState, {
  [TEST_SUCCESS]: testSuccess,
  [TEST_FAILED]: testFail,
})