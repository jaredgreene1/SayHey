const path = require('path');
const fs = require('fs');

const db = require('../db/db.js')

function create(userId, data, cb) {
  db.createContact(userId, data, result => cb(result))
}

function readByUserId(userId, cb) {
  db.readContactsByUserId(userId, result => cb(result)) 
}

function update(data, cb) {
  db.updateContact(data, result => cb(result)) 
}


function getRipeContacts(userId, cb) {
  db.readContactsByUserId(
    userId, result => cb(result.filter(contact => contact.proximity > 5))
  )
};

function logComm(data, cb) {
  console.log(data)
  db.createCommEvent(data, result => cb(result))
};

exports.create = create  
exports.readByUserId = readByUserId
exports.update = update
exports.getRipeContacts = getRipeContacts
exports.logComm = logComm
