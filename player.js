    class Inventory {
        constructor() {
            this.bar = [null, null, null, null, null, null, null, null]


            this.addItem = function (item) {
                var i = 0;
                while(this.bar[i] != null && i < 8) {
                    i++;
                }
                if(i >= 8) {
                    alert("Inventory full!");
                } else {
                    var exists = false;
                    for(var j=0; j < this.bar.length; j++) {
                        if(this.bar[j] == item) exists = true;
                    }
                    if(!exists) this.bar[i] = item;
                }
            }
            this.removeItem = function (index) {
                this.bar[index] = null;
            }
        }
    }


    class Player {
        constructor(room, view) {
            Player.views.NORTH
            this.CurrentRoom = room;
            this.view = view;
            this.inventory = new Inventory();


            this.changeView = function (direction) {
                if (direction == "right") {
                    switch (this.view) {
                        case 'north':
                            this.view = Player.views.EAST;
                            break;
                        case 'east':
                            this.view = Player.views.SOUTH;
                            break;
                        case 'south':
                            this.view = Player.views.WEST;
                            break;
                        case 'west':
                            this.view = Player.views.NORTH;
                    }
                } else {
                    switch (this.view) {
                        case 'north':
                            this.view = Player.views.WEST;
                            break;
                        case 'east':
                            this.view = Player.views.NORTH;
                            break;
                        case 'south':
                            this.view = Player.views.EAST;
                            break;
                        case 'west':
                            this.view = Player.views.SOUTH;
                    }
                }
            }

            this.takeItem = function (item) {
                this.inventory.addItem(item);
            }
            this.dropItem = function (index) {
                this.inventory.removeItem(index);
            }
        }
    }

    Player.views = {
        NORTH: 'north',
        SOUTH: 'south',
        EAST: 'east',
        WEST: 'west'
    }

/*
    var testPlayer = new Player(1, Player.views.NORTH);

    testPlayer.takeItem("key");
    testPlayer.changeView("right");
    console.log(testPlayer.inventory.bar);
    testPlayer.takeItem("shovel");
    console.log(testPlayer.inventory.bar);
    testPlayer.dropItem(1);
    console.log(testPlayer.inventory.bar);*/