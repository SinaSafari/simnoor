import { put } from 'redux-saga/effects'
import { TEST_SUCCESS, TEST_FAILED } from "../constants/testConstants"

export function* test() {
  try {
    yield console.log('start saga')
    yield put({
      type: TEST_SUCCESS,
      payload: {
        msg: 'return test obj'
      }
    })
  } catch (err) {
    yield console.log(err)
    yield put({ type: TEST_FAILED })
  }
}
