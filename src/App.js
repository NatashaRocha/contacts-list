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

    contacts = contacts.filter((contact) => {
      let search = e.target.value.toLowerCase()
      return (
        `${contact.name.first} ${contact.name.last}`.toLowerCase().indexOf(search) !== -1 ||
        contact.username.indexOf(search) !== -1 ||
        contact.email.indexOf(search) !== -1 ||
        contact.phone.replace(/-|\(|\)| /gi, "").indexOf(search.replace(/-|\(|\)| /gi, "")) !== -1  ||
        contact.cell.replace(/-|\(|\)| /gi, "").indexOf(search.replace(/-|\(|\)| /gi, "")) !== -1 
      )
    })

    this.setState({filteredContacts: contacts})
  }

  componentWillMount() {
    fetch("http://localhost:8080/api/contacts/100")
    .then((results) => (results.json()))
    .then((contacts) => { this.setState({contacts: contacts, filteredContacts: contacts}) })
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
