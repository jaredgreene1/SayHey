import React from 'react';


const cardStyle = {
  width: "250px",
  width: "300px",
  padding: "20px",
  background: "#FFD865",
  borderRadius: "25px",
  margin: "10px"
}




class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="contact-card" style={cardStyle}>
        <label className="name">
          <text style={{fontWeight:"bold"}}> Name: </text> 
          {this.props.contactInfo['name']}
        </label>
        <br />

        <label>
          <text style={{fontWeight:"bold"}}> Email address: </text> 
          {this.props.contactInfo['email']} 
        </label>
        <br/>

        <label>
          <text style={{fontWeight:"bold"}}> Phone number: </text> 
          {this.props.contactInfo['telNumb']} 
        </label>
        <br />

        <label>
          <text style={{fontWeight:"bold"}}> Contact frequency: </text> 
          {this.props.contactInfo['contactFreq']} 
        </label>
        <br />

      </div>
    );
  }
}

export default ContactCard;
