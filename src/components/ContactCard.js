import React, { Component } from 'react';
import ContactHeaderCard from './ContactHeaderCard.js';

class ContactCard extends Component {
  render() {
    return (
      <div>
        <ContactHeaderCard contact={this.props.contact} />
      </div>
    )
  }
}

export default ContactCard;