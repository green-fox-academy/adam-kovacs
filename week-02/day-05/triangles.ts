'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//DO NOT TOUCH ANYTHING ABOVE... 
//Well okay it doesn't really matter now
//Do the Triangles!

let side: number = 21;

for (let i: number = 0; i < 21; i++) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + i * side / 2, i * (side * 3 / 4));
  ctx.lineTo(canvas.width / 2 - side * (10.5 - i), side * 63 / 4);
  ctx.stroke();
}

for (let i: number = 0; i < 21; i++) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - i * side / 2, i * (side * 3 / 4));
  ctx.lineTo(canvas.width / 2 + side * (10.5 - i), side * 63 / 4);
  ctx.stroke();
}

for (let i: number = 0; i < 22; i++) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - i * side / 2, i * (side * 3 / 4));
  ctx.lineTo(canvas.width / 2 + i * side / 2,  i * (side * 3 / 4));
  ctx.stroke();
}
