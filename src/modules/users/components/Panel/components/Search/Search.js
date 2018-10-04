import PropTypes from 'prop-types'
import React from 'react'

const Search = ({ onKeyUp }) => {
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

Search.propTypes = {
  onKeyUp: PropTypes.func.isRequired
}

export default Search
