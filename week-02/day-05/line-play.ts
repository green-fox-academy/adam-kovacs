'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//DO NOT TOUCH ANYTHING ABOVE... 
//Well okay it doesn't really matter now
//Do the Line play!

ctx.strokeStyle = 'rgb(176, 78, 240)';
ctx.beginPath();
for (let i: number = 0; i < 12; i++) {
  ctx.moveTo(100 + i * 25, 5);
  ctx.lineTo(390, 10 + i * 30);
  ctx.stroke();
}

ctx.strokeStyle = 'green';
ctx.beginPath();
for (let i: number = 0; i < 12; i++) {
  ctx.moveTo(5, 100 + i * 25);
  ctx.lineTo( 10 + i * 30, 390);
  ctx.stroke();
}