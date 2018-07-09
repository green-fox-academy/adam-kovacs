'use strict';

function Sharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;

  this.use = function() {
    this.inkAmount -= this.width;
  }
}

let mySharpie = new Sharpie('pink', 23);

while (mySharpie.inkAmount - mySharpie.width > 0) {
  mySharpie.use();
}