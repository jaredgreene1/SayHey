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

function createContact(userId, data) {
  const query = 'INSERT INTO Contacts ' +
                  '(userId, firstName, lastName, interests, proximity) ' + 
                  'VALUES (?)'
  const values = [userId, data.firstName, data.lastName, data.interests, data.proximity]

  con.query(query, [values], function (err, result) {
    if (err) throw err;
    console.log(result)
  })
}

function readContactsByUserId(userId, cb) {
  console.log("readContactsByUserId for user " + userId);
  const query = 'SELECT * from Contacts WHERE  userId = ?'  
  con.query(query, [userId], function (err, result) {
    if (err) throw err;
    cb(result);
  });
}

exports.createContact = createContact
exports.readContactsByUserId = readContactsByUserId 



