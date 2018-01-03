import React, { Component } from 'react';

class SearchBar extends Component {
  onSubmit = (e) => {e.preventDefault()}
  render() {
    return (
      <form className="search-bar" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Pesquisar" onChange={this.props.onChange}/>
      </form>)
  }
}

export default SearchBar;