var audio = {
    musica: null,
    pista1: "audio/393818_sirkoto51_retro-game-overworld-loop-1.mp3", //https://freesound.org/people/Sirkoto51/sounds/393818/
    reproducir: function(rutaPista) {
        if(audio.musica != null) {
            audio.musica.pause();
            audio.musica.src = "";
        }
        audio.musica = new Audio(rutaPista);
        audio.musica.play();
    }
};