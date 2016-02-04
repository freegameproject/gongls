$(document).ready(function(){
  var width = window.innerWidth-40;
  var height = window.innerHeight;
  canvas = document.getElementById('canvas');
  canvas.width = width;
  canvas.height = width;
  canvas.style.width = canvas.width + "px";
  canvas.style.height = canvas.height + "px";

  c = canvas.getContext('2d');
  $('#canvas').css('border','solid 5px rgba(0,0,0,0.1)');
  $('.ui-content').css('textAlign','center');
  $('#canvas').css('margin','auto');
  $('#canvas').css('borderRadius','50%');

  $('.ui-title').css('width','100%');
  $('.ui-title').css('margin','0');

  var now=new Date();
  var year=now.getFullYear();
  var month=now.getMonth()+1;
  var day=now.getDate();
  var hours=now.getHours();
  var minutes=now.getMinutes();
  var seconds=now.getSeconds();

  var d=8-day;

  setInterval(function(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillStyle = "#ff0000";
    c.font = canvas.width+"px Courier New";
    c.fillText(d,canvas.width/2,canvas.width/2,canvas.width);
  },50);
});
