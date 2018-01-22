import React from 'react';

import ContactInput from './ContactInput';
import ContactList from './ContactList';


class ContactMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ContactInput />
        <ContactList />
      </div>
    );
  }
}
export default ContactMain;
