import React, { Component } from 'react';
import ContactsList from './components/ContactsList.js';
import SearchBar from './components/SearchBar.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      filteredContacts: []
    }
  }

  filterContacts = (e) => {
    let { contacts } = this.state

    contacts = contacts.filter((contact) => (
      contact.login.username.indexOf(e.target.value.toLowerCase()) !== -1 ||
      contact.email.indexOf(e.target.value.toLowerCase()) !== -1 ||
      contact.phone.replace(/-|\(|\)| /gi, "").indexOf(e.target.value.replace(/-|\(|\)| /gi, "")) !== -1  ||
      contact.cell.replace(/-|\(|\)| /gi, "").indexOf(e.target.value.replace(/-|\(|\)| /gi, "")) !== -1 
    ))

    this.setState({filteredContacts: contacts})
  }

  componentWillMount() {
    fetch("https://randomuser.me/api?results=100")
    .then((results) => (results.json()))
    .then((data) => {
      let contacts = data.results
      this.setState({contacts: contacts, filteredContacts: contacts})
    })
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar onChange={this.filterContacts}/>
        <ContactsList contacts={this.state.filteredContacts}/>
      </div>
    );
  }
}

export default App;
