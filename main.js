
$(document).ready(function(){
  for(var i = 0;i<60;i++){
    $('.clock').append('<div class="seconds" />');
  }

  var deg = 264;
  for(var i = 1;i<61;i++){
    deg=deg+6;
    $('.seconds:nth-child('+i+')').css({
      '-webkit-transform' : 'rotate('+deg+'deg) translatex(45vh)',
      'opacity' : '0.1'
    });
  }

  var t = setInterval(function(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    for(var i = 1;i<=s+1;i++){
      if(s===0){
        $('.seconds').css({
          'opacity' : '0.1'
        });
      }
      $('.seconds:nth-child('+i+')').css({
        'opacity' : '1'
      });
    }

    if(h<10){
      h = '0' + h;
    }

    if(m<10){
      m = '0' + m;
    }
    if(s<10){
      s = '0' + s;
    }
    var time = h + ":" + m + ":" + s;
    $('.time').text(time);
  },1000);
});
