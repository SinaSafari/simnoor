import { TEST_SUCCESS } from '../constants/testConstants'

export const test = (state = [], action) => {
  switch (action.type) {
    case TEST_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
