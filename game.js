window.onload = function () {
  var testPlayer = new Player(1, Player.views.NORTH);
  testPlayer.takeItem("key");
  console.log(testPlayer.inventory.bar);
  testPlayer.takeItem("shovel");
  console.log(testPlayer.inventory.bar);
  testPlayer.dropItem(1);
  console.log(testPlayer.inventory.bar);
  var back = document.getElementById("back");
  back.onclick = function () {
    window.location.href = "main.html";






  }

  

  // These are the right and left arrows' funcitonality
  var left = document.getElementById("leftArrow");
  left.onclick = function () {
    alert("left");
  }
  var right = document.getElementById("rightArrow");
  right.onclick = function () {
    alert("right");
  }

  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
      if (x < 0) { x = 0; }
      if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
      if (y < 0) { y = 0; }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  // Initiate zoom effect:
  imageZoom("myimage", "myresult");

  // Timer
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 300;
  const ALERT_THRESHOLD = 60;

  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };

  const TIME_LIMIT = 1800;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
         "
       ></path>
     </g>
   </svg>
   <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
  </div>
  `;

  startTimer();

  function onTimesUp() {
    clearInterval(timerInterval);
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }



};

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


    //Get modal object
    

    
    document.addEventListener('DOMContentLoaded', function(){

      
      document.getElementById("chest").addEventListener('click', function () {
        document.getElementById("theModal").style.display = "block";        
      });

      document.getElementById("theClose").addEventListener('click', function(){
        document.getElementById("theModal").style.display = "none";  
      })

     
    });

    function safeCode(){
      var decipher = document.getElementById("thechest").value;

      if (decipher == "abcd") {
        window.location.href = "hallway.html";
      }
      else if (decipher === null || decipher === '') {
        document.getElementById("chest").src == "tresurechest.png";
      }
      else {
        var alarmSound = new sound("prisonAlarm2.m4a");
        alarmSound.play();
        window.alert("Wrong code!!!")
        //document.getElementById("chest").src == "tresurechest.png";
      }

    }


    

/*
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
        else if (combinationCode === null || combinationCode === '') {
          document.getElementById("phone").src == "https://www.seekpng.com/png/detail/109-1097611_drawing-of-a-flip-phone-cell-phone-clipart.png";
        }
        else {
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
}*/




/*
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("someimage").addEventListener('click', function () {
    document.getElementById("someimage").style.display = 'none';
  });
});*/







