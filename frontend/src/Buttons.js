import React from 'react';


const button = {
  display: 'flex',
  borderRadius: '10px',
  margin: '2',
  border: '0',
  padding: '7px',
  background: '#ebeeff',
  height: 'fit-content'
}


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button style={button} onClick={this.props.callback}> {this.props.text} </button>
    );
  }
}


import ContactInput from './ContactInput.js';
const editButton = {display: 'inline-block'}

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: 'edit contact'
    };
  };

  editContact = () => this.setState(prevState => ({
    editing: !prevState.editing
  }));

  render() {
    return(
			<div style={editButton}>
				<Button callback={this.editContact} text={this.state.text}/> 
				{this.state.editing ?
					<div>                                                          
						<ContactInput contactInfo={this.props.contactInfo} />                                           
					</div> : null                                                  
				} 
			</div>
    );
  }
}


import axios from 'axios';
class DeleteContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'delete contact'};
  };
  

  deleteContact = () => {
    const url = 'http://localhost:3001/contacts/delete'
    
    return axios({
      method: 'post',
      url: url,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(this.props.contactInfo)
    }).then(this.props.cb)
  }



  render() {
    return(
				<Button callback={this.deleteContact} text={this.state.text}/> 
    );
  }
}


export {
  Button,
  EditButton,
  DeleteContactButton
}
