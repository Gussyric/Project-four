var main = function() {
    var muted = false;
    var player = $('#player')[0];
 
  $('#play').click(function(){
      $('#message').text("Playing track");
      $('#player').trigger("play");
  });

  $('#Pause').click(function(){
      $('#message').text("Track paused");
      $('#player').trigger("pause");
  });

  $('#Mute').click(function(){
   muted = !muted

   if (muted) {
    $('#message').text("Track muted")
   } else{
    $('#message').text("Track unmuted")
   } 
   $('#player').prop("muted", muted)
})

  $('#Stop').click(function(){
        $('#message').text("Track stopped");
        $('#player').trigger("pause");
        $('#player').prop("currentTime", 0);
    });

  $('#Volume_Up').click(function(){
          var volume = $('#player').prop('volume');
          if (volume < 1) {
              volume += 0.2;
              if (volume > 1) volume = 1; 
              $('#player').prop('volume', volume);
              $('#message').text("Volume up: " + (volume * 100) + "%");
          }
      });

      $('#Volume_Down').click(function(){
          var volume = $('#player').prop('volume');
          if (volume > 0) {
              volume -= 0.2;
              if (volume < 0) volume = 0; 
              $('#player').prop('volume', volume);
              $('#message').text("Volume down: " + (volume * 100) + "%");
          }
      });
}

$(document).ready(main);


