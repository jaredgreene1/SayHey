import React from 'react';

import { Link } from 'react-router-dom';


const navBarStyle = {
  marginBottom: "20px",
  borderBottom: ".2px solid #d2dad2",
  paddingTop: "10px",
  paddingBottom: "20px",
  background:'#4682b4',
  display: 'flex'
}



const navButtonStyle = {
  marginLeft: "7px",
  marginTop: '10px',
  paddingRight: "30px",
  textDecoration: "none",
  color: '#dbe3ea'
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
          <HeaderButton path="/" label="Dashboard" />
          <HeaderButton path="/contacts" label="Contacts" />
          <HeaderButton path="/signup" label="Sign Up" />
        </nav>
      </div>
    );
  }
}

export default NavBar;
