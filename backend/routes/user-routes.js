const users = require('../users/users.js')

module.exports = (app, db) => {

  app.post('/signup', function (req, res){
    console.log("Request received on route '/signup'");
    console.log(req.body);
    users.create(req.body)
    res.send('got all your shit duude' + req.body);
  });
}
