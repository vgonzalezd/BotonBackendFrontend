/**
* routes.js
* Archivo con las rutas de la aplicacion
*/
const express = require('express');
const router = express.Router();
const actionCtrl = require('./controllers/actionCtrl');

// Home
router.get('/', function(req, res) {
  return res.render('index');
});

// Ruta que procesa las acciones enviadas por el frontend
router.post('/action', actionCtrl.postAction);

module.exports = router;
