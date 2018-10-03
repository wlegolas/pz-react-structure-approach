import PropTypes from 'prop-types'
import React from 'react'

const Filter = ({ onKeyUp }) => {
  return (
    <div className="pz-search">
      <input
        type="text"
        placeholder="Fill the github user and press enter to search"
        onKeyUp={onKeyUp}
      />
    </div>
  )
}

Filter.propTypes = {
  onKeyUp: PropTypes.func.isRequired
}

export default Filter
