/**
* actionCtrl.js
* Controlador para procesar las peticiones de acciones
*/

/*
* POST postAction
* @input move - Movimiento solicitado por el cliente
* @return response - Respuesta al movimiento solicitado
*/
exports.postAction = function(req, res) {
  let move = req.body.move;
  console.log('This is the move: ' + move);

  let response = { result: 'This is an action: ' + move };
  return res.json(response);
};
