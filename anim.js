// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ooh", time:  
  { text: "I, I just woke up from a dream", time:  
  { text: "Where you and I had to say goodbye", time: 
  { text: "And I don't know what it all means", time:  
  { text: "But since I survived, I realized", time:  
  { text: "Wherever you go, that's where I'll follow", time:  
  { text: "Nobody's promised tomorrow", time:  
  { text: "So I'ma love you every night like it's the last night", time:  
  { text: "Like it's the last night", time:  
  { text: "If the world was ending, I'd wanna be next to you", time:  
  { text: "If the party was over and our time on Earth was through", time:  
  { text: "I'd wanna hold you just for a while and die with a smile", time:  
  { text: "If the world was ending, I'd wanna be next to you", time: 
  { text: "Ooh", time:  
  { text: "Oh, lost, lost in the words that we scream", time:  
  { text: "I don't even wanna do this anymore", time: 
  { text: "Cause you already know what you mean to me", time: 
  { text: "And our love's the only war worth fighting for", time: 
  { text: "Wherever you go, that's where I'll follow", time: 
  { text: "Nobody's promised tomorrow", time: 
  { text: "So I'ma love you every night like it's the last night", time: 
  { text: "Like it's the last night", time: 
  { text: "If the world was ending, I'd wanna be next to you", time:
  { text: "If the party was over and our time on Earth was through", time: 
  { text: "I'd wanna hold you just for a while and die with a smile", time: 
  { text: "If the world was ending, I'd wanna be next to you", time: 
  { text: "Right next to you", time: 


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
