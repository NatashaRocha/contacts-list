import React, { Component } from 'react';
import ContactsList from './components/ContactsList.js';
import SearchBar from './components/SearchBar.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
    }
  }

  componentWillMount() {
    fetch("http://www.mocky.io/v2/5a3e45532f00003a0e17136f")
    .then((results) => (results.json()))
    .then((data) => {
      let contacts = data.results
      this.setState({contacts: contacts})
    })
  }

  render() {
    return (
      <div>
        <SearchBar contacts={this.state.contacts} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
