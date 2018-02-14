exports.postAction = function(req, res) {
  let move = req.body.move;
  console.log('This is the move: ' + move);

  return res.json({ result: 'This is an action: ' + move });
};
