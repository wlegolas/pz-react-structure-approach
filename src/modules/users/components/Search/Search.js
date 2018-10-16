import PropTypes from 'prop-types'
import React from 'react'

class Search extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  handleClick = event => {
    console.log('***** Foi')
  }

  handleKeyUp = event => {
    const keyCode = event.which || event.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.props.onSearch(event.target.value)
    }
  }

  render() {
    return (
      <div className="pz-search">
        <input
          type="text"
          placeholder="Fill the github user and press enter to search"
          onKeyUp={this.handleKeyUp}
        />
        <button type="button" onClick={this.handleClick}>
          Teste
        </button>
      </div>
    )
  }
}

export default Search
