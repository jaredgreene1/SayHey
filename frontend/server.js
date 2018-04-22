const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

app.use(bodyParser.json());
//require('./routes')(app, {});


const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./www/index.html'))
})

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
  console.log('Touchpoint listening at http://%s:%s', host, port);
});



