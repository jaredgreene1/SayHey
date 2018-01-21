import React from 'react';
import ContactCard from './ContactCard';
import ContactInput from './ContactInput';
import axios from 'axios';

const contactListStyle = {
  display: "flex",
  flexWrap: "wrap"

}


class ContactMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };

    this.newContactCallback=this.newContactCallback.bind(this); 
  }

  newContactCallback(contactData) {
    console.log("New contact:");
    console.log(JSON.stringify(contactData));
    axios({
      method: 'post',
      url: "/contact-data/upload", 
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(contactData)
    });
    this.state.contacts.push(contactData);
    this.setState({contacts: this.state.contacts})
  }

  render() {
    return (
      <div>
        <ContactInput addContactCallback={this.newContactCallback} />
        <div className="contact-list" style={contactListStyle}>
          {
            this.state.contacts.map(function(contactData) {
              return <ContactCard contactInfo={contactData}/>
            }.bind(this))
          }
        </div>
      </div>
    );
  }
}
export default ContactMain;
