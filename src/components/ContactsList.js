import React, { Component } from 'react';
import ContactCard from './ContactCard.js'

class ContactsList extends Component {
  constructor(props) {
    super(props)
    this.state = {active: ""}
  }

  handleClick = (e, id) => {
    e.preventDefault()
    id === this.state.active ? this.setState({active: ""}) : this.setState({active: id})
  }

  render() {
    return (
      <ul className="contacts-list">
        {this.props.contacts.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact.id}
            active={this.state.active === contact.id}
            onClick={(e) => {this.handleClick(e, contact.id)}}/>
          ))
        }
      </ul>
    )
  }
}

export default ContactsList;