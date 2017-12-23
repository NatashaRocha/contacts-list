import React, { Component } from 'react';
import ContactCard from './ContactCard.js'

class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.login.username}/>
          ))
        }
      </ul>
    )
  }
}

export default ContactsList;