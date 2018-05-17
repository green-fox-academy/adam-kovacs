'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//DO NOT TOUCH ANYTHING ABOVE... 
//Well okay it doesn't really matter now
//Do the Line play quarters!

let quarters: number = 64;
let stroke: number = 12;
let padding: number = 2;
let quWidth: number = canvas.width / quarters;
let quHeight: number = canvas.height / quarters;

function linePlay(x, y) {

  ctx.strokeStyle = 'rgb(176, 78, 240)';
  for (let i: number = 0; i < stroke; i++) {
    ctx.beginPath();
    ctx.moveTo(x + padding + i * ((quWidth - 2 * padding) / stroke), y + padding);
    ctx.lineTo((x + quWidth) - padding, y + padding + i * ((quHeight - 2 * padding) / stroke));
    ctx.stroke();
  }

  ctx.strokeStyle = 'green';
  for (let i: number = 0; i < stroke; i++) {
    ctx.beginPath();
    ctx.moveTo(x + padding, y + padding + i * ((quHeight - 2 * padding) / stroke));
    ctx.lineTo(x + padding + i * ((quWidth - 2 * padding) / stroke), (y + quHeight) - padding)
    ctx.stroke();
  }
}

for (let i: number = 0; i < quarters / 2; i++) {
  for (let j: number = 0; j < quarters / 2; j++) {
    linePlay(j * (canvas.width / Math.sqrt(quarters)), i * (canvas.height / Math.sqrt(quarters)));
  }
}