import { createStore } from 'redux'
import middleware from './middleware'
import reducer from './rootReducer'

const configureStore = initialState => {
  return createStore(reducer, initialState, middleware)
}

export default configureStore
