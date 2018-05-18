'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//DO NOT TOUCH ANYTHING ABOVE... 
//Well okay it doesn't really matter now
//Do the Line play quarters!

let quarters: number = parseInt((window.prompt("Please enter the number of quadrants:")));
let stroke: number = parseInt((window.prompt("Please enter the number of strokes:")));

let quWidth: number = canvas.width / (Math.sqrt(quarters));
let quHeight: number = canvas.height / (Math.sqrt(quarters));

function linePlay(x, y) {

  ctx.strokeStyle = 'rgb(176, 78, 240)';
  for (let i: number = 0; i < stroke; i++) {
    ctx.beginPath();
    ctx.moveTo((x + i * (quWidth / stroke)), y);
    ctx.lineTo(x + quWidth, y + i * (quHeight / stroke));
    ctx.stroke();
  }

  ctx.strokeStyle = 'green';
  for (let i: number = 0; i < stroke; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y + i * (quHeight / stroke));
    ctx.lineTo(x +i * (quWidth / stroke),y + quHeight)
    ctx.stroke();
  }
}

for (let i: number = 0; i < quarters / 2; i++) {
  for (let j: number = 0; j < quarters / 2; j++) {
    linePlay(j * (canvas.width / Math.sqrt(quarters)), i * (canvas.height / Math.sqrt(quarters)));
  }
}