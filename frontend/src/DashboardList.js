import React from 'react';
import axios from 'axios';

import RipeContactCard from './RipeContactCard';

const list = {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
}


const url = 'http://localhost:3001/contacts/ripe'


class DashboardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { this.loadContacts()}

  loadContacts = () =>  {
    axios({
      method: 'get',
      url: url, 
    }).then(response => {
      Object.keys(response.data).map(contactId => {
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
