import React from 'react';
import axios from 'axios';

import ContactCard from './ContactCard';


const contactListStyle = {
  display: "flex",
  flexWrap: "wrap"

}


class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: 
      {
        name: '',
        email: '',
        phoneNumber: '',
        contactFrequency: null
      }
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Name:  
            <input name="name" type="text" 
              value={this.state.contactInfo['name']} 
              onChange={this.handleChange}/>
          </label>
          <br /> 
          
          <label> Email address:  
            <input name="email" type="text" 
              value={this.state.contactInfo['email']} 
              onChange={this.handleChange}/>
          </label>
          <br /> 
          
          <label> Phone number:  
            <input name="phoneNumber" type="tel" 
              value={this.state.contactInfo['phoneNumber']} 
              onChange={this.handleChange}/>
          </label>
          <br /> 

          <label> Contact frequency:  
            <select name="contactFrequency" type="select" 
            value={this.state.contactInfo['contactFrequency'] || 'undefined'} 
            onChange={this.handleChange}>
              <option value='undefined'> SELECT FREQUENCY </option>
              <option value='weekly'> weekly </option>
              <option value='monthly'> monthly </option>
              <option value='quarterly'> quarterly </option>
              <option value='semi-annually'> semi-annually </option>
              <option value='annually'> annually </option>
            </select>
          </label>
          <br /> 
          
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default ContactInput;
