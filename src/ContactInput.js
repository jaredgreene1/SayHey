import React from 'react';
import axios from 'axios';

import uuid from 'uuid/v4';

const formStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "10",
  backgroundColor: "lightblue",
  borderRadius: "15px",
  maxWidth: "800"

}

const submitButtonStyle = {
  width: "100",
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
        interests: this.props.interests,
        proximity: this.props.proximity,
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
        interests : '',
        proximity: null
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
      <form onSubmit={this.handleSubmit} style={formStyle}>
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
          <label> Interests (comma seperated): </label> 
          <input name="interests"
            type="text"
            value={this.state.contactInfo['interests']}
            onChange={this.handleChange}
            style={inputBoxStyle}/>
        </div> 

  
        <div style={inputStyle}>
          <label> How close are you? (1 is least close) </label> 
          <select name="proximity"
            type="select"
            value={this.state.contactInfo['proximity'] || 'undefined'}
            onChange={this.handleChange} 
            style={inputBoxStyle}>
            <option value='1'> 1 </option>
            <option value='2'> 2 </option>
            <option value='3'> 3 </option>
            <option value='5'> 5 </option>
            <option value='8'> 8 </option>
            <option value='13'> 13 </option>
          </select>
        </ div> 
        
        
        <input style={submitButtonStyle} type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactInput;
