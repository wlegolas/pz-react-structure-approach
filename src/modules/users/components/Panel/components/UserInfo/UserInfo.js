import React from 'react'

const UserInfo = () => {
  return (
    <div className="pz-user-container">
      <div className="pz-user-info">
        <div className="pz-box pz-left-box">
          <img
            src="https://avatars2.githubusercontent.com/u/698363?v=4"
            alt="GiHhub avatar"
          />
        </div>
        <div className="pz-box pz-right-box">
          <h1>Weslley Alves de Oliveira</h1>
          <p className="pz-label">Following: 1</p>
          <p className="pz-label">Followers: 2</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
