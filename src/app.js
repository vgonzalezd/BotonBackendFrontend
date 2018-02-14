const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./api/routes');
const path = require('path');

module.exports = function() {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '/views'));
  app.use(express.static(__dirname + '/public'));

  app.use('/', routes);

  app.listen(config.server.port);

  console.log('Server is not Running!');
  console.info('Host: ' + config.server.host);
  console.info('Port: ' + config.server.port);
}
