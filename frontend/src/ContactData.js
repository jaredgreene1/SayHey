import React from 'react';
import ContactInput from './ContactInput.js';
import { EditButton, DeleteContactButton } from './Buttons.js';

const hover = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  maxWidth: "500px",
  borderRadius: "15px",
  margin: "2px",
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0px 0px 0px 1pt rgb(70, 129, 180)',
}


const unhover = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  maxWidth: "500px",
  borderRadius: "15px",
  margin: "2px",
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0px 0px 0px 0.5pt rgb(70, 129, 180)',
}


const name = {
  flexGrow: "1",
  paddingLeft: '5',
}


class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  };

  onHover = () => this.setState({hovered: true});
  onUnhover = () => this.setState({hovered: false});
  getStyle = () => this.state.hovered ? hover: unhover;
 


  render() {
    return (
      <div className="contact-card" onMouseOut={this.onUnhover} onMouseOver={this.onHover} style={this.getStyle()}>
        <p style={name}> {this.props.contactInfo['firstName']} {this.props.contactInfo['lastName']} </p>
        <EditButton contactInfo={this.props.contactInfo} />
        <DeleteContactButton contactInfo={this.props.contactInfo} cb={this.props.refreshList}/>
      </div>
    );
  }
}

export default ContactCard;
