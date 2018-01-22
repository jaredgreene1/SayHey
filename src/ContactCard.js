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
