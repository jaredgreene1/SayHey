const db = require('../db.js')

const baseUrl = '/db'

module.exports = (app, db) => {
  app.post(baseUrl + '/create', function (req, res){
    userData.createContact(req.body);
    res.send("Contact information uploaded!");
  });


  app.get(baseUrl + '/read', function (req, res){
    console.log("Request received on route '/db/read'");
    const contactData = db.getContactsByUserId();
    res.send(contactData);

  });


  app.post(baseUrl + '/update', function (req, res){
    console.log("Request received on route '/db/update'");
    userData.editContact(req.body);
    res.send("Contact information uploaded!");
  });
}
