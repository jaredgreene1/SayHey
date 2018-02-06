import React from 'react';
import axios from 'axios';

import ContactCard from './ContactCard';

const listStyle = {
  width:"100%"
}

const headers = 
  ["Full Name", "Email Address", "Phone Number", "Proximity"]; 



class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { this.loadContacts()}


  loadContacts = () =>  {
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
      <div className="contact-list"> 
        <table style={listStyle}>  
          <tbody>
            {headers.map(header => <th> {header} </th>)}
          </tbody>
            {
              Object.keys(this.state.contacts).map(function(contactKey) {
                return <ContactCard key={contactKey} 
              contactInfo={this.state.contacts[contactKey]} /> 
              }.bind(this))
            }
        </table>
      </div>
    );
  }
}

export default ContactList;
