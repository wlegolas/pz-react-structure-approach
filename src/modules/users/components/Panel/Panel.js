import PropTypes from 'prop-types'
import React from 'react'
import { Search, UserInfo } from '../'

const Panel = ({ userInfo, onSearch }) => (
  <div className="pz-user-panel">
    <Search onSearch={onSearch} />
    <UserInfo userInfo={userInfo} />
  </div>
)

Panel.propTypes = {
  userInfo: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default Panel
