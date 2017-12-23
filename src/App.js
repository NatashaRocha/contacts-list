import React, { Component } from 'react';
import ContactsList from './components/ContactsList.js';
import SearchBar from './components/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ContactsList />
      </div>
    );
  }
}

export default App;
