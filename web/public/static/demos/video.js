$(document).ready(function(){
  $('.check_video').on('tap',function(){
    video_check();
  });
});

function video_check(){
  $("video").each(function(){
    if(!$(this)[0].paused){
      $('.msg').text('正在播放');
    }else{
      $('.msg').text('没有播放');
    }
  });
}
