'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);
let clr: number = 0;
for (let i: number = 0; i < 300; i++) {
  clr = Math.random() * 255;
  ctx.fillStyle = `rgb(${clr}, ${clr}, ${clr})`;
  ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 3, 3);
}