import { Components as AppComponents } from 'modules/app'
import configureStore from 'modules/store'
import { Components as UsersComponents } from 'modules/users'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'

const initialState = {
  users: {
    userInfo: {
      name: 'Weslley'
    }
  }
}
const store = configureStore(initialState)

store.dispatch({ type: '@pzStructure/@@INIT' })

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppComponents.Home>
          <UsersComponents.Panel />
        </AppComponents.Home>
      </Provider>
    )
  }
}

export default App
