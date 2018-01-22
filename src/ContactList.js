import React from 'react';
import axios from 'axios';

import ContactCard from './ContactCard';

const contactListStyle = {
  display: "flex",
  flexWrap: "wrap"
}



class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.loadContacts=this.loadContacts.bind(this);
  }

  componentDidMount() {
    this.loadContacts()
  }

  loadContacts() {
    console.log("LOADING CONTACTS");
    axios({
      method: 'get',
      url: '/contact-data/load'
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
      <div className="contact-list" style={contactListStyle}> {
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
