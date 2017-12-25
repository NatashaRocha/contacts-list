import React, { Component } from 'react';
import ContactCard from './ContactCard.js'

class ContactsList extends Component {
  constructor(props) {
    super(props)
    this.state = {active: ""}
  }

  handleClick = (e, username) => {
    e.preventDefault()
    username === this.state.active ? this.setState({active: ""}) : this.setState({active: username})
  }

  render() {
    return (
      <ul className="contacts-list">
        {this.props.contacts.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact.login.username}
            active={this.state.active === contact.login.username}
            onClick={(e) => {this.handleClick(e, contact.login.username)}}/>
          ))
        }
      </ul>
    )
  }
}

export default ContactsList;