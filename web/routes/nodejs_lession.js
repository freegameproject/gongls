var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1', function(req, res, next) {
  res.send('lession one');
});

module.exports = router;
