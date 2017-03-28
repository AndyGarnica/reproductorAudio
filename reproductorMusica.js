var audio=document.getElementById("audio");

function reproducir(){
audio.play();
}
function pausar(){
audio.pause();
}

function masVolumen() {
  if (audio.volume >= 0.9 ) {
    audio.volume = 1;
    alert("Volumen máximo 100%");
  } else{
    audio.volume += 0.1;
  }
}

function menosVolumen() {
  if (audio.volume <= 0.1 ) {
    audio.volume = 0;
    alert("Volumen minimo 0%");
  } else{
    audio.volume -= 0.1;
  }
}

function parar() {
  audio.load();
}

function avanzar(aumento){
  if(aumento == "+"){
    audio.currentTime += 2;
  } else{
    audio.currentTime -= 2;
  }
}

audio.ontimeupdate = function() {
    var rango = document.getElementById("progreso");
    rango.value = audio.currentTime;
};
