const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
require('./routes')(app, {});


const server = app.listen(3002, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Touchpoint listening at http://%s:%s', host, port);
});



