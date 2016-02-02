var express = require('express');
var router = express.Router();
var db=require('../package/db.js');
var site=require('../package/site.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello Api');
});
router.get('/viewCount', function(req, res, next) {
  var time=Date.parse(new Date());
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  db.add('view',{ip:ip,time:time},function(){

  });
  db.getCount('view',function(v){
    res.json({count:v});
  });
});

module.exports = router;
