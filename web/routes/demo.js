var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('demo');
});
router.get('/video_ctrl', function(req, res, next) {
  res.render('demos/demo_video',{title:'检测视频状态'});
});

module.exports = router;
