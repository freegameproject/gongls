var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('test');
});

router.get('/1', function(req, res, next) {
  res.render('test/1',{title:'测你在哪个阶层生活能如鱼得水？'});
});

router.get('/2', function(req, res, next) {
  res.render('test/2',{title:'你第一眼看到哪处不同？准到爆！'});
});

module.exports = router;
