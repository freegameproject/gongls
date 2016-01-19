var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('game');
});

router.get('/airwar', function(req, res, next) {
  res.render('game/airwar',{dir:'airwar',title:'飞机大战'});
});

module.exports = router;
