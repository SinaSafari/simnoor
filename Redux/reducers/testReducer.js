import { TEST_SUCCESS } from '../constants/testConstants'
import { createReducer } from '../../common/util/reducerUtil'

const initialState = {};


export const testSuccess = (state, payload) => {
  return { ...state, message: payload }
}


export default createReducer(initialState, {
  [TEST_SUCCESS]: testSuccess,
})