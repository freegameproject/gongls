var express = require('express');
var router = express.Router();
var db=require('../package/db.js');
var site=require('../package/site.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello Api');
});
router.post('/postMsg', function(req, res, next) {
  var postMsg_name=req.body.postMsg_name;
  var postMsg_text=req.body.postMsg_text;
  var postMsg_url=req.body.postMsg_url;
  var postMsg_email=req.body.postMsg_email;
  var time=Date.parse(new Date());
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


  db.add('postMsg',{
      ip:ip,
      time:time,
      postMsg_name:postMsg_name,
      postMsg_text:postMsg_text,
      postMsg_url:postMsg_url,
      postMsg_email:postMsg_email
    },function(x){
      res.json(x);

  });
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
