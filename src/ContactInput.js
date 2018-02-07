import React from 'react';
import axios from 'axios';

import uuid from 'uuid/v4';

const contactFormStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "10",
  backgroundColor: "lightblue",
  borderRadius: "15px"
}


const inputStyle = {padding: "4"}

const inputBoxStyle = {borderRadius: "5px"}

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: 
      {
        name: this.props.name, 
        email: this.props.email,
        phoneNumber: this.props.phoneNumb,
        contactFrequency: this.props.contactFreq,
        uuid: this.props.uuid || uuid()
      },
      update: this.props.update
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
		this.uploadContact = this.uploadContact.bind(this);
  }

  resetForm() {
    this.setState({
      contactInfo: 
      {
        name: '',
        email: '',
        phoneNumber: '',
        contactFreq: null
      }
    });
  }

  handleChange(event) {
    console.log(event)
    console.log(event.target)
    this.state.contactInfo[event.target.name] = event.target.value;
    this.setState({contactInfo: this.state.contactInfo});
  }


  uploadContact(contactData) {                                        
    console.log("New contact:");                                           
    console.log(JSON.stringify(contactData));                              
    axios({                                                                
      method: 'post',                                                      
      url: "/contact-data/upload",                                         
      headers: {'Content-Type': 'application/json'},                       
      data: JSON.stringify(contactData)                                    
    });                                                                    
  }  


  
  handleSubmit(event) {
    this.uploadContact(this.state.contactInfo);
    this.resetForm()
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={contactFormStyle}>
        <div style={inputStyle}>
          <label> Name: </label> 
          <input name="name"
            type="text" 
            value={this.state.contactInfo['name']} 
            onChange={this.handleChange} 
            style={inputBoxStyle}/>
        </div>

        <div style={inputStyle}>
          <label> Email address: </label> 
          <input name="email" 
            type="text"
            value={this.state.contactInfo['email']}
            onChange={this.handleChange}
            style={inputBoxStyle}/>
        </div>

        <div style={inputStyle}>
          <label> Phone number: </label> 
          <input name="phoneNumber"
            type="tel"
            value={this.state.contactInfo['phoneNumber']}
            onChange={this.handleChange}
            style={inputBoxStyle}/>
        </div> 

  
        <div style={inputStyle}>
          <label> Contact frequency: </label> 
          <select name="contactFrequency"
            type="select"
            value={this.state.contactInfo['contactFrequency'] || 'undefined'}
            onChange={this.handleChange} 
            style={inputBoxStyle}>
            <option value='undefined'> SELECT FREQUENCY </option>
            <option value='weekly'> weekly </option>
            <option value='monthly'> monthly </option>
            <option value='quarterly'> quarterly </option>
            <option value='semi-annually'> semi-annually </option>
            <option value='annually'> annually </option>
          </select>
        </ div> 
        
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactInput;
