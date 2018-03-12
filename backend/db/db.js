var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "touchpoint",
  database: "touchpoint"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Database connection establish");
});

function createContact(userId, data, cb) {
  const query = 'INSERT INTO Contacts (userId, firstName, lastName, interests, proximity) VALUES (?)'
  const values = [userId, data.firstName, data.lastName, data.interests, data.proximity]

  con.query(query, [values], function (err, result) {
    if (err) throw err;
    console.log(result)
    cb(result)
  })
}

function readContactsByUserId(userId, cb) {
  console.log("readContactsByUserId for user " + userId);
  const query = 'SELECT * from Contacts WHERE userId = ? AND deleted_at is NULL'  
  con.query(query, [userId], function (err, result) {
    if (err) throw err;
    cb(result);
  });
}

function updateContact(data, cb) {
  console.log(data)
  const query = 'UPDATE Contacts SET ? WHERE ?' 
  const values = [data, {id: data.id}]
  con.query(query, values, function (err, result) {
    if(err) throw err;
    cb(result);
  });
}

function deleteContact(data, cb) {
  console.log(data)
  const query = 'UPDATE Contacts SET deleted_at = NOW() WHERE id = ?' 
  con.query(query, data.id, function (err, result) {
    if(err) throw err;
    cb(result);
  });
}

function createCommEvent(data, cb) {
  const query = 'INSERT INTO CommunicationEvents (date, contactID) VALUES (?)' 
  const values = [data.comEvent.date, data.contactInfo.id]
  con.query(query, [values], function (err, result) {
    if(err) throw err;
    cb(result);
  });
}

function readCommEventsByContactId(contactID, cb) {
  const query = 'SELECT * FROM CommunicationEvents WHERE contactID = ?'  
  con.query(query, [contactID], function (err, result) {
    if(err) throw err;
    cb(result);
  });
}


exports.createContact = createContact
exports.readContactsByUserId = readContactsByUserId 
exports.updateContact = updateContact
exports.createCommEvent = createCommEvent 
exports.readCommEventsByContactId = readCommEventsByContactId 
exports.deleteContact = deleteContact 

