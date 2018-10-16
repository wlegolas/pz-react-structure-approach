import * as action from './actionTypes'

export const search = text => ({
  type: action.SEARCH,
  payload: { text }
})
