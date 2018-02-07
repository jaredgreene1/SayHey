const contactRoutes = require('./contact_routes.js');

module.exports = (app, db) => {
  console.log("found it");
  contactRoutes(app, db);
};
