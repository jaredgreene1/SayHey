const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
require('./contacts/routes')(app, {});


const server = app.listen(3001, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Touchpoint listening at http://%s:%s', host, port);
});



