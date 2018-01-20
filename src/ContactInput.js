import React from 'react';
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
        telNumb: '',
        contactFreq: null
      }
    };
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      contactInfo: 
      {
        name: '',
        email: '',
        telNumb: '',
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
  
  handleSubmit(event) {
    this.props.addContactCallback(this.state.contactInfo);
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
            <input name="telNumb" type="tel" 
              value={this.state.contactInfo['telNumb']} 
              onChange={this.handleChange}/>
          </label>
          <br /> 

          <label> Contact frequency:  
            <select name="contactFreq" type="select" 
            value={this.state.contactInfo['contactFreq']} 
            onChange={this.handleChange}>
              <option> SELECT FREQUENCY </option>
              <option> weekly </option>
              <option> monthly </option>
              <option> quarterly </option>
              <option> semi-annually </option>
              <option> annually </option>
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
