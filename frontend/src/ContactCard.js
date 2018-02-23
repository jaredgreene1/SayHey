import React from 'react';
import ContactInput from './ContactInput.js';
import EditButton from './EditButton.js';
import ArticleButton from './ArticleButton.js';

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
      <div className="contact-card" onMouseOut={this.onUnhover} onMouseOver={this.onHover} style={this.getStyle()}>
        <h1 style={name}> {this.props.contactInfo['name']} </h1>
        <EditButton contactInfo={this.props.contactInfo} />
        <ArticleButton contactInfo={this.props.contactInfo} />
      </div>
    );
  }
}

export default ContactCard;
