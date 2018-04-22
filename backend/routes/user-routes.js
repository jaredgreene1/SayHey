const users = require('../users/users.js')

module.exports = (app, db) => {

  app.post('/signup', function (req, res){
    console.log("Request received on route '/signup'");
    console.log(req.body);
    users.create(req.body)
    res.send('got all your shit duude' + req.body);
  });
  
  app.post('/login', function (req, res){
    users.validate(req.body).then(userId => {
      if (userId === null)
        res.status(401)
      res.send({userId: userId})
    });
  });
}
