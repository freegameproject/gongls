var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('demo');
});
router.get('/video_ctrl', function(req, res, next) {
  res.render('demos/demo_video',{title:'检测视频状态'});
});

router.get('/bj', function(req, res, next) {
  var now=new Date();
  var year=now.getFullYear();
  var month=now.getMonth()+1;
  var day=now.getDate();
  var hours=now.getHours();
  var minutes=now.getMinutes();
  var seconds=now.getSeconds();

  var d=8-day;

  res.render('demos/bj',{title:'距离首都回到北京还有'+d+'天'});
});


module.exports = router;
