'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

ctx.fillStyle = 'rgb(176, 78, 240)';
for (let i: number = 0; i < 20; i++) {
  ctx.strokeRect(i * 10, i * 10, 10, 10);
  ctx.fillRect(i * 10, i * 10, 10, 10);
}