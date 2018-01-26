import React from 'react';
import { Route } from 'react-router-dom';

import PageHeader from './Header';
import ContactInput from './ContactInput';
import ContactList from './ContactList';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader />
        <Route path='/contactform' component={ContactInput} />
        <Route path='/contacts' component={ContactList} />
      </div>
    );
  }
}
export default App;

