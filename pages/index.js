import React from 'react'
import { connect } from 'react-redux'
import { getTest } from '../Redux/actionCreators/testActionCreators'


const Home = ({ dispatch, state }) => {
  console.log(state)

  return (
    <div>
      Home Page
      <p onClick={() => dispatch(getTest())}>Get Test: Click me </p>
    </div>
  )
}

const map = state => {
  return {
    state
  }
}

export default connect(map)(Home)
