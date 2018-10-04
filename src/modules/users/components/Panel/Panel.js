import PropTypes from 'prop-types'
import React from 'react'
import { Search, UserInfo } from './components'

const Panel = ({ userInfo }) => (
  <div className="pz-user-panel">
    <Search onKeyUp={() => {}} />
    <UserInfo userInfo={userInfo} />
  </div>
)

Panel.propTypes = {
  userInfo: PropTypes.object.isRequired
}

export default Panel
