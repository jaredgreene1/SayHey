import React from 'react';
import axios from 'axios';

import RipeContactCard from './RipeContactCard';

const list = {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
}


const ContactServiceURL = 'http://localhost:3001/contact-data/ripe-contacts'


class DashboardList extends React.Component {
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
      Object.keys(response.data).map(contactId => {
        console.log("contact data: ")
        console.log(response.data)
        console.log("id:")
        console.log(contactId)
        if (!this.state.contacts) {
          this.state.contacts = {};
          this.state.contactIds = [];
        }
        this.state.contacts[contactId] = response.data[contactId];
        this.state.contactIds.push(contactId)
      })
      this.setState({contacts: this.state.contacts});
    });
  }

  render() {
    if(!this.state.contacts) return <p> Loading contacts... </p>
    return (
      <div style={list}> 
        {
          this.state.contactIds.map(id => {
            return <RipeContactCard key={id} 
          contactInfo={this.state.contacts[id]} /> 
          })
        }
      </div>
    );
  }
}

export default DashboardList;
