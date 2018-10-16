import * as actionTypes from './actionTypes'

const getInitialState = () => ({
  userInfo: {}
})

const user = (state = getInitialState(), action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return { userInfo: { name: 'By reducer' } }
    default:
      return state
  }
}

export default user
