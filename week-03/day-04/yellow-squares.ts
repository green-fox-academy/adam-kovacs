'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let maxDepth: number = parseInt(window.prompt('Enter fractal depth', '6'));
let depth: number = 0;

function drawSquare(x: number, y: number, width: number, height: number) {
  depth++;
  if (depth >= maxDepth) {
    depth--;
    return   
  }

  ctx.strokeRect(x, y + height / 3, width, height / 3);
  ctx.strokeRect(x + width / 3, y, width / 3, height);

  drawSquare(x, y + height / 3, width / 3, height / 3);
  drawSquare(x + width / 3, y, width / 3, height / 3);
  drawSquare(x + width * 2 / 3, y + height / 3, width / 3, height / 3);
  drawSquare(x + width / 3, y + height * 2 / 3, width / 3, height / 3);
  
  depth--;
  return;
}

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, canvas.width, canvas.height);

drawSquare(0, 0, canvas.width, canvas.height)