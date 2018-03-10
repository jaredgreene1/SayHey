const contacts = require('../contacts.js')

const baseUrl = '/contacts'

const USER_ID = 1

module.exports = (app, db) => {
  app.post(baseUrl + '/create', function (req, res){
    console.log("Request received on route '/contacts/create'");
    console.log(req.body);
    contacts.create(USER_ID, req.body);
    res.send("Contact information uploaded!");
  });

  app.get(baseUrl + '/read', function (req, res){
    console.log("Request received on route '/contacts/read'");
    contacts.readByUserId(USER_ID, function(result) {
      res.send(result);
    });
  });

  app.get('/contact-data/load', function (req, res){
    console.log("Request received on route '/contact-data/load'");
    //const contactData = contacts.getContacts();
    //res.send(contactData);

  });
  
  app.get('/contact-data/ripe-contacts', function (req, res){
    console.log("Request received on route '/contact-data/ripe-contacts'");
    //const contactData = contacts.getRipeContacts();
    //res.send(contactData);
  })
};


