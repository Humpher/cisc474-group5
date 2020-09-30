window.onload = function () {
  var back = document.getElementById("back");
  back.onclick = function () {
    window.location.href = "main.html";
  }
};

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function changeImage() {
  //document.getElementById("phone").addEventListener('click', function () {
  //console.log("Hello");

  if (document.getElementById("phone").src == "https://www.seekpng.com/png/detail/109-1097611_drawing-of-a-flip-phone-cell-phone-clipart.png") {
    document.getElementById("phone").src = "https://thumbs.dreamstime.com/b/number-buttons-7770747.jpg";

    if (document.getElementById("phone").src == "https://thumbs.dreamstime.com/b/number-buttons-7770747.jpg") {
      document.getElementById("phone").style.width = 100;
      document.getElementById("phone").style.height = 100;

      document.getElementById("phone").addEventListener('click', function () {

        var combinationCode = prompt("Please the combination code to escape the cell: ");
        if (combinationCode == 1234) {
          window.location.href = "hallway.html";
        }
        else{
          var alarmSound = new sound("prisonAlarm2.m4a");
          alarmSound.play();

        }


      });

    }

  }
  else {
    document.getElementById("phone").src == "https://www.seekpng.com/png/detail/109-1097611_drawing-of-a-flip-phone-cell-phone-clipart.png"
    //document.getElementById("phone").style.position = fixed;
    document.getElementById("phone").style.bottom = 380;
    document.getElementById("phone").style.right = 650;
  }


};
