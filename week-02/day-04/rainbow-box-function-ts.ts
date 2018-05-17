'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function rainbowBox(a: number, clr: string) {
  ctx.strokeStyle = clr;
  ctx.strokeRect(300 - a / 2, 200 - a / 2, a, a);
  console.log(clr);
  console.log(a);
  
  
}

for (let i: number = 0; i < 359; i++) {
  rainbowBox(i, `hsl(${i}, 100%, 50%)`)
}