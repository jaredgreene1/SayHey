const path = require('path');
const fs = require('fs');

const db = require('../db/db.js')

function create(userId, data) {
  db.createContact(userId, data)
}

function readByUserId(userId, cb) {
  console.log("contacts.js: read()")
  db.readContactsByUserId(userId, function(result){
    console.log("returning data:")
    console.log(result);
    cb(result); 
  })
}

/*
function getContacts() {
  var contactData = {};
  files = fs.readdirSync(contactPath);
  console.log("Loading contact files: "); 
  console.log(files); 
 
  contactData = files.reduce(function(dataList, file){
    data = JSON.parse(fs.readFileSync(path.join(contactPath,file)));
    dataList[data.uuid] = data;
    console.log("Loading contact data: "); 
    console.log(data);
    return dataList;
  }, {});
  return contactData;
};


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

exports.getContacts = getContacts 
exports.getRipeContacts = getRipeContacts
*/

exports.create = create  
exports.readByUserId = readByUserId
