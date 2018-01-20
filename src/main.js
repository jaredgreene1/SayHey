console.log('Hello World!');

import React from 'react';
import ReactDOM from 'react-dom';
import ContactMain from './ContactMain';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(ContactMain),
    document.getElementById('mount')
  );
});
