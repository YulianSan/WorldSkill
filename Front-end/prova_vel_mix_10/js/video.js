const videoPrincipal = document.querySelector('.principal video');
const principal = document.querySelector('.video');
const controler_play = document.getElementsByClassName('play')[0];
const controler_pause = document.getElementsByClassName('pause')[0];
const controler_tempo = document.getElementsByClassName('tempo')[0];
const controler_volume = document.getElementsByClassName('volume')[0];
const controler_muted = document.getElementsByClassName('muted')[0];
const controler_tela_full = document.getElementsByClassName('tela-cheia')[0];
const controler_tela_min = document.getElementsByClassName('tela-normal')[0];
const time_line = document.getElementsByClassName('exibi-tempo')[0];
var videoTime;

principal.addEventListener('mouseenter', showControles);
principal.addEventListener('mouseleave', hiddenControles);
controler_play.addEventListener('click', play);
controler_pause.addEventListener('click', pause);
controler_volume.addEventListener('click', mute);
controler_muted.addEventListener('click', volume);
controler_tela_full.addEventListener('click', fullScreen);
controler_tela_min.addEventListener('click', exitFullScreen);

function showControles(){
    console.log("oi")
    principal.classList.remove('hidden-control');
}

function hiddenControles() {
    console.log("t")
    if(!videoPrincipal.paused)
        principal.classList.add('hidden-control');
}
function play() {
    videoPrincipal.play();

    controler_play.classList.add('hidden');
    controler_pause.classList.remove('hidden');

    videoTime = setInterval(timeLine, 100);
}

function pause() {
    videoPrincipal.pause();
    controler_play.classList.remove('hidden');
    controler_pause.classList.add('hidden');
    clearInterval(videoTime);
}
function fullScreen() {
    principal.classList.add('fullscreen');
}
function timeLine() {
    let porVideo = (videoPrincipal.currentTime/ videoPrincipal.duration) * 100;

    if(porVideo >= 100) {
        clearInterval(videoTime);
        return;
    }
    time_line.style.width = porVideo + '%';
}
function mute() {
    videoPrincipal.volume = 0;

    controler_volume.classList.add('hidden');
    controler_muted.classList.remove('hidden');
}

function volume(){
    videoPrincipal.volume = 1;

    controler_volume.classList.remove('hidden');
    controler_muted.classList.add('hidden');
}

function fullScreen() {
    controler_tela_full.classList.add('hidden');
    controler_tela_min.classList.remove('hidden');
    principal.classList.add('fullscreen');

    if (!document.fullscreenElement &&    
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
  }

  function exitFullScreen() {
    controler_tela_full.classList.remove('hidden');
    controler_tela_min.classList.add('hidden');
    principal.classList.remove('fullscreen');

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
  }
