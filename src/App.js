import React, { Component } from 'react'
import './App.css'
import { Components as AppComponents } from './modules/app'
import { Components as UsersComponents } from './modules/users'

class App extends Component {
  render() {
    return (
      <AppComponents.Home>
        <UsersComponents.Panel />
      </AppComponents.Home>
    )
  }
}

export default App
