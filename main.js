
$(document).ready(function(){
  for(var i = 0;i<60;i++){
    $('.clock').append('<div class="seconds" />');
  }

  for(var i = 0;i<12;i++){
    $('.clock').append('<div class="seconds_indicator" />');
  }

  var deg = 264;
  for(var i = 1;i<61;i++){
    deg=deg+6;
    $('.seconds:nth-child('+i+')').css({
      '-webkit-transform' : 'rotate('+deg+'deg) translatex(41vh)',
      'opacity' : '0.1'
    });
  }
  deg = 0;
  for(var i = 60;i<73;i++){
    deg=deg+30;
    console.log(i);
    $('.seconds_indicator:nth-child('+i+')')
      .css('-transform', 'rotate('+deg+'deg) translatex(45vh)'
    );
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

    var _time = ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
    var _date = ("0" + d.getDate()).slice(-2) + '.' + ("0" + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    $('.time').text(_time);
    $('.date').text(_date);
  },1000);
});
