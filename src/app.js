/* Importo las librerias que necesita la aplicacion */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Configuracion
const config = require('./config');
// Rutas
const routes = require('./api/routes');

module.exports = function() {
  // Para poder procesar peticiones POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Defino el motor de plantillas
  app.set('view engine', 'ejs');

  // Defino donde estan las vistas y los assets
  app.set('views', path.join(__dirname, '/views'));
  app.use(express.static(__dirname + '/public'));

  // Importo las vistas desde el archivo de rutas
  app.use('/', routes);

  // Corro el servidor sobre el puerto configurado
  app.listen(config.server.port);

  console.log('Server is not Running!');
  console.info('Host: ' + config.server.host);
  console.info('Port: ' + config.server.port);
}
