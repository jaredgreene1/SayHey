const contacts = require('../contacts.js')

const baseUrl = '/contacts'

const USER_ID = 1

module.exports = (app, db) => {

  app.post(baseUrl + '/create', function (req, res){
    console.log("Request received on route '/contacts/create'");
    contacts.create(USER_ID, req.body).then(result => res.send(result));
  });

  app.get(baseUrl + '/read', function (req, res){
    console.log("Request received on route '/contacts/read'");
    contacts.readByUserId(USER_ID).then(result => res.send(result))
  });

  app.post(baseUrl + '/update', function (req, res){
    console.log("Request received on route '/contacts/update'");
    contacts.update(req.body).then(result => res.send(result));
  });

  app.post(baseUrl + '/delete', function (req, res){
    console.log("Request received on route '/contacts/delete'");
    contacts.del(req.body).then(result => res.send(result));
  });

  app.get(baseUrl + '/ripe', function (req, res){
    console.log("Request received on route '/contacts/ripe'");
    contacts.getRipeContacts(USER_ID).then(result => res.send(result));
  })

  app.post(baseUrl + '/logComm', function (req, res){
    console.log("Request received on route '/contacts/logComm'");
    contacts.logComm(req.body).then(result => res.send(result));
  });

};


