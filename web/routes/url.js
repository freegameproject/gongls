var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.send('');
});
router.get('/reload/:url', function(req, res, next) {
  var url=req.params.url;
  url=url.replace('http://','');
  url='http://'+url;
  res.render('url_reload.jade',{url:url});
});
module.exports = router;
