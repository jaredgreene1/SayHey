import React from 'react';
import axios from 'axios';
import crypto from 'crypto';
import { Link } from 'react-router-dom';


import { Button } from '../Buttons';
import { loginUrl } from '../../endpoints';


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


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let hasher = crypto.createHash('sha256')
    hasher.update(this.state.password)
    this.state.password = hasher.digest('hex')
   
    return axios({
      method: 'post',
      url: loginUrl,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(this.state)}).then( res => {
        console.log("data came back")
        this.props.setCurrentUser(res.data);
      });
  };

  render() {
    return (
      <div name='outer' style={outer}>
        <div name='form' style={form}>
          <h1> Login </h1>
          
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
          <Button callback={this.handleSubmit} text="Login" />
        </div>
      </div>
    );
  }
}

export default Login;
