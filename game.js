let viewMap = new Map([
  ["north", "01C_prisonCell-2.png"],
  ["east", "01E_prisonCell(up).png"],
  ["south", "01C_prisonCell-2.png"],
  ["west", "01E_prisonCell(up).png"]
]);

var pin_unlocked = false;
var pad_unlocked = false;
var julio_unlocked = false;
var julio_unlocked_2 = false;

//window.onload = function () {

  var parentElement = document.getElementById('game_objects');

  var northScreen = document.createElement('div');
  var eastScreen = document.createElement('div');
  var chestObj = document.createElement('img');
  chestObj.setAttribute('id', 'chest');
  chestObj.setAttribute('src', 'images/Chest.G02.2k.png');
  chestObj.setAttribute('width', 1100);
  chestObj.setAttribute('height', 1100);
  chestObj.addEventListener('click', function () {
    document.getElementById("theModal").style.display = "block";
    //if(temp === "roll") {
      //document.getElementById("thechest").setAttribute("value","100");
   // }
  });

  //Hammer Object
  var hammerObj = document.createElement('img');
  hammerObj.setAttribute('id', 'hammer');
  hammerObj.setAttribute('src', 'images/hammer/3.png');
  /*hammerObj.addEventListener('click', function () {
    idTag = "hammer";
    addItem(idTag);
  });*/

  //Key Object
  var keyObj = document.createElement('img');
  keyObj.setAttribute('id', 'key');
  keyObj.setAttribute('src', 'images/key/3.png');

  // Money roll Object
  var rollObj = document.createElement('img');
  rollObj.setAttribute('id', 'roll');
  rollObj.setAttribute('src', 'images/roll/3.png');
  rollObj.addEventListener('click', function () {
    idTag = "roll";
    addItem(idTag);
    displayItemPickup("Roll", "You found an item!", "images/roll/", 16);
    northScreen.removeChild(rollObj);
  });
  northScreen.appendChild(rollObj);


  // cigarettes Object
  var cigarettesObj = document.createElement('img');
  cigarettesObj.setAttribute('id', 'cigarettes');
  cigarettesObj.setAttribute('src', 'images/cigarettes/2.png');
  cigarettesObj.addEventListener('click', function () {
    idTag = "cigarettes";
    addItem(idTag);
    displayItemPickup("Cigarettes", "You found an item!", "images/cigarettes/", 16);
    northScreen.removeChild(cigarettesObj);
  });
  northScreen.appendChild(cigarettesObj);


  // Clock Object
  var clockObj = document.createElement('img');
  clockObj.setAttribute('id', 'clock');
  clockObj.setAttribute('src', 'images/clock/14.png');
  clockObj.addEventListener('click', function () {
    displayItemPickup("Retro Clock", "I better hurry up", "images/clock/", 16);
    if(temp != " ") {
      displayItemPickup("Vintage Clock", "Nothing interesting happens.", "images/clock/", 16);
    }
  });
  northScreen.appendChild(clockObj);

  // PinLock object
  var lockObj = document.createElement('img');
  lockObj.setAttribute('id', 'lock');
  lockObj.setAttribute('src', 'images/pinLock/2.png');
  document.getElementById('item-span-2').addEventListener('click', function () {
    document.getElementById('item-modal-2').style.display = "none";

  });

  lockObj.addEventListener('click', function () {
    document.getElementById('item-modal-2').style.display = "block";
  });
  eastScreen.appendChild(lockObj);

  // piggyBankObj object
  var piggyBankObj = document.createElement('img');
  piggyBankObj.setAttribute('id', 'piggyBank');
  piggyBankObj.setAttribute('src', 'images/piggyBank/0.png');
  piggyBankObj.addEventListener('click', function () {
    if(temp === "hammer") {
      displayItemPickup("Broken Piggy Bank", "You found the key! Use this for your next clue", "images/brokenPiggyBank/", 1);
      removeItem();
      idTag = "key";
      addItem(idTag);
      eastScreen.removeChild(piggyBankObj);
    } else if(temp != " ") {
      displayItemPickup("Piggy Bank", "Nothing interesting happens.", "images/piggyBank/", 16);
    } else {
      displayItemPickup("Piggy Bank", "What a cute piggy", "images/piggyBank/", 16);
    }

  });
  eastScreen.appendChild(piggyBankObj);


  // PadLock object
  var padlockObj = document.createElement('img');
  padlockObj.setAttribute('id', 'padLock');
  padlockObj.setAttribute('src', 'images/padLock/0.png');
  padlockObj.addEventListener('click', function () {
    if(temp === "key") {
      window.alert("You unlocked the padlock!")
      removeItem();
      eastScreen.removeChild(padlockObj);
      pad_unlocked = true;
      if(pin_unlocked) {
        window.location.href = "win.html";
      }
    } else if(temp != " ") {
      displayItemPickup("Pad Lock", "Nothing interesting happens.", "images/padLock/", 16);
    } else {
      displayItemPickup("Pad Lock", "You need a key to unlock this pad lock", "images/padLock/", 16);
    }
  });
  eastScreen.appendChild(padlockObj);

  // Book object
  var bookObj = document.createElement('img');
  bookObj.setAttribute('id', 'book');
  bookObj.setAttribute('src', 'images/book/0.png');
  bookObj.addEventListener('click', function () {
    displayItemPickup("Old Book", "You found an item!", "images/book/", 16);
    idTag = "book";
    addItem(idTag);
    eastScreen.removeChild(bookObj);
  });
  eastScreen.appendChild(bookObj);


  var cellMap = document.createElement('map');
  cellMap.setAttribute('name', 'cellmap');
  // Get the window that opens the modal
  var windowArea = document.createElement("area");
  windowArea.setAttribute('id', 'windowArea');
  windowArea.setAttribute('shape', 'rect');
  windowArea.setAttribute('coords', "550,130,490,240");
  // When the user clicks the window, open the modal
  windowArea.addEventListener('click', function () {
    // modal.style.display = "block";
    displayItemPickup("Julio", "Hey..I knew Mike, the guy who used to live in this cell. He got out a few weeks ago and left this box. I can help you open it if you're willing to trade.", "images/Julio/", 16);
    if(julio_unlocked_2) {
      displayItemPickup("Julio", "You're on your own from here. Sorry.", "images/Julio/", 16);
      } else if(julio_unlocked) {
    displayItemPickup("Julio", "Hurry up, kid... you ain't getting any younger. 20 shifts is all you need.", "images/Julio/", 16);
    }
    if(temp === "roll"){
    displayItemPickup("Julio", "Oh thanks, buddy. Too bad for you, this doesn't do me any good. I already swiped more than I need off these dumb prison guards", "images/Julio/", 16);
    removeItem();
    }
    if(temp === "cigarettes") {
    displayItemPickup("Julio", "Now we're talking. If you wanna bust outta here, you gotta use the 20 shifter. Good luck.", "images/Julio/", 16);
    removeItem();
    julio_unlocked = true;
    }
    if(temp === "book") {
      displayItemPickup("Julio", "Nice book, nerd. Reading ain't really my fix.", "images/Julio/", 16);
      removeItem();
    }
    if(temp === "hammer") {
      displayItemPickup("Julio", "Go ahead and knock it against your head. Might do you some good.", "images/Julio/", 16);
    }
    if(temp === "key") {
      displayItemPickup("Julio", "That's a nice key there. I bet the guards would appreciate your returning it...", "images/Julio/", 16);
    }
  });
  cellMap.appendChild(windowArea);
  northScreen.appendChild(chestObj);
  northScreen.appendChild(cellMap);


  function loadNorth() {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
    parentElement.appendChild(northScreen);
  };

  function loadEast() {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
    parentElement.appendChild(eastScreen);
  };

  function loadScreen(view) {
    if (view == 'north' || view == 'south') {
      loadNorth()
    }
    if (view == 'east' || view == 'west') {
      loadEast()
    }
    document.getElementById("myresult").style.backgroundImage = "url('" + viewMap.get(testPlayer.view) + "')";
  }

  var testPlayer = new Player(1, Player.views.NORTH);
  loadScreen(testPlayer.view);
  //testPlayer.takeItem("key");
  //console.log(testPlayer.inventory.bar);
  //testPlayer.takeItem("shovel");
  //console.log(testPlayer.inventory.bar);
  //testPlayer.dropItem(1);
  //console.log(testPlayer.inventory.bar);
  var back = document.getElementById("back");

  back.onclick = function () {
    window.location.href = "main.html";
  }


  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];




  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }



  // These are the right and left arrows' funcitonality
  var left = document.getElementById("leftArrow");
  left.onclick = function () {
    testPlayer.changeView('left');
    document.getElementById("myimage").src = viewMap.get(testPlayer.view);
    loadScreen(testPlayer.view);
  }
  var right = document.getElementById("rightArrow");
  right.onclick = function () {
    testPlayer.changeView('right');
    document.getElementById("myimage").src = viewMap.get(testPlayer.view);
    loadScreen(testPlayer.view);
  }

  // item pickup stuff
  var itemModal = document.getElementById("item-modal");
  function displayItemPickup(name, description, folder, frames) {
    itemModal.style.display = "block";
    var title = document.getElementById("item-title");
    title.innerHTML = name;
    var text = document.getElementById("item-description");
    text.innerHTML = description;
    var img = document.getElementById("item-img");
    for (var i = 0; i <= frames; i++) {
      delay(i);
    }
    function delay(i) {
      setTimeout(() => {
        img.src = folder + (i % frames).toString() + ".png";
        console.log(img.src);
      }, i * 200);
    }
  }

  //Inventory Functions
  var inventorySlot = -1;
  var inventoryButton = document.getElementById("inventory");
  inventoryButton.onclick = function () {
    var hidInv = document.getElementById("hidden-inv");
    if (hidInv.style.display === "grid") {
      hidInv.style.display = "none";
    }
    else {
      hidInv.style.display = "grid";
    }
  }



  function findItem(idTag) {
    var i;
    for (i = 0; i < testPlayer.inventory.bar.length; i++) {
      if (testPlayer.inventory.bar[i] === idTag) {
        inventorySlot = i;
      }


    }
  }

  var idThis;
  function addItem(idTag) {
    testPlayer.takeItem(idTag);
    findItem(idTag);
    console.log(testPlayer.inventory);
    document.getElementById(inventorySlot).innerHTML = `<div class = 'fill'><img id = 'inv-${idTag}' src =  'images/${idTag}/3.png' height = '40' width = '45'></div>`;
    document.getElementById("inv-" + idTag).onclick = function () { useItem(this.id) };
    idTag = " ";
    inventorySlot = -1;


  }
  var newClass;
  var temp = " "
  function useItem(idTag) {


    if (temp === " " && newClass === undefined) {
      temp = idTag.split("-")[1];
      console.log(temp);
      console.log(newClass);
      newClass = document.getElementById(idTag);
      newClass.className = "selected";
      idThis = idTag;

    }
    else if(temp === " " && newClass === document.getElementById(idTag)){
      temp = idTag.split("-")[1];
      console.log(temp);
      console.log(newClass);
      newClass = document.getElementById(idTag);
      newClass.className = "selected";
    }
    else if(newClass != document.getElementById(idTag)){
      temp = idTag.split("-")[1];
      newClass.className = idThis;
      newClass = document.getElementById(idTag);
      newClass.className = "selected";
      idThis = idTag;

    }
    else {
      newClass = document.getElementById(idTag);
      newClass.className = idTag;
      temp = " ";
    }

  }



  function removeItem() {

    findItem(temp);
    testPlayer.dropItem(inventorySlot);
    console.log(testPlayer.inventory.bar);
    if (inventorySlot != -1) {
      document.getElementById(inventorySlot).innerHTML = "";
      idTag = " ";
      inventorySlot = -1;
    }
    temp = " ";



  }


  //end of inventory functions
  var itemSpan = document.getElementById("item-span");
  itemSpan.onclick = function () {
    itemModal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == itemModal) {
      itemModal.style.display = "none";
    }
    else if (event.target == document.getElementById('item-modal-2')) {
      document.getElementById('item-modal-2').style.display = "none";

    }
  };


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
    // lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      //e.preventDefault();
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
      lens.style.left = x + 5;
      lens.style.top = y + 45;
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
  // // Initiate zoom effect:
  imageZoom("myimage", "myresult");

  // Timer functionality
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

  const TIME_LIMIT = 900;
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
    window.location.href = "lose.html";
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
//};

//Adding alarm sound function
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
//End of alarm sound function

//Accessing modal object
document.addEventListener('DOMContentLoaded', function () {


  document.getElementById("theClose").addEventListener('click', function () {
    document.getElementById("theModal").style.display = "none";
  })
});

//End of modal object access


//Function to open the treasure chest
function safeCode() {
  var decipher = document.getElementById("thechest").value;

  if (decipher == "xyunb") {
    // window.alert("Chest opened");
    document.getElementById("theModal").style.display = "none";
    document.getElementById("openchest-modal").style.display = "block";
    document.getElementById("theCloser").addEventListener('click', function () {
      document.getElementById("openchest-modal").style.display = "none"; });
      idTag = "hammer";
      addItem(idTag);
      julio_unlocked_2 = true;
  }
  else if (decipher === null || decipher === '') {
    document.getElementById("chest").src == "tresurechest.png";
    document.getElementById("theModal").style.display = "none";
  }
  else {
    var alarmSound = new sound("prisonAlarm2.m4a");
    alarmSound.play();
    window.alert("Wrong code!!!")
    //document.getElementById("chest").src == "tresurechest.png";
  }

};

//End of Safecode function

// Function to open the pin lockObj
function pinLockCode() {
  var code = document.getElementById('thePinLock').value;

  if (code == "1010") {
    window.alert("You got the right pin!")
    eastScreen.removeChild(lockObj);
    pin_unlocked = true;
    if(pad_unlocked) {
      window.location.href = "win.html";
    }
  }
  else {
    var alarmSound = new sound("prisonAlarm2.m4a");
    alarmSound.play();
    window.alert("Wrong pin try again...")
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

var mainSound = new sound("ambient.mp3");

document.body.addEventListener("mousemove", function () {
  mainSound.play()
});
