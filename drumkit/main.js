// jshint esversion:6
// alert("I'm here!!");

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop from running audio
  audio.currentTime = 0;
  audio.play();
  console.log(audio);
});