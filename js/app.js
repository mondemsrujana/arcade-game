"use strict";
// Enemies our player must avoid
// Variables applied to each of our instances go here,
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  this.sprite = 'images/enemy-bug.png';
};
//player function implemented
//constructor
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  };
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 60 + Math.floor(Math.random() * 100);
  }
  if (this.x > 505) {
    this.x = 0;
  }
  if (player.x < this.x + 60 && player.x + 65 > this.x && player.y < this.y + 60 && player.y + 70 > this.y) {
    player.x = 200;
    player.y = 400;
  }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// draw the player on the screen ,requied method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Placed all enemy objects in an array called allEnemies
// Placed the player object in a variable called player
var allEnemies = [];
var enemy = [60, 145, 230];
var player = new Player(200, 404);
var q = new Enemy(0, enemy[i], 150);
  allEnemies.push(q);
}
// player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.handleInput = function(key) {

  if (key == 'left' && this.x > 0) {
    this.x = this.x - 101;
  }
  if (key == 'right' && this.x < 385) {
    this.x = this.x + 101;
  }
  if (key == 'up' && this.y > 0) {
    this.y = this.y - 82;
  }
  if (key == 'down' && this.y < 385) {
    this.y = this.y + 82;
  }
  if (this.y < 60) {
    setTimeout(() => {
      this.x = 200;
      this.y = 400;
    }, 1000);
  }
}
// var second = 0,
//      minute = 0;
// var  hour = 0;
// var timer = document.querySelector(".timer");
// var interval;
// function startTimer() {
//   interval = setInterval(function() {
//     timer.innerHTML= minute + ":mins " + second + ":secs";
//     second++;
//     if (second == 60) {
//       minute++;
//       second = 0;
//     }
//     if (minute == 60) {
//       hour++;
//       minute = 0;
//     }
//   }, 1000);
// }

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
