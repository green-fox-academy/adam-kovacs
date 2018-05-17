'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//DO NOT TOUCH ANYTHING ABOVE... 
//Well okay it doesn't really matter now
//Do the Super hexagon!

function drawHex(x, y, side) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + side, y);
  ctx.lineTo(x + side * 1.5, y + side * 3 / 4);
  ctx.lineTo(x + side, y + side * 3 / 2);
  ctx.lineTo(x, y + side * 3 / 2);
  ctx.lineTo(x - side * 0.5, y + side * 3 / 4);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function honeyComb(side, padding) {
  for (let i: number = 0; i < 7; i++) {
    for (let j: number = 0; j < 7 - Math.abs((i - 3)); j++) {
      drawHex(padding + i * 1.5 * side, padding + (Math.abs((i - 3)) + 2 * j) * side * 3 / 4, side);
    }
  }
}

honeyComb(30, 50);