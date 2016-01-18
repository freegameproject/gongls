var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('test');
});

router.get('/1', function(req, res, next) {
  res.render('test/1',{title:'测你在哪个阶层生活能如鱼得水？'});
});

module.exports = router;
