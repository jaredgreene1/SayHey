const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const userData = require('./user-data.js');

const app = express();



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
  res.send("Contact information uploaded!");
});

app.get('/load-contacts', function (req, res){
  console.log("Request received on route '/contact-data'");
  const contactData = userData.loadContacts();
  console.log("LOADED INFO");
  console.log(contactData);
  res.send(contactData);

});


