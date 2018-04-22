const mysql = require('promise-mysql')
const config = require('./config').db


function runQuery(query, values) {
  return new Promise((resolve, reject) => {
    mysql.createConnection(config).then( (con) => {
      con.query(query, values).then( result => {
        resolve(JSON.parse(JSON.stringify(result))) //hackey cast from RowDataPackets to objects 
        con.end()
      });
    });
  });
}


function createContact(userId, data) {
  const query = 'INSERT INTO Contacts (userId, firstName, lastName, interests, proximity) VALUES (?)'
  const values = [userId, data.firstName, data.lastName, data.interests, data.proximity]
  return runQuery(query, [values]);
}

function readContactsByUserId(userId) {
  console.log('start read userid db function')
  const query = 'SELECT * from Contacts WHERE userId = ? AND deleted_at is NULL'  
  return runQuery(query, [userId])
}

function updateContact(data) {
  const query = 'UPDATE Contacts SET ? WHERE ?' 
  const values = [data, {id: data.id}]
  return runQuery(query, values);
}

function deleteContact(data) {
  const query = 'UPDATE Contacts SET deleted_at = NOW() WHERE id = ?' 
  return runQuery(query, data.id);
}

function createCommEvent(data) {
  const query = 'INSERT INTO CommunicationEvents (date, description, contactID) VALUES (?)' 
  const values = [data.comEvent.date, data.comEvent.description, data.contactInfo.id]
  return runQuery(query, [values])
}

function readContactEventsByContactId(contactID) {
  const query = 'SELECT * FROM CommunicationEvents WHERE contactID = ? ORDER BY date DESC'  
  return runQuery(query, [contactID]);
}

//************* User queries ********************

function createUser(data) {
  const query = 'INSERT INTO Users (firstName, lastName, email, password, salt) VALUES (?)'
  const values = [data.firstName, data.lastName, data.email, data.password, data.salt]
  return runQuery(query, [values]);
}

function readUserData(email) {
  const query = 'SELECT * from Users WHERE email = ? AND deleted_at is NULL'  
  return runQuery(query, [email])
}

module.exports = {
  createContact,
  readContactsByUserId,
  updateContact,
  createCommEvent,
  readContactEventsByContactId,
  deleteContact,
  createUser,
  readUserData
}
