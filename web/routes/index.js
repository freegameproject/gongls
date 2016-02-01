var express = require('express');
var router = express.Router();
var db=require('../package/db.js');
var site=require('../package/site.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.host.indexOf('zhangmani.com')!=-1){
    res.render('zhangmani/index', { title: site.title.z });
  }else if(req.host.indexOf('kunchongzhi.com')!=-1){
    res.render('kunchongzhi/index', { title: site.title.k });
  }else{
    res.render('index', { title: site.title.g });
  }
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/reg', function(req, res, next) {
  res.render('reg', { title: 'reg' });
});

router.get('/iphone', function(req, res, next) {
  res.render('iphone', { title: 'reg' });
});

module.exports = router;
