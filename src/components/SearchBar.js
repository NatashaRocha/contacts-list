import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" onChange={this.props.onChange}/>
      </form>)
  }
}

export default SearchBar;