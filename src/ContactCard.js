import React from 'react';

import EditButton from './EditButton.js';

const hoverStyle = {
  width: "250px",
  width: "300px",
  padding: "20px",
  background: "#FFCD42",
  borderRadius: "25px",
  margin: "10px"
}


const unhoverStyle = {
  width: "250px",
  width: "300px",
  padding: "20px",
  background: "#CFAE53",
  borderRadius: "25px",
  margin: "10px"
}

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
    this.onHover = this.onHover.bind(this);
    this.onUnhover = this.onUnhover.bind(this);
    this.getStyle = this.getStyle.bind(this);
  };

  onHover() {
    this.setState({hovered: true});
  }

  onUnhover() {
    this.setState({hovered: false});
  }

  getStyle() {
    return this.state.hovered ? hoverStyle : unhoverStyle;
  }



  render() {
    return (
      <div className="contact-card" onMouseOut={this.onUnhover} onMouseOver={this.onHover} style={this.getStyle()}>
        <EditButton /> 
        <label className="name">
          <em style={{fontWeight:"bold"}}> Name: </em> 
          {this.props.contactInfo['name']}
        </label>
        <br />

        <label>
          <em style={{fontWeight:"bold"}}> Email address: </em> 
          {this.props.contactInfo['email']} 
        </label>
        <br/>

        <label>
          <em style={{fontWeight:"bold"}}> Phone number: </em> 
          {this.props.contactInfo['phoneNumber']} 
        </label>
        <br />

        <label>
          <em style={{fontWeight:"bold"}}> Contact frequency: </em> 
          {this.props.contactInfo['contactFrequency']} 
        </label>
        <br />

      </div>
    );
  }
}

export default ContactCard;
