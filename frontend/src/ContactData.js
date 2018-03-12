import React from 'react';
import ContactInput from './ContactInput.js';
import { EditButton } from './Buttons.js';

const hover = {
  background: "#d1e3f3",
  maxWidth: "700px",
  padding: "20px",
  borderRadius: "25px",
  margin: "10px"
}


const unhover = {
  background: "#8ac1f1",
  maxWidth: "700px",
  padding: "20px",
  borderRadius: "25px",
  margin: "10px"
}


const name = {textAlign: "center",}


class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false, expanded: false};
  };

  onHover = () => this.setState({hovered: true});
  onUnhover = () => this.setState({hovered: false});
  getStyle = () => this.state.hovered ? hover: unhover;
 


  render() {
    return (
      <tr className="contact-card" onMouseOut={this.onUnhover} onMouseOver={this.onHover} style={this.getStyle()}>
        <td> {this.props.contactInfo['firstName']} {this.props.contactInfo['lastName']} </td>
        <td> <EditButton contactInfo={this.props.contactInfo} /> </td>
      </tr>
    );
  }
}

export default ContactCard;
