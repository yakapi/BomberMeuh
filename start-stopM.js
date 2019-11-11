let play_pause = document.getElementById('ps');
var myAudio = document.getElementById("gamemusic");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
    play_pause.src = "img/musicPlayStop/play.gif";
  } else {
    myAudio.play();
    play_pause.src = "img/musicPlayStop/stop.gif";
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
setTimeout(function(){
  togglePlay();
},2000)
