var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var title='gongls';
  if(req.host.indexOf('zhangmani.com')!=-1){
    res.render('zhangmani/index', { title: '张玛妮' });
  }else if(req.host.indexOf('kunchongzhi.com')!=-1){
    res.render('kunchongzhi/index', { title: '昆虫志' });
  }else{
    res.render('index', { title: 'gongls' });
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
