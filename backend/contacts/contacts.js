const path = require('path');
const fs = require('fs');

const db = require('../db/db.js')

function create(userId, data, cb) {
  db.createContact(userId, data, result => cb(result))
}

function readByUserId(userId, cb) {
  db.readContactsByUserId(userId, result => cb(result)) 
}


function getRipeContacts() {
  //Ripe contacts are contacts that it is time to reach out to
  const contacts = getContacts()
  var ripeContacts = {} 

  Object.keys(contacts).map(
    id => {
      const lastContact = 10
      if (contacts[id].proximity * lastContact > 50)
        ripeContacts[id] = contacts[id]
    });
  return ripeContacts;

};

exports.create = create  
exports.readByUserId = readByUserId
