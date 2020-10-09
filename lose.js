window.onload = function() {
    document.body.style.backgroundImage = "url('electric.jpg')";
    document.getElementById("return").onclick = function() {
        window.location.href = "main.html";
    }

    // had to put it in an event cause chrome does not like playing sounds on page load
    var alarmSound = new sound("buzz.ogg");
    alarmSound.play();
    document.body.onclick = function() {
        alarmSound.play();
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    }
    this.stop = function () {
      this.sound.pause();
    }
  }