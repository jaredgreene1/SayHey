import React from 'react';
import axios from 'axios';

import ContactCard from './ContactCard';

const ContactServiceURL = 'http://localhost:3001/contact-data/load'


const list = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
}


class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { this.loadContacts()}

  loadContacts = () =>  {
    axios({
      method: 'get',
      url: ContactServiceURL, 
    }).then(response => {
      Object.keys(response.data).map(contactKey => {
        if (!this.state.contacts) this.state.contacts = {};
        this.state.contacts[contactKey] = response.data[contactKey];
      })
      this.setState({contacts: this.state.contacts});
    });
  }

  render() {
    if(!this.state.contacts) return <p> Loading contacts... </p>
    return (
      <div style={list}> 
        {
          Object.keys(this.state.contacts).map(function(contactKey) {
            return <ContactCard key={contactKey} 
          contactInfo={this.state.contacts[contactKey]} /> 
          }.bind(this))
        }
      </div>
    );
  }
}

export default ContactList;
