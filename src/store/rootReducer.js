import users from 'modules/users'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  [users.constants.NAME]: users.reducer
})

export default rootReducer
