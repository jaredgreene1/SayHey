import React from 'react';


const button = {
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
const buttonText = "edit contact";
const editButton = {display: 'inline-block'}

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false};
  };

  editContact = () => this.setState(prevState => ({
    editing: !prevState.editing
  }));

  render() {
    return(
			<div style={editButton}>
				<Button callback={this.editContact} text={buttonText}/> 
				{this.state.editing ?
					<div>                                                          
						<ContactInput contactInfo={this.props.contactInfo} />                                           
					</div> : null                                                  
				} 
			</div>
    );
  }
}

export {
  Button,
  EditButton
}
