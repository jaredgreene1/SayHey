import React from 'react';
import axios from 'axios';
import crypto from 'crypto';


import { Button } from '../Buttons';
import { signupUrl } from '../../endpoints';


const outer = {
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
}

const form = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'fit-content',
  boxShadow: 'rgb(70, 129, 180) 0px 0px 0px 1pt',
  borderRadius: '5px',
  padding: '7px',
}

const inputBox = {
  border: 'none',
  borderBottom: '1px solid rgb(210, 218, 210)',
  margin: '15px',
  textAlign: 'center',
}


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    } 
  }

  handleChange = (event) => {
    this.state[event.target.name] = event.target.value;
    this.setState(this.state);
  }

  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting from with values: " + this.state)
    let hasher = crypto.createHash('sha256')
    hasher.update(this.state.password)
    this.state.password = hasher.digest('hex')
   
    return axios({
      method: 'post',
      url: signupUrl,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(this.state)});
  }

  render() {
    return (
      <div name='outer' style={outer}>
        <div name='form' style={form}>
          <h1> Register </h1>
          <div>
            <input name="firstName"
              type="text" 
              placeholder='First Name'
              value={this.state.firstName} 
              style={inputBox}
              onChange={this.handleChange} />
          </div>
          
          <div>
            <input name="lastName"
              type="text" 
              placeholder='Last Name'
              value={this.state.lastName} 
              style={inputBox}
              onChange={this.handleChange}/>
          </div>

          
          <div>
            <input name='email'
              type='email'
              placeholder='Email Address'
              value={this.state.email} 
              style={inputBox}
              onChange={this.handleChange}/>
          </div>
          
          <div>
            <input name="password"
              type="password" 
              placeholder='Password'
              value={this.state.password} 
              style={inputBox}
              onChange={this.handleChange}/>
          </div>

          <Button callback={this.handleSubmit} text="Submit" />
        </div>
      </div>
    );
  }
}

export default SignupForm;
