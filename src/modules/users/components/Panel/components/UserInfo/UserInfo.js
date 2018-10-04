import PropTypes from 'prop-types'
import React from 'react'

const UserInfo = ({ userInfo }) => {
  return (
    <div className="pz-user-container">
      <div className="pz-user-info">
        <div className="pz-box pz-left-box">
          <img src={userInfo.avatarUrl} alt="GiHhub avatar" />
        </div>
        <div className="pz-box pz-right-box">
          <h1>{userInfo.name}</h1>
          <p className="pz-label">Following: {userInfo.totalFollowing}</p>
          <p className="pz-label">Followers: {userInfo.totalFollowers}</p>
        </div>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalFollowing: PropTypes.number.isRequired,
    totalFollowers: PropTypes.number.isRequired
  }).isRequired
}

export default UserInfo
