import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import ContactList from './ContactList';
import DashboardList from './DashboardList';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route path='/contacts' component={ContactList} />
        <Route path='/dashboard' component={DashboardList} />
      </div>
    );
  }
}
export default App;

