import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Search, UserInfo } from '../index'

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

const mapStateToProps = ({ users }) => ({
  userInfo: users.userInfo
})

export default connect(mapStateToProps)(Panel)
