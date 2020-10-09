window.onload = function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var tutorial = document.getElementById("tut");

    var play = document.getElementById("play");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    tutorial.onclick = function () {
        modal.style.display = "block";
    }

    play.onclick = function() {
        window.location.href = "game.html";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
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

      var mainSound = new sound("Mainsong.m4a");

      document.body.addEventListener("mousemove", function () {
        mainSound.play()
    });

};
