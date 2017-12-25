import React, { Component } from 'react';
import ContactHeaderCard from './ContactHeaderCard.js';

class ContactCard extends Component {
  render() {
    let { contact, active, onClick } = this.props

    return (
      <div onClick={onClick} className="contact-card">
        <ContactHeaderCard contact={contact} />
        {active && (
          <div className="contact-card-body">
            {contact.phone && <div>{contact.phone}</div>}
            {contact.cell && <div>{contact.cell}</div>}
          </div>)}
      </div>
    )
  }
}

export default ContactCard;