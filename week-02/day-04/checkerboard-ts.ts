'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

for (let i: number = 0; i < canvas.height; i += 40) {
  for (let x: number = 0; x < canvas.width; x += 40) {
    if ((x + i) % 80 === 0) {
      ctx.fillStyle = 'black'
    } else {
      ctx.fillStyle = 'white'
    }
    ctx.fillRect(x, i, 40, 40);
  }
}