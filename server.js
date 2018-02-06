const express = require('express');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const userData = require('./user-data.js');

const app = express();
app.use(bodyParser.json());


const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


app.post('/contact-data/upload', function (req, res){
  console.log("Request received on route '/contact-data/upload'");
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


