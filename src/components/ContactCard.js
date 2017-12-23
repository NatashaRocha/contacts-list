import React, { Component } from 'react';
import ContactHeaderCard from './ContactHeaderCard.js';

class ContactCard extends Component {
  render() {
    let { contact, active, onClick } = this.props

    return (
      <div onClick={onClick}>
        <ContactHeaderCard contact={contact} />
        {active && (
          <div>
            {contact.phone && <div><b>Phone Number:</b> {contact.phone}</div>}
            {contact.cell && <div><b>Cellphone:</b> {contact.cell}</div>}
          </div>)}
      </div>
    )
  }
}

export default ContactCard;