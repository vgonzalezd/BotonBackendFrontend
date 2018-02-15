/* Importo las librerias que necesita la aplicacion
 backend
*/
const express = require('express');
const app = express();
  //deja usar middlewares
const bodyParser = require('body-parser');
const path = require('path');

// Configuracion, devulve el index
const config = require('./config');
// Rutas
const routes = require('./api/routes');

//Si en algun momento alguien me importa le digo que soy una funcion que inicia un servidor
module.exports = function() {
  // Para poder procesar peticiones POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Defino el motor de plantillas
    //PARA CAMBIARLO A BOOTSTRAP? procesa info (lo convierte de ejs a html)
  app.set('view engine', 'ejs');

  // Defino donde estan las vistas y los assets
  app.set('views', path.join(__dirname, '/views'));
  app.use(express.static(__dirname + '/public'));
  //cUANDO NECESITE INFO ESTATICA BUSQUELA DESDE PUBLIC (css-estilos e imagenes)

  // Importo las vistas desde el archivo de rutas y presento mi front principal
  app.use('/', routes);
  //

  // Corro el servidor sobre el puerto configurado
    //config.server eso es un objeto??? Donde lo inicializé?
  app.listen(config.server.port);

  console.log('Server is not Running!');
    //No se supone que si estaba corriendo?
  console.info('Host: ' + config.server.host);
  console.info('Port: ' + config.server.port);
}
