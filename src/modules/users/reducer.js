import * as actionTypes from './actionTypes'

const getInitialState = () => ({
  userInfo: {}
})

const user = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.SEARCH:
      return { userInfo: { name: payload.text } }
    default:
      return state
  }
}

export default user
