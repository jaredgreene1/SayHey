const userData = require('../user-data.js')


module.exports = (app, db) => {
  app.post('/contact-data/upload', function (req, res){
    console.log("Request received on route '/contact-data/upload'");
    console.log(req.body);
    userData.createContact(req.body);
    res.send("Contact information uploaded!");
  });

  app.post('/contact-data/edit', function (req, res){
    console.log("Request received on route '/contact-data/edit'");
    userData.editContact(req.body);
    res.send("Contact information uploaded!");
  });

  app.get('/contact-data/load', function (req, res){
    console.log("Request received on route '/contact-data/load'");
    const contactData = userData.loadContacts();
    res.send(contactData);

  });
};


