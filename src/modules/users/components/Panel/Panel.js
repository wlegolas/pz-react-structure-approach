import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../actions'
import { Search, UserInfo } from '../index'

const Panel = ({ userInfo, onSearch }) => (
  <div className="pz-user-panel">
    <Search onSearch={onSearch} />
    {userInfo && <UserInfo userInfo={userInfo} />}
  </div>
)

Panel.propTypes = {
  userInfo: PropTypes.object,
  onSearch: PropTypes.func.isRequired
}

const mapStateToProps = ({ users }) => ({
  userInfo: users.userInfo
})

const mapDispatchToProps = dispatch => ({
  onSearch: text => dispatch(action.search(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel)
