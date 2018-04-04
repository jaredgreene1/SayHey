import React from 'react';
import axios from 'axios';

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

const baseUrl = 'http://localhost:3001/contacts/'


class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.log(typeof(this.props.contactInfo))
    
    if (this.props.contactInfo == undefined) {
      this.state = {
        contactInfo: {
          firstName: '',
          lastName: '',
          interests: '',
          proximity: ''
        },
        update: false
      }
    } else {
      this.state = {
        contactInfo: 
        {
          firstName: this.props.contactInfo['firstName'], 
          lastName: this.props.contactInfo['lastName'], 
          interests: this.props.contactInfo['interests'],
          proximity: this.props.contactInfo['proximity'],
          id: this.props.contactInfo['id']
        },
        update: true 
      }
    } 
  }

  resetForm = () => {
    this.setState({
      contactInfo: 
      {
        firstName: '',
        lastName: '',
        interests : '',
        proximity: 1
      },
      update: false
    });
  }

  handleChange = (event) => {
    console.log(event)
    console.log(event.target)
    this.state.contactInfo[event.target.name] = event.target.value;
    this.setState({contactInfo: this.state.contactInfo});
  }


  uploadContact = (contactData, cb) => {                                        
    const url = baseUrl + (this.state.update ? 'update' : 'create')

    return axios({                                                                
      method: 'post',                                                      
      url: url,
      headers: {'Content-Type': 'application/json'},                       
      data: JSON.stringify(contactData)                                    
    }).then(cb);                                                                    
  }  


  
  handleSubmit = (event) => {
    event.preventDefault();
    this.uploadContact(this.state.contactInfo, this.props.callback)
    this.resetForm()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <div style={inputStyle}>
          <label> First name: </label> 
          <input name="firstName"
            type="text" 
            value={this.state.contactInfo['firstName']} 
            onChange={this.handleChange} 
            style={inputBoxStyle}/>
        </div>
        
        <div style={inputStyle}>
          <label> Last name: </label> 
          <input name="lastName"
            type="text" 
            value={this.state.contactInfo['lastName']} 
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
            <option value='21'> 21 </option>
            <option value='34'> 34 </option>
            <option value='365'> Always </option>

          </select>
        </ div> 
        
        
        <input style={submitButtonStyle} type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactInput;
