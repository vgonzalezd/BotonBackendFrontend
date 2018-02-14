const express = require('express');
const router = express.Router();
const actionCtrl = require('./controllers/action');

router.get('/', function(req, res) {
  return res.render('index');
});

router.post('/action', actionCtrl.postAction);

module.exports = router;
