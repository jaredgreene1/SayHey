import React from 'react';

import { Link } from 'react-router-dom';


const navBarStyle = {
  marginBottom: "20px",
  borderBottom: ".2px solid #d2dad2",
  paddingTop: "10px",
  paddingBottom: "20px"
}



const navButtonStyle = {
  marginLeft: "0px",
  paddingRight: "30px",
  paddingTop: "10px",
  paddingBottom: "20px",
  textDecoration: "none"
}


class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  render () {
    return (
      <Link to={this.props.path} style={navButtonStyle}> {this.props.label} </Link>
    );
  }
}


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <nav style= {navBarStyle}>
          <HeaderButton path="/contactform" label="Add contact" />
          <HeaderButton path="/contacts" label="My Contacts" />
        </nav>
      </div>
    );
  }
}

export default NavBar;
