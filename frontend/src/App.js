import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './NavBar';
import ContactList from './ContactList';
import DashboardList from './DashboardList';
import SignupForm from './UserAuth/SignupForm';
import Login from './UserAuth/Login';

function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
      ? <Component {...props} {...rest} />
      : <Redirect to='/login' /> } />
    )
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null
    }
  } 
  setCurrentUser = (user) => {
    if(user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <AuthenticatedRoute 
          exact 
          path='/' 
          authenticated={this.state.authenticated}
          component={DashboardList} />
        <Route exact path='/contacts' component={ContactList} />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path='/login' render={(props) => {
          return <Login setCurrentUser={this.setCurrentUser}/>
        }}/>
      </div>
    );
  }
}
export default App;
