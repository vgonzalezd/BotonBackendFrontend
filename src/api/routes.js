/**
* routes.js
* Archivo con las rutas de la aplicacion
*/
const express = require('express');
  //porque hago express.Router?
const router = express.Router();
const actionCtrl = require('./controllers/actionCtrl');

// Home
router.get('/', function(req, res) {
  //return res.send("Hola Mundo!");
  return res.render('index');
});

//LOGIN.EJS 

// Ruta que procesa las acciones enviadas por el frontend
router.post('/action', actionCtrl.postAction);

router.get('/login', function(req, res){
  return res.send("mi Ruta login");
});

module.exports = router;
