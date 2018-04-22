const contactRoutes = require('./contact-routes.js');
const userRoutes = require('./user-routes.js');

module.exports = (app, db) => {
  contactRoutes(app, db);
  userRoutes(app, db);
};
