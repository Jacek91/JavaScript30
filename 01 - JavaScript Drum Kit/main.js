window.addEventListener("keydown", function(evt) {
  let audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

let keys = document.querySelectorAll(".key");
keys.forEach(function(key) {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(evt) {
  if (evt.propertyName !== "transform") {
    return;
  } else {
    this.classList.remove("playing");
  }
}
