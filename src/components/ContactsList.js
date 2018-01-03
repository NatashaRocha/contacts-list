import React, { Component } from 'react';
import ContactCard from './ContactCard.js'

class ContactsList extends Component {
  render() {
    return (
      <ul className="contacts-list">
        {this.props.contacts.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact.id}
            active={this.props.active === contact.id}
            onClick={(e) => {this.props.onClick(e, contact.id)}}/>
          ))
        }
      </ul>
    )
  }
}

export default ContactsList;