'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

ctx.fillStyle = 'rgb(176, 78, 240';
let xyPos: number = 0;
for (let i: number = 0; i < 6; i++) {
  xyPos += i * 10;
  ctx.strokeRect(xyPos, xyPos, (i + 1) * 10, (i + 1) * 10);
  ctx.fillRect(xyPos, xyPos, (i + 1) * 10, (i + 1) * 10);
}