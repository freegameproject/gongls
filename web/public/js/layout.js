$(document).ready(function(){
  $.getJSON('/api/viewCount',{},function(x){
    $('#viewCount').text(x.count);
  });

  $('#postMsgPan').attr('check','yes');
  $('#postMsg_text').on('keyup',function(){
    check_post_msg_text();
  });
  function check_post_msg_text(){
    var postMsg_text=$('#postMsg_text').val();
    if(postMsg_text.length===0){
      $('#postMsg_text').css('border','solid #f00');
      $('#postMsgPan').attr('check','no');
    }else{
      $('#postMsg_text').css('border','none');
      $('#postMsgPan').attr('check','yes');
    }
  }

  $('#postMsgButton').click(function(){
    var postMsg_name=$('#postMsg_name').val();
    var postMsg_text=$('#postMsg_text').val();
    var postMsg_url=$('#postMsg_url').val();
    var postMsg_email=$('#postMsg_email').val();
    check_post_msg_text();
    if($('#postMsgPan').attr('check')==='yes'){
      $('#postMsging').show();
      $('#postMsgForm').hide();
      $.post('/api/postMsg',{
          postMsg_name:postMsg_name,
          postMsg_text:postMsg_text,
          postMsg_url:postMsg_url,
          postMsg_email:postMsg_email
        },function(x){
          console.log(x);
          setTimeout(function(){
            $('#postMsging').hide();
            $('#postMsgFinish').show();
          },3000);
      });
    }
  });

  
});
