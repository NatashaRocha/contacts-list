import React, { Component } from 'react';

class ContactHeaderCard extends Component {
  render() {
    let contact = this.props.contact

    // Colocando iniciais em maiusculo
    let firstName = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1)
    let lastName = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1)

    return (
      <div>
        <img src={contact.picture.medium} alt="" />
        <div>
          <p>{`${firstName} ${lastName}`}</p>
          <p>{contact.email}</p>
        </div>
      </div>
    )
  }
}

export default ContactHeaderCard;