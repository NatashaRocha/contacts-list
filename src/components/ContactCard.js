import React, { Component } from 'react';
import ContactHeaderCard from './ContactHeaderCard.js';

class ContactCard extends Component {
  constructor(props) {
    super(props)
    this.state = {active: false}
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({active: !prevState.active}))
  }

  render() {
    let { contact } = this.props

    return (
      <div onClick={this.handleClick}>
        <ContactHeaderCard contact={contact} />
        {this.state.active && (
          <div>
            {contact.phone && <div><b>Phone Number:</b> {contact.phone}</div>}
            {contact.cell && <div><b>Cellphone:</b> {contact.cell}</div>}
          </div>)}
      </div>
    )
  }
}

export default ContactCard;