import React, { Component } from 'react';

class ContactHeaderCard extends Component {
  render() {
    let { contact } = this.props

    // Colocando iniciais em maiusculo
    let firstName = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1)
    let lastName = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1)

    return (
      <div className="contact-header-card">
        <img src={contact.picture.medium} alt="" />
        <div>
          <b>{`${firstName} ${lastName}`}</b> ({contact.login.username})<br/>
          {contact.email ? <i>{contact.email}</i> : <i>{contact.phone}</i>}
        </div>
      </div>
    )
  }
}

export default ContactHeaderCard;