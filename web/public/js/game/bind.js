$(document).ready(function(){
  gameinit();
});
$(document).on("pageshow","#page_gamestart",function(){ // 当进入页面二时
  //game_start
  gamestart();
});
$(document).on("pageshow","#page_gameover",function(){
  //gameover
  gameover();
});
