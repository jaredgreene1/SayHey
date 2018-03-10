var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "touchpoint"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Database connection establish");
});


// TODO Write functions that will allow data access
